# The Brief — v0 Prototype Prompt
### Change.org AI Co-Pilot | Political Change Agent Persona

---

Build a high-fidelity React prototype of an AI co-pilot dashboard for Change.org called "The Brief" — designed for the Political Change Agent persona: justice-driven, civically engaged people running national political campaigns. They want to feel strategic, informed, and part of a broader movement.

---

## TWO VARIANTS

Include a toggle button (top-right corner) to switch between:
- **Variant A: Tabs** — sticky top tab bar, full content on each tab, lands on The Brief by default
- **Variant B: Command Center** — same content as cards in a grid layout, no tabs

---

## PERSONA

The Political Change Agent is fighting for federal policy change. They fear wasting effort on the wrong thing. They need clarity on where they are, what to do next, and to feel like they're not alone. The AI should sound like a trusted strategist — direct, grounded, never generic.

---

## DEMO DATA

- **Campaign:** "End Mandatory Minimum Sentencing for Nonviolent Drug Offenses"
- **Decision makers:** Senate Judiciary Committee + Attorney General
- **Signatures:** 4,847 | **Day:** 34 | **Phase:** Build (Phase 2 of 4)
- **Context:** Starter launched after a neighbor received a 10-year mandatory minimum. The SAFE Justice Act is stalled in the Senate Judiciary Committee.

---

## FIVE SECTIONS (Tabs in Variant A / Cards in Variant B)

**1. The Brief** (default home)
AI daily briefing line at the top. Four summary rows — one insight each from Roadmap, Next Move, Network, and Decision Maker — each with a chevron linking to the full section. Below that, a featured "Your Next Move" callout with a bold action, short explanation, and a CTA button.

**2. My Roadmap**
A 4-phase campaign arc (Spark → Build → Pressure → Decision) with the current phase highlighted. Below it, a 30-day milestone view with 4–5 specific, achievable tasks and their status. Below that, a benchmarking line comparing their progress to similar federal campaigns.

**3. My Network**
Three layers: (1) geographic breakdown of supporters + a notable supporter quote, (2) 2–3 related national petitions on sentencing reform with a "you're not alone" framing, (3) 2–3 national orgs (ACLU, Brennan Center, Families Against Mandatory Minimums) with a "reach them" affordance.

**4. Decision Maker Intel**
Primary: Sen. Dick Durbin, Chair of Senate Judiciary — receptivity signal, key pressure points, what it takes to get their attention, and a letter CTA. Secondary: 2–3 supporting decision makers with lighter treatment.

**5. Story So Far**
A short auto-generated campaign narrative (3–5 sentences) followed by a vertical timeline of 4–5 turning point moments since launch.

---

## BRANDING & COLOR PALETTE

Use the official Change.org design system colors. The overall feel should be clean, editorial, and civic — white and light gray backgrounds with red and blue as purposeful accents.

**Backgrounds:**
- Page background: `#f1f3f8` or `#ffffff`
- Card/surface background: `#ffffff`
- Subtle section background: `#e9ebf3`

**Text:**
- Primary text: `#3a293e`
- Secondary/muted text: `#6f7381`
- Tertiary/label text: `#8a8e9d`

**Borders & Dividers:**
- `#dde0e9` (default), `#b7bbc9` (stronger)

**Red (primary brand accent — use for CTAs, active states, key highlights):**
- Primary: `#e01a2b`
- Hover/dark: `#d40225`
- Deep: `#af0521`
- Light tint: `#fef1f3`
- Mid tint: `#ffe2e1`

**Blue (secondary accent — use for AI callouts, links, informational states):**
- Primary: `#0d4dfb`
- Deep: `#003193`
- Mid: `#4771ff`
- Light tint: `#f0f7ff`
- Mid tint: `#cddbff`

**Usage guidelines:**
- CTAs and active tab indicators: red (`#e01a2b`)
- AI voice callout boxes and info highlights: light blue tint (`#f0f7ff`) with blue text (`#003193`)
- Receptivity signals: use green/amber/red naturally (not from this palette)
- Avoid dark backgrounds — keep it light, clean, and document-like
- Top nav or tab bar can use a white background with a red bottom border or accent

---

## TECHNICAL SPECS

- React + Tailwind CSS
- Single file — all components inline
- No external API calls — all data hardcoded as demo data
- Variant switcher button fixed in top-right corner, always visible
- Interactive: hover states, expandable sections, clickable CTAs (CTAs don't need to go anywhere)
- Desktop-first; mobile-responsive is a nice-to-have
- Tab bar (Variant A) should be sticky

---

## WHAT SUCCESS LOOKS LIKE

A Political Change Agent opens this and immediately thinks:
1. *"I know exactly where I am."* — The Roadmap
2. *"I know what to do next."* — The Brief / Next Move
3. *"I'm not alone in this."* — My Network
4. *"This thing actually understands my campaign."* — Decision Maker Intel + Story So Far

The prototype should be demo-ready for a leadership review. Real enough to provoke a genuine reaction — "yes, this is what I need" or "no, that's not it" — both are valuable.
