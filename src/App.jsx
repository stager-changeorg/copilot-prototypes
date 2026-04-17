import React, { useState } from 'react';


const T = {
  brand50:'#FFF0EF',brand100:'#FFD9D7',brand400:'#F34E49',brand500:'#E02822',brand600:'#BC1E19',
  accent50:'#F0F7FF',accent100:'#E2EFFF',accent200:'#CDDBFF',accent300:'#A5B9FF',
  accent400:'#4771FF',accent600:'#003CD6',accent700:'#0038BC',
  g0:'#FFFFFF',g50:'#FAF8FD',g100:'#F2F1F8',g200:'#EDE9F3',g300:'#E1DDE9',g400:'#D0CBDA',
  g500:'#BDB7C9',g600:'#AAA4B6',g700:'#918A9D',g800:'#766F81',g900:'#5E5768',
  g950:'#47414F',g970:'#312D37',g1000:'#1F1C23',
  success:'#0F8110',successBg:'#F0FFF0',warning:'#FE9311',warningBg:'#FFFAED',
  error:'#D40225',errorBg:'#FEF1F3',
  navy:'#0F2B52',navyMid:'#1B3A6B',navyLight:'#E8EEF7',navyBorder:'#C2D0E8',
};

const F = {
  serif: "'IBM Plex Serif', Georgia, serif",
  sans:  "'IBM Plex Sans', -apple-system, sans-serif",
  mono:  "'IBM Plex Mono', 'Courier New', monospace",
};

/* ── DATA ── */
const CAMPAIGN = {
  name:"End Mandatory Minimum Sentencing for Nonviolent Drug Offenses",
  signatures:4847, nextMilestone:10000, age:34, phase:2, totalPhases:4, states:38,
  image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=80&fit=crop&q=80",
};

const PHASES = [
  {id:1,name:"Spark",   desc:"Launch, first 1K signatures, establishing the story",complete:true, current:false},
  {id:2,name:"Build",   desc:"Coalition outreach, media engagement, congressional contact",complete:false,current:true},
  {id:3,name:"Pressure",desc:"Peak mobilization, congressional meetings, coordinated delivery",complete:false,current:false},
  {id:4,name:"Decision",desc:"SAFE Justice Act vote window, petition delivery, response",complete:false,current:false},
];

const PHASE_ACTIVITIES = {
  1:[
    {id:1,title:"Publish your petition with a personal story",type:"platform",status:"done",time:"30 min",impact:"high",
     why:"The most compelling petitions lead with a specific story — not statistics. Yours opened with a sentencing hearing you witnessed. That specificity is what got people to sign.",
     how:"Your petition is live. The personal story you shared has been referenced by multiple commenters as the reason they signed and shared."},
    {id:2,title:"Send to your closest 10 supporters first",type:"real-world",status:"done",time:"1 hr",impact:"high",
     why:"Your first 50–100 signatures from people who know and trust you create the social proof that convinces strangers to sign.",
     how:"You reached 91 signatures on Day 1. This worked exactly as intended."},
    {id:3,title:"Post to your personal social channels",type:"platform",status:"done",time:"15 min",impact:"medium",
     why:"Your personal network is your warmest audience. They share because they know you — not just because they care about the issue.",
     how:"Your Facebook and Twitter shares drove the first signature wave in Week 1."},
    {id:4,title:"Submit to local Facebook and Nextdoor groups",type:"real-world",status:"done",time:"45 min",impact:"medium",
     why:"Local groups are where people in your community are already talking about issues that affect them.",
     how:"Community shares in Week 1 contributed to early momentum from Illinois and surrounding areas."},
  ],
  2:[
    {id:4,title:"Contact Sen. Durbin's Illinois constituent office",type:"real-world",status:"pending",time:"15 min",impact:"high",
     why:"28% of your signatures are from Illinois. His office tracks constituent petition volumes and this campaign has enough to trigger a formal acknowledgment. A letter citing your Illinois signers gets routed to judiciary staff — not the form-response pile.",
     how:"Call (312) 353-4952 and ask for the judiciary staff liaison. Mention your petition count and that you represent Illinois constituents. Request a brief call or meeting."},
    {id:'draft-letter',title:"Draft your constituent letter — pre-written for you",type:"platform",status:"pending",time:"5 min",impact:"low",
     why:"A letter that names specific Illinois constituents and cites the SAFE Justice Act by bill number is 3× more likely to get a response than a generic message. We've drafted it — you just review and send.",
     how:"Click 'Review draft' to see your pre-written letter. It includes your petition count, the Illinois signer percentage, and a specific ask tied to the SAFE Justice Act committee timeline. Edit anything you want, then send directly from here."},
    {id:5,title:"Send a personal email update to your supporters",type:"platform",status:"pending",time:"20 min",impact:"high",
     why:"Supporters who get a direct email from the petition starter are 4× more likely to share than those who only got an automated update.",
     how:"Use the supporter message tool. Share one new development — the Brennan Center retweet — and ask them to forward to 3 people in Illinois."},
    {id:6,title:"Call Sen. Durbin's Chicago district office",type:"real-world",status:"pending",time:"15 min",impact:"medium",
     why:"Constituent phone calls are tracked differently from emails. A direct call signals urgency and intent in a way signatures alone don't.",
     how:"Call (312) 353-4952. Say: 'I'm an Illinois constituent with a petition at 4,847 signatures on mandatory minimum reform. I'd like to speak with the judiciary staff liaison and request a brief call.'"},
    {id:7,title:"Reach out to ACLU Illinois for amplification",type:"real-world",status:"pending",time:"30 min",impact:"high",
     why:"The ACLU IL chapter has 180K email subscribers and has amplified similar campaigns. Their co-sign is worth 2,000–5,000 additional signatures.",
     how:"Email the ACLU IL criminal justice team with your petition link, current count, and Brennan Center connection. Keep it under 150 words."},
    {id:8,title:"Connect with a returning citizen advocacy org",type:"real-world",status:"pending",time:"1 hr",impact:"high",
     why:"Lived-experience voices are the most persuasive constituency for sentencing reform. Their credibility with legislators is unmatched.",
     how:"Reach out to Safer Foundation (Chicago) or Illinois Prison Project. A 15-minute intro call is all you need to start."},
    {id:9,title:"Pitch your story to a local journalist",type:"real-world",status:"pending",time:"45 min",impact:"high",
     why:"Local media coverage is the #1 driver of signature spikes for policy campaigns. The WBEZ segment on Day 15 added 600+ signatures in 48 hours.",
     how:"Find a reporter covering criminal justice at the Chicago Tribune or Sun-Times. Offer the local angle: the specific case that launched this, the Illinois connection, the Brennan Center reach."},
    {id:10,title:"Create a shareable progress milestone post",type:"platform",status:"pending",time:"15 min",impact:"medium",
     why:"Milestone posts get shared at 3× the rate of the original launch. People love being part of a moving story.",
     how:"Post a momentum update citing the Brennan Center retweet and your 38-state reach. Ask signers to share with one specific person."},
    {id:11,title:"Activate your top supporters as ambassadors",type:"platform",status:"pending",time:"10 min",impact:"medium",
     why:"Your 10 most engaged supporters can each drive 20–50 signatures from their own networks if given the right tools.",
     how:"Use the ambassador tool to give your most active supporters a personalized share link and a short message guide."},
  ],
  3:[
    {id:12,title:"Request a constituent meeting with Sen. Durbin's office",type:"real-world",status:"upcoming",time:"2 hrs prep",impact:"high",
     why:"In-person constituent meetings convert petition volume into political will. A group of 5–10 people at his Chicago office is hard to ignore.",
     how:"Submit a formal meeting request to the district director, citing your signature count and organizational allies."},
    {id:13,title:"Organize a constituent letter day",type:"real-world",status:"upcoming",time:"3 hrs",impact:"high",
     why:"Coordinated personal letters land differently than petition signatures. They signal high commitment from real constituents.",
     how:"Identify 50–100 Illinois signers and invite them to a letter-writing event. Provide talking points, not a template — personalization matters."},
    {id:14,title:"Coordinate a joint press release with allied orgs",type:"real-world",status:"upcoming",time:"1 day",impact:"high",
     why:"A press release co-signed by your coalition + ACLU + Brennan Center is a newsworthy event in itself.",
     how:"Propose a specific news hook: 'Coalition calls on Sen. Durbin to advance the SAFE Justice Act.'"},
    {id:15,title:"Launch a targeted Illinois mobilization campaign",type:"platform",status:"upcoming",time:"30 min",impact:"high",
     why:"Illinois signatures are your most valuable constituency pressure for Durbin. A targeted ask to IL signers is high-leverage.",
     how:"Use the geo-targeting tool to send a specific call-to-action to your 1,350 Illinois signers."},
    {id:16,title:"Host a community event or courthouse vigil",type:"real-world",status:"upcoming",time:"Full day",impact:"medium",
     why:"Public gatherings generate earned media coverage and deepen community investment in the outcome.",
     how:"Partner with a local organization. Invite the person whose hearing started this, if they're willing to share publicly."},
  ],
  4:[
    {id:17,title:"Formally deliver the petition to Sen. Durbin's Washington office",type:"real-world",status:"upcoming",time:"Full day",impact:"high",
     why:"Petition delivery is a media event as much as a political act. It creates a moment, a record, and a press opportunity.",
     how:"Coordinate simultaneous delivery with your allied organizations. Have a directly affected constituent speak. Invite media."},
    {id:18,title:"Monitor the SAFE Justice Act committee calendar",type:"real-world",status:"upcoming",time:"Ongoing",impact:"high",
     why:"The vote window is narrow. Knowing when the committee meets lets you time constituent pressure for maximum effect.",
     how:"Track congress.gov for hearing dates. Sign up for Senate Judiciary Committee schedule alerts."},
    {id:19,title:"Send final mobilization message to all supporters",type:"platform",status:"upcoming",time:"20 min",impact:"high",
     why:"The final push before a vote is the most important message you'll send. It needs to be personal, urgent, and specific.",
     how:"Send to all supporters: 'Call Sen. Durbin TODAY. Here's the number. Here's what to say.'"},
    {id:20,title:"Prepare a response plan for all outcomes",type:"platform",status:"upcoming",time:"2 hrs",impact:"medium",
     why:"Whether the bill passes, fails, or stalls, your supporters need a clear message from you. Draft it now.",
     how:"Write three drafts: win, partial win, and setback. Your supporters will look to you first."},
  ],
};

const RELATED_PETITIONS = [
  {title:"Pass the SAFE Justice Act — Restore Judicial Discretion",signatures:34782,status:"Active",
   image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=80&h=80&fit=crop&q=80"},
  {title:"End Racial Disparities in Federal Drug Sentencing",signatures:19241,status:"Active",
   image:"https://images.unsplash.com/photo-1464863979621-258859e62245?w=80&h=80&fit=crop&q=80"},
  {title:"Restore Parole for Federal Prisoners",signatures:11903,status:"Won",
   image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=80&h=80&fit=crop&q=80"},
];

const ORGANIZATIONS = [
  {name:"ACLU — National Prison Project",type:"High-profile amplifier",match:97,
   initials:"ACLU",color:"#003DA5",bg:"#E8F0FF",
   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ACLU_Logo.svg/200px-ACLU_Logo.svg.png"},
  {name:"NAACP Legal Defense Fund",type:"Credibility + community reach",match:93,
   initials:"NAACP",color:"#002868",bg:"#E8EDF8",
   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/NAACP_seal.svg/200px-NAACP_seal.svg.png"},
  {name:"Brennan Center for Justice",type:"Policy-level ally",match:89,
   initials:"BC",color:"#1A3A5C",bg:"#E6EEF5",
   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Brennan_Center_for_Justice_logo.svg/200px-Brennan_Center_for_Justice_logo.svg.png"},
];

const NOTABLE_SIGNERS = [
  {photo:"https://i.pravatar.cc/100?img=22",role:"Public Defender",location:"Cook County, IL",
   note:"Signed with a detailed comment on judicial discretion — shared to 3 legal professional networks",followers:null},
  {photo:"https://i.pravatar.cc/100?img=42",role:"Pastor, prison reentry ministry",location:"Atlanta, GA",
   note:"Shared to congregation of 800+ families and their weekly reentry program newsletter",followers:"12K"},
  {photo:"https://i.pravatar.cc/100?img=35",role:"Criminal justice researcher",location:"Northwestern University",
   note:"Left a detailed comment later cited by the Brennan Center in their amplification tweet",followers:"14K"},
];

const SUPER_SUPPORTER = {
  name:"Marcus A.",location:"Chicago, IL",
  photo:"https://i.pravatar.cc/160?img=3",
  actions:"Shared × 4 · Commented · Drove 23 signatures",
  quote:"My brother got five years for a first-time possession charge. Five years. This petition is the first time I've felt like the system can actually be changed from the outside.",
};

const COMMENTS = [
  {id:1,photo:"https://i.pravatar.cc/64?img=3",name:"Marcus A.",location:"Chicago, IL",
   text:"My brother got five years for his first charge. He had no priors, no violence. He came out a different person. This petition matters to everyone who's watched that happen.",
   date:"3 hours ago",helpful:47},
  {id:2,photo:"https://i.pravatar.cc/64?img=42",name:"Rev. Sandra T.",location:"Atlanta, GA",
   text:"We've been fighting mandatory minimums from our congregation for 20 years. Finally something we can point to that's moving. Sharing this with our entire network Sunday.",
   date:"1 day ago",helpful:89},
  {id:3,photo:"https://i.pravatar.cc/64?img=22",name:"K. Morgan, Public Defender",location:"Cook County, IL",
   text:"As a public defender, I've watched this destroy families for decades. This campaign is putting constituent pressure in exactly the right place at the right time.",
   date:"2 days ago",helpful:134},
  {id:4,photo:"https://i.pravatar.cc/64?img=11",name:"James R.",location:"Houston, TX",
   text:"Been through the system myself. 4 years for possession. Lost my job, my apartment, my relationship. Signed and shared everywhere I can reach.",
   date:"2 days ago",helpful:211},
  {id:5,photo:"https://i.pravatar.cc/64?img=56",name:"Patricia L.",location:"New York, NY",
   text:"The Brennan Center's research is damning. Mandatory minimums haven't reduced crime — they've just filled prisons. Time to end them.",
   date:"3 days ago",helpful:67},
];

const SUPPORT_REGIONS = [
  {region:"Illinois",pct:28,level:"Strong"},
  {region:"New York",pct:19,level:"Strong"},
  {region:"California",pct:16,level:"Growing"},
  {region:"Texas",pct:12,level:"Growing"},
  {region:"Other states",pct:25,level:"Emerging"},
];

const DECISION_MAKER = {
  primary:{
    name:"Sen. Dick Durbin",title:"U.S. Senator (D-IL) · Senate Judiciary Committee Chair",
    photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&q=80",
    bio:"Dick Durbin has represented Illinois in the U.S. Senate since 1997 and currently serves as Senate Majority Whip and Chair of the Senate Judiciary Committee. He co-authored the Fair Sentencing Act of 2010, which reduced the crack-to-powder cocaine sentencing disparity, and has been one of Congress's most consistent voices for mandatory minimum reform. He co-sponsored the SAFE Justice Act in the 117th and 118th Congresses. His Chicago district office actively tracks constituent petition volumes on criminal justice issues.",
    receptivity:"green",receptivityLabel:"Long-time champion of mandatory minimum reform",
    alignmentScore:76,
    supportLikelihood:"medium",
    issueAlignment:[
      {label:"Mandatory minimum reform",score:94},
      {label:"Sentencing disparity reduction",score:88},
      {label:"Judicial discretion",score:61},
      {label:"Drug decriminalization",score:38},
      {label:"Prison & reentry funding",score:52},
    ],
    votingRecord:[
      {bill:"Fair Sentencing Act",year:2010,vote:"yes",note:"Co-author — reduced crack/powder disparity 18:1"},
      {bill:"Sentencing Reform & Corrections Act",year:2016,vote:"no",note:"Voted against floor motion — procedural block"},
      {bill:"SAFE Justice Act",year:2017,vote:"yes",note:"Co-sponsor"},
      {bill:"First Step Act",year:2018,vote:"yes",note:"Bipartisan criminal justice overhaul"},
      {bill:"MORE Act (marijuana decrim)",year:2020,vote:"abstain",note:"Did not vote — paired absence"},
      {bill:"EQUAL Act",year:2022,vote:"yes",note:"Eliminate remaining cocaine sentencing disparity"},
      {bill:"Safer Detention Act",year:2023,vote:"no",note:"Opposed expanded compassionate release provision"},
    ],
    pressurePoints:[
      "Co-sponsored the SAFE Justice Act in multiple congressional sessions",
      "Publicly cited mass incarceration as a top-3 criminal justice priority in 2023",
      "Constituent pressure from Illinois — your campaign's #1 state — carries direct weight",
    ],
    whatItTakes:"A coordinated wave of constituent letters from Illinois signers + one credible organizational co-signer (ACLU, Brennan Center, or NAACP)",
  },
  secondary:[
    {name:"Rep. Jim Jordan",title:"House Judiciary Committee Chair",photo:"https://i.pravatar.cc/80?img=57",
     alignmentScore:28,supportLikelihood:"low",receptivity:"unknown",cta:"Draft outreach",region:"Federal",
     note:"Skeptical of sentencing reform framing as 'soft on crime.' Focus outreach on fiscal and states-rights arguments."},
    {name:"DOJ Criminal Division",title:"Sentencing & Corrections Policy Unit",photo:"https://i.pravatar.cc/80?img=68",
     alignmentScore:61,supportLikelihood:"medium",receptivity:"unknown",cta:"Draft outreach",region:"Federal",
     note:"Career staff have supported reform in past administrations. Direct engagement via formal comment periods is most effective."},
    {name:"Your Congressional Rep",title:"District Office — constituent intake",photo:"https://i.pravatar.cc/80?img=14",
     alignmentScore:78,supportLikelihood:"high",receptivity:"high",cta:"Find contacts",region:"Your district",
     note:"Constituent-level contact is highest-priority lever. Your Illinois signers can generate direct constituent volume."},
    {name:"State AGs — IL, NY, CA",title:"State-level sentencing reform advocates",photo:"https://i.pravatar.cc/80?img=47",
     alignmentScore:85,supportLikelihood:"high",receptivity:"high",cta:"Find contacts",region:"State-level",
     note:"IL AG Kwame Raoul has publicly supported federal sentencing reform. A co-signed letter from state AGs would be newsworthy."},
  ],
};

const TURNING_POINTS = [
  {day:1, label:"Campaign launched",detail:"After attending the sentencing hearing. 91 signatures in the first 24 hours.",today:false},
  {day:8, label:"First major share spike",detail:"A formerly incarcerated advocate with 22K followers shared the petition. +890 signatures in 48 hours.",today:false},
  {day:15,label:"Earned media — public radio",detail:"Featured in a WBEZ Chicago segment on federal drug sentencing disparities.",today:false},
  {day:27,label:"Brennan Center amplified",detail:"The Brennan Center retweeted to 180K followers. +412 signatures that week.",today:false},
  {day:34,label:"Today",detail:"4,847 signatures across 38 states. Phase 2 underway. Coalition window is open.",today:true},
];

const CASE_STUDIES = [
  {
    id:1,title:"Pass the First Step Act",starter:"Coalition of 40+ organizations",
    image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=180&fit=crop&q=80",
    signatures:"1.2M",outcome:"Signed into law — December 2018",
    similarity:"Federal sentencing reform, bipartisan coalition",
    path:[
      {day:1,   label:"Launch",              detail:"40 organizations co-sign a petition calling for sentencing reform"},
      {day:45,  label:"1 million signatures",detail:"Crossed 1M after celebrities amplified the campaign publicly"},
      {day:120, label:"Congressional champion",detail:"Sen. Grassley and Rep. Jeffries introduce bipartisan bill"},
      {day:180, label:"Coalition delivery",  detail:"Delivered to 50 congressional offices simultaneously on one day"},
      {day:310, label:"Senate vote",         detail:"Passed 87–12 — overwhelming bipartisan support"},
      {day:340, label:"Signed into law",     detail:"President Trump signed the First Step Act on December 21, 2018"},
    ],
  },
  {
    id:2,title:"End Youth Solitary Confinement in Federal Prisons",
    starter:"Families Against Mandatory Minimums",
    image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=180&fit=crop&q=80",
    signatures:"287K",outcome:"Obama executive order — January 2016",
    similarity:"Federal criminal justice reform via executive action",
    path:[
      {day:1,  label:"Campaign launched",   detail:"Started by a formerly incarcerated youth after testifying before Congress"},
      {day:30, label:"NYT feature",         detail:"New York Times covered it — signatures tripled in 3 days"},
      {day:75, label:"DOJ engagement",      detail:"DOJ opened a formal review of solitary confinement policies"},
      {day:120,label:"Presidential brief",  detail:"Petition cited in a White House criminal justice reform briefing"},
      {day:200,label:"Executive order",     detail:"Obama banned solitary confinement for all juveniles in federal facilities"},
    ],
  },
  {
    id:3,title:"Restore Judicial Discretion in Drug Sentencing",
    starter:"ACLU Illinois",
    image:"https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=180&fit=crop&q=80",
    signatures:"89K",outcome:"Illinois SB 58 passed — July 2021",
    similarity:"State-level mandatory minimum reform with coalition support",
    path:[
      {day:1,  label:"Coordinated launch",  detail:"ACLU IL and NAACP co-launched with faith coalition backing"},
      {day:21, label:"First hearing",       detail:"Legislative sponsor introduced SB 58 citing the petition directly"},
      {day:60, label:"Lobby day",           detail:"200 constituents traveled to Springfield for advocacy day"},
      {day:90, label:"Committee vote",      detail:"Judiciary committee voted 9–3 to advance the bill"},
      {day:145,label:"Floor vote",          detail:"Illinois Senate passed 38–19, House passed 68–48"},
      {day:160,label:"Signed into law",     detail:"Governor Pritzker signed SB 58, restoring judicial discretion for first-time offenders"},
    ],
  },
];

/* ── ICONS ── */
const Ic = {
  Bell:()=><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>,
  ChevR:({s=15})=><svg width={s} height={s} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>,
  ChevD:({s=15})=><svg width={s} height={s} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>,
  Zap:()=><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
  Map:()=><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>,
  Users:()=><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>,
  Target:()=><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>,
  Book:()=><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>,
  Brief:()=><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>,
  Check:({s=11})=><svg width={s} height={s} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>,
  Globe:()=><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>,
  Monitor:()=><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/></svg>,
  Play:()=><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>,
  ThumbUp:()=><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"/></svg>,
  ThumbDown:()=><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"/></svg>,
};

/* ── ATOMS ── */
function Badge({children,color="blue"}){
  const s={
    blue:{background:T.accent100,color:T.accent600,border:`1px solid ${T.accent200}`},
    red:{background:T.brand50,color:T.brand600,border:`1px solid ${T.brand100}`},
    green:{background:T.successBg,color:T.success,border:'1px solid #B8FEB9'},
    amber:{background:'#FFFAED',color:'#9D470F',border:'1px solid #FFE3A8'},
    gray:{background:T.g100,color:T.g900,border:`1px solid ${T.g300}`},
    purple:{background:'#F5F0FF',color:'#6B21A8',border:'1px solid #E9D5FF'},
  }[color]||{};
  return <span style={{...s,display:'inline-flex',alignItems:'center',padding:'2px 8px',
    fontSize:'11px',fontWeight:600,borderRadius:99,whiteSpace:'nowrap'}}>{children}</span>;
}

function AICallout({children}){
  return <div className="ai-callout" style={{padding:'11px 14px'}}>
    <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
      <span style={{fontSize:9,fontWeight:900,letterSpacing:'.08em',textTransform:'uppercase',
        color:'#003193',marginTop:2,flexShrink:0}}>AI</span>
      <p style={{margin:0,color:'#003193',fontSize:13,lineHeight:1.6,fontStyle:'italic'}}>{children}</p>
    </div>
  </div>;
}

function SecHdr({icon,title,subtitle}){
  return <div style={{marginBottom:12}}>
    <h2 style={{margin:0,fontSize:34,fontWeight:700,color:T.g1000,lineHeight:1.15,fontFamily:F.sans}}>{title}</h2>
    {subtitle&&<p style={{margin:'7px 0 0',fontSize:13,color:T.g700,fontFamily:F.sans}}>{subtitle}</p>}
  </div>;
}

function Lbl({children,color}){
  return <div className="lbl" style={color?{color,fontFamily:F.sans,fontWeight:800}:{fontFamily:F.sans,fontWeight:800}}>{children}</div>;
}

function OrgLogo({org}){
  const [failed,setFailed]=useState(false);
  return <div style={{width:52,height:52,borderRadius:10,flexShrink:0,overflow:'hidden',
    background:failed?org.bg:T.g0,border:`1px solid ${T.g200}`,
    display:'flex',alignItems:'center',justifyContent:'center'}}>
    {!failed
      ?<img src={org.logo} alt={org.name}
          style={{width:44,height:44,objectFit:'contain'}}
          onError={()=>setFailed(true)}/>
      :<span style={{fontSize:11,fontWeight:900,color:org.color,letterSpacing:'-.01em',textAlign:'center',
          lineHeight:1.1,padding:'0 4px'}}>{org.initials}</span>
    }
  </div>;
}

/* ── ACTIVITY ROW ── */
function ActivityRow({act,isOpen,onToggle}){
  const isRW = act.type==='real-world';
  const statusColor = act.status==='done'?T.success:act.status==='pending'?T.accent400:T.g400;
  const statusBg = act.status==='done'?T.successBg:act.status==='pending'?T.accent50:T.g100;
  return <div style={{marginBottom:2}}>
    <div onClick={onToggle} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',
      borderRadius:8,cursor:'pointer',background:isOpen?T.g50:T.g0,
      border:`1px solid ${isOpen?T.g300:T.g200}`,transition:'all .12s'}}
      onMouseEnter={e=>{if(!isOpen)e.currentTarget.style.background=T.g50}}
      onMouseLeave={e=>{if(!isOpen)e.currentTarget.style.background=T.g0}}>
      {/* Status node */}
      <div style={{width:20,height:20,borderRadius:'50%',flexShrink:0,display:'flex',
        alignItems:'center',justifyContent:'center',background:statusBg,
        border:`1.5px solid ${statusColor}`}}>
        {act.status==='done'&&<span style={{color:T.success}}><Ic.Check s={10}/></span>}
        {act.status==='pending'&&<div style={{width:6,height:6,borderRadius:'50%',background:T.accent400}} className="pulse-d"/>}
        {act.status==='upcoming'&&<div style={{width:5,height:5,borderRadius:'50%',background:T.g500}}/>}
      </div>
      {/* Type badge */}
      <div style={{display:'flex',alignItems:'center',gap:4,padding:'2px 7px',borderRadius:99,flexShrink:0,
        background:isRW?'#FFF7ED':'#F0F9FF',
        border:`1px solid ${isRW?'#FED7AA':'#BAE6FD'}`}}>
        {isRW?<Ic.Globe/>:<Ic.Monitor/>}
        <span style={{fontSize:10,fontWeight:700,color:isRW?'#9A3412':'#075985'}}>
          {isRW?'Real-world':'Platform'}
        </span>
      </div>
      <span style={{flex:1,fontSize:13,fontWeight:act.status==='upcoming'?500:600,
        color:act.status==='upcoming'?T.g700:T.g1000,lineHeight:1.4}}>{act.title}</span>
      <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
        <span style={{fontSize:11,color:T.g700}}>{act.time}</span>
        <div style={{color:T.g500,transition:'transform .2s',
          transform:isOpen?'rotate(180deg)':'none'}}>
          <Ic.ChevD s={13}/>
        </div>
      </div>
    </div>
    {isOpen&&<div className="fade-in" style={{margin:'0 0 4px',padding:'14px 16px',
      background:T.g50,borderRadius:'0 0 8px 8px',
      border:`1px solid ${T.g200}`,borderTop:'none'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}}>
        <div>
          <div style={{fontSize:11,fontWeight:800,color:T.g700,textTransform:'uppercase',
            letterSpacing:'.08em',marginBottom:5,fontFamily:F.sans}}>Why this matters</div>
          <p style={{margin:0,fontSize:13,color:T.g950,lineHeight:1.6}}>{act.why}</p>
        </div>
        <div>
          <div style={{fontSize:11,fontWeight:800,color:T.g700,textTransform:'uppercase',
            letterSpacing:'.08em',marginBottom:5,fontFamily:F.sans}}>How to do it</div>
          <p style={{margin:0,fontSize:13,color:T.g950,lineHeight:1.6}}>{act.how}</p>
        </div>
      </div>
      <div style={{display:'flex',gap:8}}>
        <button className="btn-p" style={{padding:'7px 16px',fontSize:12}}>Take action</button>
        <button className="btn-s" style={{padding:'6px 14px',fontSize:12}}>Save for later</button>
      </div>
    </div>}
  </div>;
}

/* ── PHASE SECTION ── */
function PhaseSection({phase,isOpen,onToggle}){
  const [openAct,setOpenAct] = useState(null);
  const acts = PHASE_ACTIVITIES[phase.id]||[];
  const done = acts.filter(a=>a.status==='done').length;
  const total = acts.length;
  const pct = Math.round((done/total)*100);

  const rw = acts.filter(a=>a.type==='real-world');
  const pl = acts.filter(a=>a.type==='platform');

  const statusColor = phase.complete?T.success:phase.current?T.accent400:T.g500;
  const statusLabel = phase.complete?'Complete':phase.current?'In progress':'Upcoming';

  return <div className="card-r" style={{overflow:'hidden',marginBottom:10,
    opacity:(!phase.complete&&!phase.current)?0.72:1}}>
    <button onClick={onToggle} style={{width:'100%',display:'flex',alignItems:'center',gap:12,
      padding:'14px 18px',background:'none',border:'none',cursor:'pointer',fontFamily:'inherit',
      borderBottom:isOpen?`1px solid ${T.g200}`:'none'}}>
      {/* Phase indicator */}
      <div style={{width:32,height:32,borderRadius:'50%',flexShrink:0,display:'flex',
        alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:14,
        background:phase.complete?T.successBg:phase.current?T.accent100:T.g100,
        color:phase.complete?T.success:phase.current?T.accent600:T.g600,
        border:`2px solid ${phase.complete?'#B8FEB9':phase.current?T.accent200:T.g300}`}}>
        {phase.complete?<Ic.Check s={14}/>:phase.id}
      </div>
      <div style={{flex:1,textAlign:'left'}}>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:2}}>
          <span style={{fontSize:14,fontWeight:800,color:phase.current?T.g1000:T.g970,fontFamily:F.sans}}>
            Phase {phase.id}: {phase.name}
          </span>
          <Badge color={phase.complete?'green':phase.current?'blue':'gray'}>{statusLabel}</Badge>
        </div>
        <p style={{margin:0,fontSize:12,color:T.g700}}>{phase.desc}</p>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:10,flexShrink:0}}>
        <div style={{textAlign:'right'}}>
          <div style={{fontSize:11,fontWeight:700,color:statusColor}}>{done}/{total} done</div>
          <div style={{width:60,height:4,background:T.g200,borderRadius:99,marginTop:3,overflow:'hidden'}}>
            <div style={{height:'100%',width:`${pct}%`,background:statusColor,borderRadius:99}}/>
          </div>
        </div>
        <div style={{color:T.g500,transition:'transform .2s',
          transform:isOpen?'rotate(180deg)':'none'}}>
          <Ic.ChevD s={15}/>
        </div>
      </div>
    </button>
    {isOpen&&<div className="fade-in" style={{padding:'16px 18px'}}>
      <p style={{margin:'0 0 14px',fontSize:13.5,color:T.g950,lineHeight:1.6,
        borderLeft:`3px solid ${phase.current?T.accent400:T.g300}`,paddingLeft:12,
        fontStyle:'italic',color:T.g800}}>{phase.desc}</p>
      {rw.length>0&&<>
        <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:8}}>
          <Ic.Globe/>
          <span style={{fontSize:11,fontWeight:800,letterSpacing:'.08em',textTransform:'uppercase',color:'#9A3412'}}>
            Real-world actions ({rw.length})
          </span>
        </div>
        <div style={{marginBottom:14}}>
          {rw.map(a=><ActivityRow key={a.id} act={a}
            isOpen={openAct===a.id} onToggle={()=>setOpenAct(openAct===a.id?null:a.id)}/>)}
        </div>
      </>}
      {pl.length>0&&<>
        <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:8}}>
          <Ic.Monitor/>
          <span style={{fontSize:11,fontWeight:800,letterSpacing:'.08em',textTransform:'uppercase',color:'#075985'}}>
            On-platform actions ({pl.length})
          </span>
        </div>
        <div>
          {pl.map(a=><ActivityRow key={a.id} act={a}
            isOpen={openAct===a.id} onToggle={()=>setOpenAct(openAct===a.id?null:a.id)}/>)}
        </div>
      </>}
    </div>}
  </div>;
}

