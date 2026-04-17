# Q2 Co-Pilot Experimentation

# AI Co-Pilot Experimentation — Approach Alignment

Initial Working Session  •  Starter Experience Squad  
Attendees: Squad Leads \+ Pillar Leads 

**Goal of this meeting**  
Discuss and align on the approach for methodology in Q2— AI Guidance UX experimentation and the AI co-pilot prototype — and agree on which hypotheses we go after first. 

**Pre-read: Where we are and what we're proposing**  
**What we're working toward**  
Two connected bodies of work need a clear methodology plan:

* **AI Guidance: UX Experimentation** — A/B testing co-pilot assumptions before H2. How should campaign-moment guidance be organized? How much surfaces at once? Does it live inline? Focused actions vs. fuller journey view?  
* **AI Co-pilot Prototype** — Create a prototype with Local Heroes or Political Change Agents as the initial target persona.

**UX hypotheses to align on**  
These are the UX questions we need to answer. Come ready to react, reorder, or flag what’s missing. Part of the meeting is agreeing on which 1–2 we go after first.

**How guidance is organized affects return behavior and task completion**

The way campaign-moment guidance is structured will meaningfully change how often starters return and act on it. Our strongest bet: phase-based structure (grouped by campaign stage) vs. a flat checklist.

* Starters don’t have a mental model of what a petition journey looks like.  
* A flat list feels static — there’s no sense of where you are or what comes next.  
* A phase model implies progression and narrative, making guidance feel more purposeful.  
* Key question: what are the phases, how many phases, and does the framing need to differ by campaign type?

**Focused immediate actions at petition creation outperform a fuller journey view**

Surfacing 2–3 high-confidence next steps right after creation will drive more early action than showing the full guidance view at once.

* Right after creation, starters are in execution mode — a fuller view adds cognitive load at the wrong moment.  
* But a too-minimal view may underserve starters who want to understand the whole picture.  
* Key question: is the right moment for this immediately post-creation, or the first return visit? Should this evolve over time?

**Inline guidance drives more action than routing starters to a dedicated surface**

Keeping guidance in the dashboard flow will drive more action than asking them to navigate somewhere else to act on it.

* Guidance needs to meet them where they already are.  
* Inline keeps the action in context; routing adds friction and may feel like a detour.  
* Key question: How does this work from a UX perspective? Do we need to treat all guidance the same and determine when to send? 

**Surfacing petition activity as a momentum signal changes how starters engage with guidance**

Showing starters what’s actually happening on their petition (signatures, traffic, activity) connected to guidance will make recommendations feel more grounded and increase action.

* The moment of engagement or return is precious. Any friction risks losing a starter who was barely going to come back in the first place (this is behavior we currently see on Home now).  
* Inline keeps guidance tied to what's happening in their campaign, making it feel relevant rather than generic.  
* Key question: does the answer depend on guidance type? Quick next-step nudges may work best inline, while a richer co-pilot view might warrant its own surface later in the journey. How do we design for both?

**Designers Proposed approach**

Run two tracks in parallel, not sequentially:

* **Vision track:** A focused design sprint on the co-pilot north star — not to generate hypotheses (we have those), but to give the team a shared picture of what we’re building toward. Shapes how we interpret test results and keeps H2 grounded.  
* **Experimentation track:** Design and launch A/B tests on the highest-priority hypotheses. Learnings feed the vision; the vision sharpens which tests matter most.

*On qual: We’ve done AI guidance concept testing \[read out [here](https://docs.google.com/document/d/10m-TApt9B8tebWXxWka0Mwf7qAIVlQbnR4aEjhrQJL0/edit?tab=t.9cyzatezcvg6#heading=h.iqgjvg1dorcx)\]. The recommendation is to skip another qual round and go straight to prototyping and A/B tests unless the vision sprint surfaces a direction we haven’t tested at all.*

**Agenda**

30 minutes — follow-up session to be scheduled for detailed experiment design

1. **Framing (3 min)**  —  Jen recaps the two bodies of work and what we need to leave with.  
2. **Approach alignment (7 min)**  —  Quick react to the parallel tracks proposal. Are we aligned, or does one track need to lead?  
3. **Hypothesis prioritization (15 min)**  —  React to the hypotheses in the pre-read. Key questions:  
   * Do these capture the right ones, or are we missing something?  
   * Which 1–2 do we go after first and why?  
1. **Next steps (5 min)**  —  Confirm owners and schedule follow-up for detailed experiment design.

# H2 Co-Pilot Vision

**Where we’re headed in H2: The AI co-pilot** 

**Build an AI Campaign Co-pilot  — for every starter, on every campaign, at every moment in the journey.**

The H2 goal is to transform the Starter Experience into an AI co-pilot: a dynamic experience that meets starters where they are, knows what's happened since they were last here, and tells them exactly what to do next — not a static checklist disconnected from petition activity and off-platform momentum, but with guidance personalized to their campaign, their moment, and their voice.

Our core hypothesis is that campaign-moment awareness[^1] drives return. From the moment a starter creates their petition to every time they come back, the co-pilot surfaces high-confidence moves calibrated to where they are right now — initially drawing on internal signals like signature velocity, traffic source, and supporter activity, expanding over time to external signals like topic news, social media, DM activity, and public pressure. What makes this more than a generic AI is the connection to petition activity and what Change.org can uniquely do: historical data on what's worked for campaigns like yours, something Starter consistently bring up in interviews, and in-house campaign experts who aren't just informing the model — they're collaborators in building and refining the prompts and the human(s)-in-the-loop check on what good guidance actually looks like. That combination — institutional knowledge, human expertise, live campaign signal, and powerful LLMs — is what lets the co-pilot give a starter not just guidance, but confidence: other campaigns like yours have done this, and it worked.

Imagine a starter two weeks into their campaign to get a stop sign installed at the end of their block. Early on, the co-pilot is a coach: even when nothing has happened yet, it removes the blank page — "Here's a draft outreach to your decision maker, grounded in what campaigns like yours typically do at this stage." Over time, it becomes a true assistant. Signatures accelerated this week. Local coverage just picked up. The decision maker made a public statement on the issue yesterday. Now the draft already knows all of that. The starter goes from editing a template to approving something that already sounds like them. 

Underpinning all of this is a unified notification system — a single source for consistent, intelligent signals across app push, in-dashboard, email, and SMS. Getting starters back is what makes the rest possible; the co-pilot only works if it can reach them.

*To support our vision, in Q2, we'll build and validate an AI co-pilot prototype with our Political Change Agent or Local Heroes persona as the initial target user. These personas represent our largest segment and directly map to the company’s strategic focus on elected officials and local government — making them the right proving ground before expanding to other personas.*

[^1]:  Here's the core of what campaign-moment awareness means: