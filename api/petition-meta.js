export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { url } = req.query;
  if (!url || !url.includes('change.org')) {
    return res.status(400).json({ error: 'change.org URL required' });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
      redirect: 'follow',
    });

    const html = await response.text();

    // og:image
    const imgM =
      html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i) ||
      html.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:image"/i) ||
      html.match(/(https:\/\/assets\.change\.org\/photos\/[^\s"'<>]+)/);
    const img = imgM ? (imgM[1] || imgM[0]) : null;

    // og:title — skip generic Change.org fallbacks
    const GENERIC_TITLES = ['sign the petition', 'change.org', 'petition'];
    const titleM =
      html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/i) ||
      html.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:title"/i);
    let title = titleM ? titleM[1].replace(/\s*\|\s*Change\.org.*$/i, '').trim() : null;
    if (title && GENERIC_TITLES.some(g => title.toLowerCase() === g)) title = null;

    // Signatures — try Next.js __NEXT_DATA__, inline JSON, and text patterns
    const sigPatterns = [
      /"signatures_count"\s*:\s*(\d+)/,
      /"signaturesCount"\s*:\s*(\d+)/,
      /"signatures_collected"\s*:\s*(\d+)/,
      /"total_signature_count"\s*:\s*(\d+)/,
      /(\d[\d,]+)\s+(?:people\s+)?(?:have\s+)?signed/i,
      /"count"\s*:\s*(\d+)[^}]*"signatures"/,
    ];
    let sigs = null;
    for (const p of sigPatterns) {
      const m = html.match(p);
      if (m) { sigs = parseInt((m[1] || '').replace(/,/g, '')); break; }
    }

    // Comments
    const cmtM =
      html.match(/"total_comment_count"\s*:\s*(\d+)/) ||
      html.match(/"comment_count"\s*:\s*(\d+)/) ||
      html.match(/"commentCount"\s*:\s*(\d+)/);
    const cmt = cmtM ? parseInt(cmtM[1]) : null;

    return res.status(200).json({ img, title, sigs, cmt });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