/* ── CASE STUDY CARD ── */
function CaseStudyCard({study}){
  const [open,setOpen] = useState(false);
  return <>
    <div className="card-r card-hv" style={{overflow:'hidden'}}>
      {/* Thumbnail */}
      <div style={{position:'relative',height:130,overflow:'hidden',background:T.g100}}>
        <img src={study.image} alt={study.title} style={{width:'100%',height:'100%',objectFit:'cover'}}
          onError={e=>{e.target.style.display='none'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(31,28,35,.7) 0%, transparent 60%)'}}/>
        <div style={{position:'absolute',bottom:10,left:12,right:12,display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
          <div>
            <div style={{fontSize:15,fontWeight:800,color:'white',lineHeight:1.3,marginBottom:3,fontFamily:F.sans}}>{study.title}</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,.8)'}}>{study.starter}</div>
          </div>
          <Badge color="green">Won ✓</Badge>
        </div>
      </div>
      <div style={{padding:'12px 14px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
          <div style={{display:'flex',gap:16}}>
            <div><div style={{fontSize:18,fontWeight:800,color:T.g1000,fontFamily:F.mono}}>{study.signatures}</div>
              <div style={{fontSize:11,color:T.g700}}>signatures</div></div>
            <div><div style={{fontSize:13,fontWeight:700,color:T.g1000,lineHeight:1.2}}>{study.outcome}</div>
              <div style={{fontSize:11,color:T.g700}}>{study.similarity}</div></div>
          </div>
          <button className="btn-g" onClick={()=>setOpen(true)}
            style={{display:'flex',alignItems:'center',gap:5,fontSize:12,fontWeight:700}}>
            See path to victory
            <Ic.ChevR s={12}/>
          </button>
        </div>
      </div>
    </div>

    {/* Modal */}
    {open&&<div className="fade-in" style={{position:'fixed',inset:0,zIndex:500,
      display:'flex',alignItems:'center',justifyContent:'center',
      background:'rgba(31,28,35,.5)',backdropFilter:'blur(4px)'}}
      onClick={()=>setOpen(false)}>
      <div style={{background:T.g0,borderRadius:16,width:'100%',maxWidth:520,
        maxHeight:'80vh',overflow:'hidden',display:'flex',flexDirection:'column',
        boxShadow:'0 24px 80px rgba(31,28,35,.25)',margin:'0 24px'}}
        onClick={e=>e.stopPropagation()}>
        {/* Modal header */}
        <div style={{padding:'20px 24px',borderBottom:`1px solid ${T.g200}`,
          display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
          <div>
            <div style={{fontSize:17,fontWeight:800,color:T.g1000,marginBottom:3}}>{study.title}</div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <span style={{fontSize:12,color:T.g700}}>{study.starter}</span>
              <span style={{color:T.g400}}>·</span>
              <span style={{fontSize:12,fontWeight:700,color:T.success}}>{study.outcome}</span>
            </div>
          </div>
          <button onClick={()=>setOpen(false)}
            style={{background:'none',border:'none',cursor:'pointer',color:T.g500,
              fontSize:18,padding:4,lineHeight:1,flexShrink:0}}>✕</button>
        </div>
        {/* Modal body */}
        <div style={{overflowY:'auto',padding:'20px 24px'}}>
          <Lbl>Path to victory</Lbl>
          {study.path.map((pt,i)=><div key={i} style={{display:'flex',gap:14,
            paddingBottom:i<study.path.length-1?18:0,position:'relative'}}>
            {i<study.path.length-1&&<div style={{position:'absolute',left:14,top:28,bottom:0,
              width:1,background:T.g200}}/>}
            <div style={{width:28,height:28,borderRadius:'50%',flexShrink:0,display:'flex',
              alignItems:'center',justifyContent:'center',position:'relative',zIndex:1,
              background:i===study.path.length-1?T.successBg:T.navyLight,
              border:`1.5px solid ${i===study.path.length-1?'#B8FEB9':T.navyBorder}`}}>
              <span style={{fontSize:9,fontWeight:800,fontFamily:F.mono,
                color:i===study.path.length-1?T.success:T.navy}}>
                D{pt.day}
              </span>
            </div>
            <div style={{flex:1,paddingTop:3}}>
              <div style={{fontSize:13,fontWeight:700,color:T.g1000,marginBottom:2}}>{pt.label}</div>
              <div style={{fontSize:12,color:T.g800,lineHeight:1.55}}>{pt.detail}</div>
            </div>
          </div>)}
        </div>
      </div>
    </div>}
  </>;
}

/* ════════════════════════════════════════════════
   SECTION 1: TODAY'S BRIEF
════════════════════════════════════════════════ */
function TodaysBriefSection({onNavigate,showTitle=true}){
  const [whyOpen,setWhyOpen]=useState(true);
  const [nudgeDismissed,setNudgeDismissed]=useState(false);
  return <div style={{display:'flex',flexDirection:'column',gap:20}}>
    {showTitle&&<SecHdr icon={<Ic.Brief/>} title="Today's Brief"
      subtitle="Your campaign intelligence, ready when you need it."/>}
    {/* Next Move — hero card */}
    <div className="card-r" style={{padding:24}}>
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12,marginBottom:12}}>
        <div>
          <Lbl color={T.brand500}>Your Next Move</Lbl>
          <h2 style={{margin:0,fontSize:22,fontWeight:900,color:T.g1000,lineHeight:1.25,fontFamily:F.sans}}>
            Contact Sen. Durbin's Illinois constituent office
          </h2>
        </div>
        <Badge color="red">High priority</Badge>
      </div>
      <p style={{margin:'0 0 6px',fontSize:14,color:T.g950,lineHeight:1.65}}>
        28% of your signatures are from Illinois. His office tracks constituent petition volumes, and this
        campaign has enough to trigger a formal acknowledgment. A letter citing your Illinois signers gets
        routed to judiciary staff — not the form-response pile.
      </p>
      {/* Contact info inline */}
      <div style={{display:'flex',alignItems:'center',gap:16,margin:'12px 0 18px',padding:'10px 14px',
        background:T.g50,borderRadius:8,border:`1px solid ${T.g200}`}}>
        <span style={{fontSize:12,color:T.g700,fontWeight:600,flexShrink:0}}>Chicago district office:</span>
        <span style={{width:1,height:14,background:T.g300,flexShrink:0}}/>
        <span style={{fontSize:12,color:T.g1000,flexShrink:0}}>📞 (312) 353-4952</span>
        <span style={{width:1,height:14,background:T.g300,flexShrink:0}}/>
        <span style={{fontSize:12,color:T.g1000,flexShrink:0}}>✉ durbin.senate.gov/contact</span>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:10,marginBottom:18}}>
        <button className="btn-p" style={{fontSize:14,padding:'10px 22px'}}>Draft constituent letter</button>
      </div>
      <button className="btn-g" onClick={()=>setWhyOpen(v=>!v)}
        style={{display:'flex',alignItems:'center',gap:6}}>
        <span>Why now?</span>
        <span style={{transition:'transform .2s',display:'inline-block',transform:whyOpen?'rotate(180deg)':'none'}}>
          <Ic.ChevD s={13}/></span>
      </button>
      {whyOpen&&<div className="fade-in" style={{marginTop:12}}>
        <AICallout>
          The SAFE Justice Act is scheduled for committee review this session. Durbin needs constituent volume
          he can point to. The window before recess is 6 weeks — getting a meeting request in this week means
          it lands before the floor vote crush.
        </AICallout>
        <ul style={{margin:'12px 0 0',padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
          {[
            {text:"Campaigns that make congressional contact at 5–8K signatures are 3× more likely to get a formal response than those that wait for 20K."},
            {text:"You already have Brennan Center reach in your network — a co-signed letter amplifies your legitimacy significantly."},
            {text:"Illinois has the 4th highest rate of nonviolent drug incarceration in the country. This is locally resonant.",link:"See your 1,350 Illinois signers →"},
          ].map((pt,i)=><li key={i} style={{display:'flex',gap:10,fontSize:13,color:T.g950,lineHeight:1.5}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:T.g1000,flexShrink:0,marginTop:5}}/>
            <span>{pt.text}{pt.link&&<>&nbsp;<a href="#" style={{color:T.g1000,fontWeight:600,
              textDecoration:'underline',textUnderlineOffset:2}}>{pt.link}</a></>}</span>
          </li>)}
        </ul>
      </div>}
    </div>
    {/* Nudge — amber dismissable */}
    {!nudgeDismissed&&<div className="fade-in" style={{
      background:'#FFFBEB',border:'1.5px solid #FCD34D',borderRadius:12,padding:'16px 18px'}}>
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12,marginBottom:8}}>
        <span style={{fontSize:9,fontWeight:900,letterSpacing:'.1em',textTransform:'uppercase',
          color:'#92400E',background:'#FDE68A',border:'1px solid #FCD34D',
          borderRadius:4,padding:'2px 7px'}}>Insight</span>
        <button onClick={()=>setNudgeDismissed(true)}
          style={{width:20,height:20,display:'flex',alignItems:'center',justifyContent:'center',
            background:'none',border:'none',cursor:'pointer',color:T.g500,fontSize:14,
            lineHeight:1,padding:0,fontFamily:'inherit',flexShrink:0}}>
          ✕
        </button>
      </div>
      <h3 style={{margin:'0 0 6px',fontSize:15,fontWeight:800,color:T.g1000,lineHeight:1.3,fontFamily:F.sans}}>
        A tighter ask could double your congressional response rate
      </h3>
      <p style={{margin:'0 0 14px',fontSize:13,color:T.g700,lineHeight:1.6}}>
        Your comments show signers are rallying around one thing: restoring judicial discretion.
        Campaigns with a single focused ask get 2× more congressional responses.
      </p>
      <button className="btn-s" style={{fontSize:13}}>Help me focus it</button>
    </div>}
  </div>;
}

/* ════════════════════════════════════════════════
   SECTION 2: MY ROADMAP
════════════════════════════════════════════════ */
function MyRoadmapSection({showTitle=true}){
  const [sel,setSel]=useState(2);
  const [openTask,setOpenTask]=useState('sig-milestone');
  const phase=PHASES.find(p=>p.id===sel);
  const baseActs=PHASE_ACTIVITIES[sel]||[];

  const PHASE_INSIGHTS={
    1:"Phase 1 complete. You launched strong — 4,847 signatures in 34 days. The personal story worked exactly as intended.",
    2:"You're in Phase 2: Build. The signature number matters, but it's not the whole game. Campaigns that move policy in Phase 3 are the ones that built real organizational relationships in Phase 2. That's your job for the next 30 days.",
    3:"Phase 3 is about converting coalition into pressure. Your goal: get in the room. Congressional meetings, coordinated delivery, earned media.",
    4:"Phase 4 is the decision window. Timing is everything. When the SAFE Justice Act hits the floor, you need to be ready to flood constituent channels instantly.",
  };

  const milestone={id:'sig-milestone',title:'Reach 10,000 signatures',type:'milestone',
    status:'in_progress',impact:'medium',
    progress:{current:4847,goal:10000},
    why:'Crossing 10K is the threshold that triggers formal congressional acknowledgment for most policy campaigns. You\'re at 48% — the coalition outreach in your next moves is how you close the gap.',
    how:'Keep your momentum through ambassador activation and the Illinois-targeted outreach. Each coalition org you bring on drives an average of 800–2,000 new signatures.'};

  const tasks=sel===2?[milestone,...baseActs]:baseActs;

  const impactLabel=v=>v==='high'?'Heavy lift':v==='medium'?'Medium lift':v==='low'?'Light lift':'';
  const impactColor=v=>v==='high'?T.brand500:v==='medium'?'#D97706':T.success;

  return <div style={{display:'flex',flexDirection:'column',gap:16}}>
    {showTitle&&<SecHdr icon={<Ic.Map/>} title="My Roadmap"
      subtitle="Your path to policy change — phases, actions, and what it actually takes to get there."/>}

    {/* Phase selector */}
    <div className="card-r" style={{padding:20}}>
      <Lbl>Campaign Arc — Phase {CAMPAIGN.phase} of {CAMPAIGN.totalPhases}</Lbl>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:16}}>
        {PHASES.map(p=>{
          const isSelected=p.id===sel;
          const opacity=(!p.complete&&!p.current)?0.5:1;
          const dot=p.complete?T.success:p.current?T.accent400:T.g400;
          const statusTag=p.complete?'DONE':p.current?'NOW':`PHASE ${p.id}`;
          const firstId=p.id===2?'sig-milestone':(PHASE_ACTIVITIES[p.id]?.[0]?.id??null);
          return <button key={p.id} onClick={()=>{setSel(p.id);setOpenTask(firstId);}}
            style={{padding:'12px 14px',borderRadius:10,textAlign:'left',cursor:'pointer',
              fontFamily:'inherit',transition:'all .15s',opacity,
              background:isSelected?T.accent50:T.g50,
              border:`1.5px solid ${isSelected?T.accent300:T.g200}`}}>
            <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:5}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:dot,flexShrink:0,
                ...(p.current?{boxShadow:`0 0 0 3px ${T.accent100}`}:{})}}/>
              <span style={{fontSize:9,fontWeight:800,letterSpacing:'.1em',
                color:p.complete?T.success:p.current?T.accent600:T.g500}}>
                PHASE {p.id} · {statusTag}
              </span>
            </div>
            <div style={{fontSize:15,fontWeight:800,
              color:p.current?T.g1000:p.complete?T.g800:T.g600,fontFamily:F.sans}}>{p.name}</div>
          </button>;
        })}
      </div>
      <AICallout>{PHASE_INSIGHTS[sel]}</AICallout>
    </div>

    {/* Task list */}
    <div className="card-r" style={{padding:20}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18}}>
        <Lbl>{sel===CAMPAIGN.phase?'Your Next 30 Days':`Phase ${sel}: ${phase?.name} Actions`}</Lbl>
        {sel===CAMPAIGN.phase&&<span style={{fontSize:12,color:T.g600,fontWeight:600}}>Day {CAMPAIGN.age}</span>}
      </div>
      <div>
        {tasks.map((act,i)=>{
          const isOpen=openTask===act.id;
          const isDone=act.status==='done';
          const isIP=act.status==='in_progress'||(act.id==='sig-milestone');
          const isUp=act.status==='upcoming';
          const textColor=isDone?T.g700:isIP?T.g1000:isUp?T.g500:T.g700;
          const fw=isIP?800:isDone?500:450;
          const sLabel=isDone?'Done':isIP?'In progress':'Not started';
          const sBg=isDone?T.successBg:isIP?T.accent50:T.g100;
          const sBorder=isDone?'#B8FEB9':isIP?T.accent200:T.g300;
          const sColor=isDone?T.success:isIP?T.accent600:T.g600;
          return <div key={act.id} style={{position:'relative'}}>
            {i<tasks.length-1&&<div style={{position:'absolute',left:11,top:26,bottom:0,
              width:1,background:T.g200,zIndex:0}}/>}
            <div onClick={()=>setOpenTask(isOpen?null:act.id)}
              className="row-h" style={{display:'flex',alignItems:'flex-start',gap:12,
                paddingBottom:16,cursor:'pointer',position:'relative',zIndex:1,
                borderRadius:8,padding:'8px 6px 16px',marginLeft:-6,marginRight:-6}}>
              {/* Dot */}
              <div style={{flexShrink:0,width:24,height:24,borderRadius:'50%',marginTop:1,
                display:'flex',alignItems:'center',justifyContent:'center',
                background:isDone?T.successBg:isIP?T.accent50:T.g100,
                border:`2px solid ${isDone?'#B8FEB9':isIP?T.accent300:T.g300}`,
                ...(isIP?{boxShadow:`0 0 0 4px ${T.accent100}`}:{})}}>
                {isDone?<Ic.Check s={10}/>:<div style={{width:8,height:8,borderRadius:'50%',
                  background:isDone?T.success:isIP?T.accent400:T.g400}}/>}
              </div>
              {/* Content */}
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:'flex',alignItems:'flex-start',gap:8}}>
                  <span style={{flex:1,fontSize:14,fontWeight:fw,color:textColor,lineHeight:1.4}}>
                    {act.title}
                  </span>
                  <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0,paddingTop:1}}>
                    <span style={{fontSize:12,fontWeight:700,color:impactColor(act.impact)}}>
                      {impactLabel(act.impact)}
                    </span>
                    <span style={{fontSize:11,fontWeight:600,color:sColor,background:sBg,
                      border:`1px solid ${sBorder}`,borderRadius:99,padding:'2px 10px',whiteSpace:'nowrap'}}>
                      {sLabel}
                    </span>
                  </div>
                </div>
                {act.progress&&<div style={{marginTop:8}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:T.g700,marginBottom:4}}>
                    <span style={{fontFamily:F.mono}}>{act.progress.current.toLocaleString()} / {act.progress.goal.toLocaleString()}</span>
                    <span style={{fontWeight:700,fontFamily:F.mono}}>{Math.round(act.progress.current/act.progress.goal*100)}%</span>
                  </div>
                  <div style={{height:6,background:T.g200,borderRadius:99,overflow:'hidden'}}>
                    <div style={{height:'100%',borderRadius:99,background:T.accent400,
                      width:`${Math.round(act.progress.current/act.progress.goal*100)}%`}}/>
                  </div>
                </div>}
                {isOpen&&<div className="fade-in" style={{marginTop:12,paddingTop:12,
                  borderTop:`1px solid ${T.g200}`}}>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:12}}>
                    <div>
                      <div style={{fontSize:10,fontWeight:800,color:T.g1000,
                        letterSpacing:'.08em',textTransform:'uppercase',marginBottom:5,fontFamily:F.sans}}>
                        Why it matters
                      </div>
                      <p style={{margin:0,fontSize:13,color:T.g800,lineHeight:1.6}}>{act.why}</p>
                    </div>
                    <div>
                      <div style={{fontSize:10,fontWeight:800,color:T.g1000,
                        letterSpacing:'.08em',textTransform:'uppercase',marginBottom:5,fontFamily:F.sans}}>
                        How to do it
                      </div>
                      <p style={{margin:0,fontSize:13,color:T.g800,lineHeight:1.6}}>{act.how}</p>
                    </div>
                  </div>
                  {!isDone&&<button className="btn-p" style={{fontSize:12,padding:'7px 16px'}}>
                    Get started →
                  </button>}
                </div>}
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>

    {/* Benchmarking */}
    <div className="card-r" style={{padding:20}}>
      <Lbl>How you compare</Lbl>
      <AICallout>
        Federal sentencing reform campaigns with strong earned media typically cross 10K in 50–60 days.
        You're running ahead — the Brennan Center amplification on Day 27 was the difference.
      </AICallout>
      <div style={{marginTop:22,display:'flex',flexDirection:'column',gap:10}}>
        {[{label:'Your campaign — Day 34',value:'4,847 sigs',pct:48,color:T.accent400,tc:T.accent600},
          {label:'Comparable campaigns — Day 34',value:'~3,800 sigs',pct:38,color:T.g400,tc:T.g700}
        ].map((bar,i)=><div key={i} style={{marginBottom:6}}>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:12,marginBottom:6}}>
            <span style={{color:T.g700}}>{bar.label}</span>
            <span style={{fontWeight:700,color:bar.tc}}>{bar.value}</span>
          </div>
          <div style={{height:8,background:T.g100,borderRadius:99,overflow:'hidden'}}>
            <div style={{height:'100%',width:`${bar.pct}%`,background:bar.color,borderRadius:99}}/>
          </div>
        </div>)}
        <p style={{margin:'6px 0 0',fontSize:12,color:T.success,fontWeight:700}}>
          ↑ 27% ahead of median — keep building the coalition infrastructure while you have runway.
        </p>
      </div>
    </div>

    {/* Case Studies */}
    <div style={{marginTop:32}}>
      <div style={{display:'flex',alignItems:'baseline',gap:8,marginBottom:12}}>
        <Lbl>How it's been won before</Lbl>
        <span style={{fontSize:12,color:T.g700,fontStyle:'italic',display:'block'}}>
          Three campaigns on the same issue that went the distance — click any to see their path to victory
        </span>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
        {CASE_STUDIES.map(cs=><CaseStudyCard key={cs.id} study={cs}/>)}
      </div>
    </div>
  </div>;
}

/* ════════════════════════════════════════════════
   SECTION 3: MY NETWORK
════════════════════════════════════════════════ */
function MyNetworkSection({showTitle=true}){
  return <div style={{display:'flex',flexDirection:'column',gap:20}}>
    {showTitle&&<SecHdr icon={<Ic.Users/>} title="My Network"
      subtitle="Your supporters, your movement, and the community rallying around this issue."/>}

    {/* Stats bar */}
    <div className="card-r" style={{padding:'20px 24px'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:0}}>
        {[
          {label:'Signatures',value:'4,847',delta:'+142 today',deltaColor:T.success},
          {label:'Shares',value:'1,203',delta:'+38 today',deltaColor:T.success},
          {label:'Views',value:'28,491',delta:'+1,204 today',deltaColor:T.success},
        ].map((s,i,arr)=>(
          <div key={i} style={{textAlign:'center',
            borderRight:i<arr.length-1?`1px solid ${T.g200}`:'none',
            padding:'0 24px'}}>
            <div style={{fontSize:32,fontWeight:900,color:T.g1000,lineHeight:1,fontFamily:F.mono,marginBottom:4}}>
              {s.value}
            </div>
            <div style={{fontSize:12,color:T.g700,fontWeight:600,marginBottom:4}}>{s.label}</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:4}}>
              <div style={{width:5,height:5,borderRadius:'50%',background:s.deltaColor}}/>
              <span style={{fontSize:11,color:s.deltaColor,fontWeight:700,fontFamily:F.mono}}>{s.delta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Notable Signers — visual */}
    <div className="card-r" style={{padding:20}}>
      <Lbl>Notable Signers</Lbl>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:20}}>
        {NOTABLE_SIGNERS.map((s,i)=><div key={i} style={{background:T.g50,borderRadius:10,
          padding:'14px 12px',border:`1px solid ${T.g200}`,textAlign:'center'}}>
          <img src={s.photo} alt={s.role}
            style={{width:64,height:64,borderRadius:'50%',objectFit:'cover',margin:'0 auto 10px',
              border:`3px solid ${T.g0}`,boxShadow:`0 0 0 2px ${T.g300}`}}
            onError={e=>{e.target.style.background=T.g200;e.target.style.display='block'}}/>
          <div style={{fontSize:13,fontWeight:700,color:T.g1000,marginBottom:2}}>{s.role}</div>
          <div style={{fontSize:11,color:T.g700,marginBottom:8}}>{s.location}</div>
          <p style={{margin:'0 0 10px',fontSize:11,color:T.g800,lineHeight:1.5,fontStyle:'italic'}}>
            {s.note}
          </p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:6,flexWrap:'wrap'}}>
            {i===0
              ? <Badge color="purple">Legal Professional</Badge>
              : s.followers
                ? <Badge color="blue">{s.followers} followers</Badge>
                : null}
            <button style={{background:T.g0,color:T.g1000,border:`1.5px solid ${T.g300}`,
              borderRadius:99,fontSize:12,fontWeight:600,padding:'5px 16px',cursor:'pointer',
              fontFamily:'inherit',transition:'border-color .15s'}}
              onMouseEnter={e=>e.currentTarget.style.borderColor=T.g700}
              onMouseLeave={e=>e.currentTarget.style.borderColor=T.g300}>
              Contact
            </button>
          </div>
        </div>)}
      </div>

      {/* Super Supporter */}
      <Lbl>Super Supporter</Lbl>
      <div style={{display:'flex',gap:14,padding:'14px',background:T.accent50,
        borderRadius:10,border:`1px solid ${T.accent100}`}}>
        <img src={SUPER_SUPPORTER.photo} alt={SUPER_SUPPORTER.name}
          style={{width:64,height:64,borderRadius:'50%',objectFit:'cover',flexShrink:0,
            border:`3px solid ${T.g0}`,boxShadow:`0 0 0 2px ${T.accent200}`}}
          onError={e=>{e.target.style.background=T.accent200}}/>
        <div style={{flex:1}}>
          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8,marginBottom:11}}>
            <div style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
              <span style={{fontSize:14,fontWeight:800,color:T.g1000}}>{SUPER_SUPPORTER.name}</span>
              <span style={{fontSize:12,color:T.g700}}>{SUPER_SUPPORTER.location}</span>
              <Badge color="blue">Top supporter</Badge>
            </div>
            <button style={{background:T.g0,color:T.g1000,border:`1.5px solid ${T.g300}`,
              borderRadius:99,fontSize:12,fontWeight:600,padding:'5px 16px',cursor:'pointer',
              fontFamily:'inherit',transition:'border-color .15s',flexShrink:0}}
              onMouseEnter={e=>e.currentTarget.style.borderColor=T.g700}
              onMouseLeave={e=>e.currentTarget.style.borderColor=T.g300}>
              Contact
            </button>
          </div>
          <div style={{fontSize:11,color:T.accent600,marginBottom:8}}>{SUPER_SUPPORTER.actions}</div>
          <blockquote style={{margin:0,fontSize:13,color:T.accent700,fontStyle:'italic',lineHeight:1.6,
            borderLeft:`3px solid ${T.accent300}`,paddingLeft:12}}>
            "{SUPER_SUPPORTER.quote}"
          </blockquote>
        </div>
      </div>
    </div>

    {/* Community Activity — Comments & Signatures */}
    <div className="card-r" style={{padding:20}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <Lbl>Community Activity</Lbl>
        <div style={{display:'flex',gap:8}}>
          <Badge color="blue">4,847 signatures</Badge>
          <Badge color="green">+142 today</Badge>
        </div>
      </div>
      <p style={{margin:'0 0 14px',fontSize:13,color:T.g700,fontStyle:'italic'}}>
        People aren't just signing — they're speaking. Here's your community's voice.
      </p>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {COMMENTS.map(c=><div key={c.id} style={{display:'flex',gap:12,padding:'12px',
          background:T.g50,borderRadius:8,border:`1px solid ${T.g200}`}}>
          <img src={c.photo} alt={c.name}
            style={{width:40,height:40,borderRadius:'50%',objectFit:'cover',flexShrink:0,
              border:`2px solid ${T.g0}`}}
            onError={e=>{e.target.style.background=T.g200}}/>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:'flex',alignItems:'baseline',gap:8,flexWrap:'wrap',marginBottom:4}}>
              <span style={{fontSize:13,fontWeight:700,color:T.g1000}}>{c.name}</span>
              <span style={{fontSize:11,color:T.g700}}>{c.location}</span>
              <span style={{fontSize:11,color:T.g500,marginLeft:'auto'}}>{c.date}</span>
            </div>
            <p style={{margin:'0 0 6px',fontSize:13,color:T.g950,lineHeight:1.55}}>"{c.text}"</p>
            <div style={{display:'flex',alignItems:'center',gap:5,fontSize:11,color:T.g700}}>
              <Ic.ThumbUp/><span>{c.helpful} found this helpful</span>
            </div>
          </div>
        </div>)}
      </div>
      <button className="btn-s" style={{marginTop:14,width:'100%',textAlign:'center'}}>
        View all 4,847 signatures and comments
      </button>
    </div>

    {/* Related Petitions */}
    <div className="card-r" style={{padding:20}}>
      <Lbl>The Broader Fight</Lbl>
      <p style={{margin:'0 0 14px',fontSize:13,color:T.g800,fontStyle:'italic'}}>
        Others are fighting the same fight. You're not the first — and you won't be the last.
      </p>
      {RELATED_PETITIONS.map((p,i)=><div key={i} className="card-hv" style={{display:'flex',
        alignItems:'center',gap:12,padding:'12px 14px',
        background:T.g50,borderRadius:8,marginBottom:8,border:`1px solid ${T.g200}`,cursor:'pointer'}}>
        <img src={p.image} alt={p.title}
          style={{width:48,height:48,borderRadius:8,objectFit:'cover',flexShrink:0,border:`1px solid ${T.g200}`}}
          onError={e=>{e.target.style.background=T.g200;e.target.style.display='block'}}/>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:13,fontWeight:600,color:T.g1000,marginBottom:5,lineHeight:1.4}}>{p.title}</div>
          <div style={{display:'flex',gap:10,alignItems:'center'}}>
            <span style={{fontSize:12,color:T.g700}}>{p.signatures.toLocaleString()} signatures</span>
            <Badge color={p.status==='Won'?'green':'blue'}>{p.status}{p.status==='Won'?' ✓':''}</Badge>
          </div>
        </div>
        <button className="btn-g" style={{flexShrink:0,fontSize:12}}>Connect →</button>
      </div>)}
    </div>

    {/* Organizations */}
    <div className="card-r" style={{padding:20}}>
      <Lbl>Organizations Working This Issue</Lbl>
      {ORGANIZATIONS.map((org,i)=><div key={i} className="card-hv" style={{display:'flex',
        alignItems:'center',gap:12,padding:'12px 14px',
        background:T.g50,borderRadius:8,marginBottom:8,border:`1px solid ${T.g200}`}}>
        <OrgLogo org={org}/>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:13,fontWeight:700,color:T.g1000,marginBottom:3}}>{org.name}</div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <span style={{fontSize:12,color:T.g700}}>{org.type}</span>
            <span style={{color:T.g400,fontSize:12}}>·</span>
            <span style={{fontSize:12,color:T.success,fontWeight:600}}>{org.match}% alignment</span>
          </div>
        </div>
        <button className="btn-g" style={{fontSize:12,flexShrink:0,whiteSpace:'nowrap'}}>
          Contact organization →
        </button>
      </div>)}
    </div>
  </div>;
}

/* ════════════════════════════════════════════════
   SECTION 4: DECISION MAKER INTEL
════════════════════════════════════════════════ */
/* ── DM sub-components ── */
function AlignmentRing({score}){
  const color=score>=80?T.success:score>=50?'#D97706':T.brand500;
  const r=54,cx=64,cy=64,stroke=9;
  const circ=2*Math.PI*r;
  const filled=(score/100)*circ;
  return <div style={{position:'relative',width:128,height:128,flexShrink:0}}>
    <svg width={128} height={128} style={{transform:'rotate(-90deg)'}}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={T.g100} strokeWidth={stroke}/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${filled} ${circ}`}
        style={{transition:'stroke-dasharray .6s ease'}}/>
    </svg>
    <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',
      alignItems:'center',justifyContent:'center'}}>
      <div style={{fontSize:26,fontWeight:900,color:T.g1000,lineHeight:1,fontFamily:F.mono}}>{score}%</div>
      <div style={{fontSize:10,fontWeight:700,letterSpacing:'.07em',color:T.g600,textTransform:'uppercase',marginTop:3}}>
        Alignment
      </div>
    </div>
  </div>;
}

function SupportGauge({level}){
  const cfg={
    low:{color:'blue',label:'Low support likelihood'},
    medium:{color:'amber',label:'Medium support likelihood'},
    high:{color:'green',label:'High support likelihood'},
  };
  const c=cfg[level]||cfg.medium;
  return <Badge color={c.color}>{c.label}</Badge>;
}

function VotingRecord({votes}){
  const vcfg={
    yes:{icon:'✓',bg:T.successBg,border:'#B8FEB9',textColor:T.success,badge:'green',label:'Voted YES'},
    no:{icon:'✗',bg:T.brand50,border:T.brand100,textColor:T.brand500,badge:'red',label:'Voted NO'},
    abstain:{icon:'–',bg:'#FFFAED',border:'#FFE3A8',textColor:'#9D470F',badge:'amber',label:'Abstained'},
  };
  return <div>
    <Lbl>Voting record — related legislation</Lbl>
    <div style={{display:'flex',flexDirection:'column',gap:0}}>
      {[...votes].reverse().map((v,i)=>{
        const c=vcfg[v.vote]||vcfg.abstain;
        return <div key={i} style={{display:'flex',alignItems:'center',gap:12,
          padding:'10px 0',borderBottom:i<votes.length-1?`1px solid ${T.g100}`:'none'}}>
          <div style={{width:42,height:42,borderRadius:8,flexShrink:0,display:'flex',
            flexDirection:'column',alignItems:'center',justifyContent:'center',
            background:c.bg,border:`1.5px solid ${c.border}`}}>
            <span style={{fontSize:14,color:c.textColor}}>{c.icon}</span>
            <span style={{fontSize:9,fontWeight:800,color:c.textColor}}>{v.year}</span>
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:13,fontWeight:700,color:T.g1000}}>{v.bill}</div>
            {v.note&&<div style={{fontSize:11.5,color:T.g700,marginTop:1}}>{v.note}</div>}
          </div>
          <Badge color={c.badge}>{c.label}</Badge>
        </div>;
      })}
    </div>
  </div>;
}

function IssueAlignmentBars({items}){
  return <div>
    <Lbl>Issue alignment breakdown</Lbl>
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      {items.map((item,i)=>{
        const color=item.score>=80?T.success:item.score>=55?'#D97706':T.brand500;
        const textInside=item.score>=30;
        return <div key={i}>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:12,marginBottom:4}}>
            <span style={{color:T.g1000}}>{item.label}</span>
            <span style={{fontWeight:700,color:T.g1000,fontFamily:F.mono}}>{item.score}%</span>
          </div>
          <div style={{height:6,background:T.g100,borderRadius:99,overflow:'hidden'}}>
            <div style={{height:'100%',width:`${item.score}%`,background:color,borderRadius:99,
              transition:'width .5s ease'}}/>
          </div>
        </div>;
      })}
    </div>
  </div>;
}

function SecondaryDMRow({sdm}){
  const [open,setOpen]=useState(true);
  const slColor=sdm.supportLikelihood==='high'?T.success:sdm.supportLikelihood==='medium'?'#D97706':T.brand500;
  const slBg=sdm.supportLikelihood==='high'?T.successBg:sdm.supportLikelihood==='medium'?'#FFFAED':T.brand50;
  const barColor=sdm.alignmentScore>=80?T.success:sdm.alignmentScore>=50?'#D97706':T.brand500;
  return <div className="card-hv" style={{borderRadius:10,marginBottom:8,
    border:`1px solid ${T.g200}`,overflow:'hidden',background:T.g50}}>
    <div onClick={()=>setOpen(v=>!v)} style={{display:'flex',alignItems:'center',gap:12,
      padding:'12px 14px',cursor:'pointer'}}>
      <img src={sdm.photo} alt={sdm.name}
        style={{width:44,height:44,borderRadius:8,objectFit:'cover',flexShrink:0,
          border:`1px solid ${T.g200}`}}
        onError={e=>{e.target.style.background=T.g200}}/>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',marginBottom:3}}>
          <span style={{fontSize:13,fontWeight:700,color:T.g1000}}>{sdm.name}</span>
          {sdm.region&&<Badge color="gray">{sdm.region}</Badge>}
        </div>
        <div style={{fontSize:11.5,color:T.g700,marginBottom:6}}>{sdm.title}</div>
        {/* Inline alignment bar */}
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{flex:1,height:5,background:T.g200,borderRadius:99,overflow:'hidden',maxWidth:140}}>
            <div style={{height:'100%',width:`${sdm.alignmentScore}%`,background:barColor,borderRadius:99}}/>
          </div>
          <span style={{fontSize:11,fontWeight:700,color:barColor,fontFamily:F.mono}}>{sdm.alignmentScore}% aligned</span>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
        <span style={{fontSize:11,fontWeight:700,color:slColor,background:slBg,
          border:`1px solid ${slColor}22`,borderRadius:99,padding:'2px 10px',
          textTransform:'capitalize'}}>{sdm.supportLikelihood} support</span>
        <button className="btn-s" style={{fontSize:11,padding:'4px 12px'}}
          onClick={e=>{e.stopPropagation();}}>{sdm.cta}</button>
      </div>
      <div style={{color:T.g400,transition:'transform .2s',transform:open?'rotate(180deg)':'none',marginLeft:4}}>
        <Ic.ChevD s={13}/>
      </div>
    </div>
    {open&&<div className="fade-in" style={{padding:'0 14px 14px',borderTop:`1px solid ${T.g200}`}}>
      <p style={{margin:'12px 0 0',fontSize:13,color:T.g800,lineHeight:1.6}}>{sdm.note}</p>
    </div>}
  </div>;
}

function DecisionMakerSection({showTitle=true}){
  const dm=DECISION_MAKER.primary;
  return <div style={{display:'flex',flexDirection:'column',gap:20}}>
    {showTitle&&<SecHdr icon={<Ic.Target/>} title="Decision Maker Intel"
      subtitle="Who has the power to change this — and what it takes to move them."/>}

    {/* Primary DM */}
    <div className="card-r" style={{padding:20}}>
      {/* Header */}
      <div style={{display:'flex',gap:16,alignItems:'flex-start',marginBottom:16}}>
        <img src={dm.photo} alt={dm.name}
          style={{width:72,height:72,borderRadius:12,objectFit:'cover',flexShrink:0,
            border:`2px solid ${T.g200}`}}
          onError={e=>{e.target.style.background=T.g200}}/>
        <div style={{flex:1}}>
          <h3 style={{margin:0,fontSize:20,fontWeight:800,color:T.g1000,fontFamily:F.sans}}>{dm.name}</h3>
          <p style={{margin:'3px 0 10px',fontSize:13,color:T.g800}}>{dm.title}</p>
          <SupportGauge level={dm.supportLikelihood}/>
        </div>
      </div>

      {/* Bio */}
      <p style={{margin:'0 0 20px',fontSize:13.5,color:T.g800,lineHeight:1.7,
        borderLeft:`3px solid ${T.g200}`,paddingLeft:14}}>{dm.bio}</p>

      {/* Alignment ring + issue bars side by side */}
      <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:24,
        padding:16,background:T.g50,borderRadius:10,border:`1px solid ${T.g200}`,marginBottom:20}}>
        <AlignmentRing score={dm.alignmentScore}/>
        <IssueAlignmentBars items={dm.issueAlignment}/>
      </div>

      {/* Voting record */}
      <div style={{marginTop:40,marginBottom:40}}>
        <VotingRecord votes={dm.votingRecord}/>
      </div>

      {/* Pressure points */}
      <div style={{marginBottom:40}}>
        <Lbl>Key pressure points for your campaign</Lbl>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {dm.pressurePoints.map((pt,i)=><div key={i} style={{display:'flex',gap:10,padding:'10px 12px',
            background:T.g50,borderRadius:8,border:`1px solid ${T.g200}`}}>
            <div style={{width:6,height:6,borderRadius:'50%',background:T.g1000,flexShrink:0,marginTop:5}}/>
            <span style={{fontSize:13,color:T.g950,lineHeight:1.5}}>{pt}</span>
          </div>)}
        </div>
      </div>

      {/* What it takes */}
      <div style={{marginBottom:24}}>
        <Lbl>What it takes to get their attention</Lbl>
        <AICallout>{dm.whatItTakes}</AICallout>
      </div>
      <button className="btn-p">Draft a letter to Sen. Durbin</button>
    </div>

    {/* Secondary DMs */}
    <div className="card-r" style={{padding:20}}>
      <Lbl>Additional Decision Makers</Lbl>
      {DECISION_MAKER.secondary.map((sdm,i)=><SecondaryDMRow key={i} sdm={sdm}/>)}
    </div>
  </div>;
}

/* ════════════════════════════════════════════════
   SECTION 5: STORY SO FAR
════════════════════════════════════════════════ */
function StorySoFarSection({showTitle=true}){
  return <div style={{display:'flex',flexDirection:'column',gap:20}}>
    {showTitle&&<SecHdr icon={<Ic.Book/>} title="Story So Far"
      subtitle="The living narrative of your campaign — from that courtroom to now."/>}
    <div className="card-r" style={{padding:20}}>
      <Lbl>Your Campaign Story</Lbl>
      <div style={{fontSize:13.5,color:T.g950,lineHeight:1.7,display:'flex',flexDirection:'column',gap:12,marginBottom:20}}>
        <p style={{margin:0}}>You launched 34 days ago after sitting through a sentencing hearing for a neighbor's son — a first-time, nonviolent drug offense that carried a mandatory minimum of 5 years. In the first week, you reached 1,200 signatures, mostly from people in your community who knew the family.</p>
        <p style={{margin:0}}>By day 15, a local public radio station featured the petition. On day 27, the Brennan Center retweeted your campaign to 180,000 followers.</p>
        <p style={{margin:0}}>You're now at <strong style={{color:T.g1000}}>4,847 signatures</strong> across <strong style={{color:T.g1000}}>38 states</strong>. You've crossed two of your five early milestones. The next 30 days are your window to convert this momentum into a real legislative conversation.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:`1px solid ${T.g200}`,paddingTop:16}}>
        {[{value:'4,847',label:'Signatures'},{value:'34',label:'Days active'},{value:'38',label:'States'},{value:'2/5',label:'Milestones'}].map((s,i,arr)=><div key={i} style={{textAlign:'center',borderRight:i<arr.length-1?`1px solid ${T.g200}`:'none',padding:'0 8px'}}>
          <div style={{fontSize:24,fontWeight:800,color:T.g1000,fontFamily:F.mono}}>{s.value}</div>
          <div style={{fontSize:11,color:T.g700,marginTop:2}}>{s.label}</div>
        </div>)}
      </div>
    </div>
    <div className="card-r" style={{padding:20}}>
      <Lbl>Turning Points</Lbl>
      {TURNING_POINTS.map((pt,i)=><div key={i} style={{display:'flex',gap:14,
        paddingBottom:i<TURNING_POINTS.length-1?20:0,position:'relative'}}>
        {i<TURNING_POINTS.length-1&&<div style={{position:'absolute',left:11,top:24,bottom:0,width:1,background:T.g200}}/>}
        <div style={{flexShrink:0,width:24,height:24,borderRadius:'50%',display:'flex',
          alignItems:'center',justifyContent:'center',position:'relative',zIndex:1,
          background:pt.today?T.brand400:T.g0,
          border:`2px solid ${pt.today?T.brand400:T.g300}`,
          ...(pt.today?{boxShadow:`0 0 0 4px ${T.brand100}`}:{})}}>
          {pt.today?<div style={{width:8,height:8,borderRadius:'50%',background:'white'}}/>
            :<div style={{width:6,height:6,borderRadius:'50%',background:T.g400}}/>}
        </div>
        <div style={{flex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:2}}>
            <span style={{fontSize:10,fontWeight:800,letterSpacing:'.08em',textTransform:'uppercase',
              color:pt.today?T.brand400:T.g600,fontFamily:F.mono}}>Day {pt.day}</span>
            {pt.today&&<Badge color="red">Today</Badge>}
          </div>
          <div style={{fontSize:14,fontWeight:700,color:T.g1000,marginBottom:2}}>{pt.label}</div>
          <div style={{fontSize:12.5,color:T.g800,lineHeight:1.5}}>{pt.detail}</div>
        </div>
      </div>)}
    </div>
  </div>;
}

/* ── BANNER ── */
function AIBanner(){
  return <div style={{background:T.accent50,borderBottom:`1px solid ${T.accent100}`,padding:'10px 24px'}}>
    <div style={{maxWidth:1100,margin:'0 auto',display:'flex',gap:12,alignItems:'flex-start'}}>
      <div style={{width:22,height:22,borderRadius:5,background:T.accent100,
        border:`1px solid ${T.accent200}`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
        <span style={{fontSize:9,fontWeight:900,color:T.accent600,letterSpacing:'.05em'}}>AI</span>
      </div>
      <p style={{margin:0,fontSize:13,color:T.accent700,fontStyle:'italic',lineHeight:1.6}}>
        "You're in Phase 2 of 4. Your next 30 days are critical for building the coalition that moved
        the SAFE Justice Act forward in 2022. Here's where things stand."
      </p>
    </div>
  </div>;
}

/* ── TOP NAV ── */
function TopNav(){
  const currentPhase=PHASES.find(p=>p.current);
  return <div style={{background:T.g0,borderBottom:`1px solid ${T.g200}`,
    position:'sticky',top:0,zIndex:40,boxShadow:'0 1px 4px rgba(49,45,55,.05)'}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',gap:14,height:64}}>
      {/* Petition image + name */}
      <div style={{display:'flex',alignItems:'center',gap:10,flex:1,minWidth:0}}>
        <img src={CAMPAIGN.image} alt="petition"
          style={{width:52,height:36,borderRadius:6,objectFit:'cover',flexShrink:0,
            border:`1px solid ${T.g200}`}}
          onError={e=>{e.target.style.background=T.g200}}/>
        <div style={{fontSize:15,fontWeight:800,color:T.g1000,
          overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',fontFamily:F.sans}}>
          {CAMPAIGN.name}
        </div>
      </div>
      {/* Right — signatures + phase */}
      <div style={{display:'flex',alignItems:'stretch',gap:10,flexShrink:0}}>
        {/* +142 today — outside the box */}
        <div style={{display:'flex',alignItems:'center',gap:4}}>
          <div style={{width:6,height:6,borderRadius:'50%',background:T.success}}/>
          <span style={{fontSize:11,color:T.success,fontWeight:700,fontFamily:F.mono}}>+142 today</span>
        </div>
        {/* Signatures stat */}
        <div style={{display:'flex',alignItems:'center',gap:5,
          background:T.g50,border:`1px solid ${T.g200}`,borderRadius:10,padding:'6px 14px'}}>
          <span style={{fontSize:24,fontWeight:900,color:T.g1000,lineHeight:1,fontFamily:F.mono}}>{CAMPAIGN.signatures.toLocaleString()}</span>
          <span style={{fontSize:11,color:T.g600}}>signatures</span>
        </div>
        {/* Phase stat */}
        {currentPhase&&<div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',
          background:T.g50,border:`1px solid ${T.g200}`,borderRadius:10,padding:'6px 14px'}}>
          <div style={{fontSize:11,fontWeight:700,color:T.g600,textTransform:'uppercase',letterSpacing:'.06em',fontFamily:F.mono}}>
            Phase {CAMPAIGN.phase}/{CAMPAIGN.totalPhases}
          </div>
          <div style={{fontSize:13,fontWeight:800,color:T.g1000,lineHeight:1.2,fontFamily:F.sans}}>{currentPhase.name}</div>
        </div>}
      </div>
    </div>
  </div>;
}

/* ── CAMPAIGN ASSISTANT ── */
const ASSISTANT_CONTEXT = [
  {
    page:"Today's Brief",
    greeting:"What do you want to tackle today?",
    prompts:[
      "Draft a constituent letter to Sen. Durbin",
      "What should I focus on this week?",
      "How do I get the Brennan Center to amplify my campaign?",
      "Write a social post about my latest milestone",
    ],
  },
  {
    page:"My Roadmap",
    greeting:"Let's move your campaign forward.",
    prompts:[
      "What's the single most impactful next step?",
      "How have similar campaigns built their coalition in Phase 2?",
      "What does a successful Phase 3 look like for this issue?",
      "Help me plan my next 30 days",
    ],
  },
  {
    page:"My Network",
    greeting:"Let's grow your coalition.",
    prompts:[
      "How do I reach out to ACLU Illinois?",
      "Who else should I be building relationships with?",
      "Write a message to activate my top supporters as ambassadors",
      "How do I approach the Brennan Center for a co-sign?",
    ],
  },
  {
    page:"Decision Maker Intel",
    greeting:"Ready to make contact?",
    prompts:[
      "Draft a message to Sen. Durbin's office",
      "What's worked with this senator in past campaigns?",
      "Help me write a co-signed letter with an organization",
      "What's the right tone for a first outreach call?",
    ],
  },
];

function CampaignAssistant({activeTab}){
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const ctx=ASSISTANT_CONTEXT[activeTab]||ASSISTANT_CONTEXT[0];
  const messagesEndRef = React.useRef(null);

  const send=(text)=>{
    if(!text.trim()) return;
    const userMsg={role:'user',text:text.trim()};
    const reply={role:'assistant',text:`Got it — working on "${text.trim()}". This is a prototype, but in the real product I'd generate a full response here tailored to your campaign.`};
    setMessages(m=>[...m,userMsg,reply]);
    setInput('');
    setTimeout(()=>messagesEndRef.current?.scrollIntoView({behavior:'smooth'}),50);
  };

  // Reset prompts when tab changes
  React.useEffect(()=>{
    setMessages([]);
  },[activeTab]);

  return <div style={{position:'fixed',bottom:24,right:24,zIndex:200,width:open?360:'auto',display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
    {open&&<div className="fade-in" style={{
      width:360,marginBottom:10,borderRadius:16,overflow:'hidden',
      background:'rgba(255,255,255,0.5)',
      boxShadow:'0 8px 40px rgba(31,28,35,.18), 0 2px 8px rgba(31,28,35,.08)',
      border:`1px solid rgba(255,255,255,0.5)`,
      backdropFilter:'blur(20px)',
      WebkitBackdropFilter:'blur(20px)',
      display:'flex',flexDirection:'column',maxHeight:520}}>

      {/* Header */}
      <div style={{padding:'14px 16px',borderBottom:`1px solid rgba(209,203,218,0.4)`,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        background:'transparent'}}>
        <div style={{display:'flex',alignItems:'center',gap:9}}>
          <div style={{width:28,height:28,borderRadius:8,
            background:'linear-gradient(135deg,#312D37,#47414F)',
            display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{fontSize:13}}>✦</span>
          </div>
          <div>
            <div style={{fontSize:13,fontWeight:800,color:T.g1000,lineHeight:1}}>Campaign Assistant</div>
            <div style={{fontSize:10,color:T.g800,marginTop:6}}>{ctx.page}</div>
          </div>
        </div>
        <button onClick={()=>setOpen(false)}
          style={{background:'none',border:'none',cursor:'pointer',color:T.g500,
            fontSize:16,padding:4,lineHeight:1,fontFamily:'inherit'}}>✕</button>
      </div>

      {/* Messages or greeting */}
      <div style={{flex:1,overflowY:'auto',padding:'14px 16px',display:'flex',flexDirection:'column',gap:10,minHeight:0}}>
        {messages.length===0?(
          <>
            <p style={{margin:0,fontSize:13.5,fontWeight:700,color:T.g1000}}>{ctx.greeting}</p>
            <p style={{margin:'-4px 0 0',fontSize:12,color:T.g700}}>Here are some things I can help with on this page:</p>
            <div style={{display:'flex',flexDirection:'column',gap:7,marginTop:4}}>
              {ctx.prompts.map((p,i)=>(
                <button key={i} onClick={()=>send(p)}
                  style={{textAlign:'left',padding:'9px 12px',borderRadius:8,
                    fontSize:12.5,color:T.g950,fontWeight:500,fontFamily:'inherit',
                    background:T.g50,border:`1px solid ${T.g200}`,cursor:'pointer',
                    transition:'all .12s',lineHeight:1.4}}
                  onMouseEnter={e=>{e.currentTarget.style.background=T.g100;e.currentTarget.style.borderColor=T.g300;}}
                  onMouseLeave={e=>{e.currentTarget.style.background=T.g50;e.currentTarget.style.borderColor=T.g200;}}>
                  {p}
                </button>
              ))}
            </div>
          </>
        ):(
          messages.map((m,i)=>(
            <div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start'}}>
              <div style={{maxWidth:'85%',padding:'9px 12px',borderRadius:10,fontSize:13,lineHeight:1.5,
                background:m.role==='user'?T.g1000:T.g50,
                color:m.role==='user'?'#fff':T.g950,
                borderBottomRightRadius:m.role==='user'?2:10,
                borderBottomLeftRadius:m.role==='assistant'?2:10}}>
                {m.text}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef}/>
      </div>

      {/* Input */}
      <div style={{padding:'10px 12px',borderTop:`1px solid rgba(209,203,218,0.4)`,
        display:'flex',gap:8,alignItems:'center',background:'transparent'}}>
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter'&&send(input)}
          placeholder="Ask anything about your campaign…"
          style={{flex:1,fontSize:13,padding:'8px 12px',borderRadius:8,
            border:`1.5px solid rgba(209,203,218,0.6)`,outline:'none',fontFamily:'inherit',
            color:T.g1000,background:'rgba(255,255,255,0.5)'}}
          onFocus={e=>e.target.style.borderColor=T.g600}
          onBlur={e=>e.target.style.borderColor=T.g300}/>
        <button onClick={()=>send(input)}
          style={{width:34,height:34,borderRadius:8,background:T.brand400,border:'none',
            cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',
            flexShrink:0,color:'#fff',fontSize:14}}>
          ↑
        </button>
      </div>
    </div>}

    {/* Toggle pill */}
    <button onClick={()=>setOpen(v=>!v)}
      style={{display:'flex',alignItems:'center',gap:8,padding:'14px 16px',
        borderRadius:99,border:'none',cursor:'pointer',fontFamily:'inherit',
        background:T.g1000,
        boxShadow:'0 4px 16px rgba(31,28,35,.25)',
        transition:'all .15s'}}>
      <span style={{fontSize:14,color:'#fff'}}>✦</span>
      <span style={{fontSize:13,fontWeight:700,color:'#fff'}}>Campaign Assistant</span>
      <span style={{fontSize:11,color:'rgba(255,255,255,.5)',marginLeft:2}}>{open?'▼':'▲'}</span>
    </button>
  </div>;
}

/* ── VARIANT A ── */
function VariantA(){
  const [active,setActive]=useState(0);
  const tabs=[
    {label:"Today's Brief",icon:<Ic.Brief/>},
    {label:"My Roadmap",icon:<Ic.Map/>},
    {label:"My Network",icon:<Ic.Users/>},
    {label:"Decision Maker Intel",icon:<Ic.Target/>},
  ];
  const content=[
    <TodaysBriefSection onNavigate={setActive}/>,
    <MyRoadmapSection/>,
    <MyNetworkSection/>,
    <DecisionMakerSection/>,
  ];
  return <div>
    <div style={{position:'sticky',top:64,zIndex:30,background:T.g0,
      borderBottom:`1px solid ${T.g200}`,boxShadow:'0 1px 3px rgba(49,45,55,.04)'}}>
      <div style={{maxWidth:1100,margin:'0 auto',padding:'0 24px',display:'flex',gap:0,alignItems:'center',overflowX:'auto'}}>
        {tabs.map((tab,i)=>(
          <button key={i} onClick={()=>setActive(i)}
            className={active===i?'tab-active':'tab-inactive'}
            style={{display:'flex',alignItems:'center',gap:7,padding:'14px 18px',paddingLeft:i===0?0:18,
              fontSize:13.5,whiteSpace:'nowrap',background:'none',border:'none',
              cursor:'pointer',transition:'color .12s',fontFamily:F.sans,lineHeight:1}}>
            <span style={{color:active===i?T.brand400:T.g500}}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
        <div style={{marginLeft:'auto',paddingLeft:16,flexShrink:0}}>
          <button className="btn-s" style={{display:'flex',alignItems:'center',gap:6,padding:'7px 14px',fontSize:13}}>
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>
            </svg>
            Share campaign
          </button>
        </div>
      </div>
    </div>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'28px 24px 100px'}}>
      <div className="fade-in" key={active}>{content[active]}</div>
    </div>
    <CampaignAssistant activeTab={active}/>
  </div>;
}


/* ── APP ── */
function App(){
  return <div style={{minHeight:'100vh',background:T.g0,paddingBottom:56}}>
    <TopNav/>
    <VariantA/>
  </div>;
}

export default App;
