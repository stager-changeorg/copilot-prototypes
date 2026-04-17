# Product Brief

# **Product Brief: AI Guidance Beta** 

## **TL;DR**

* **Problem:** Starters lose momentum after Week 1 because they don’t know what to do next; retention drops from \~45% Week 1 (65% for QPs)  to \~20% Week 2 (35% for QPs).   
* **Bet:** Personalized, AI-powered guidance will increase Week 2 retention and meaningful campaign actions.  
* **Beta:** Evolve our existing general checklist into an AI-generated personalized checklist—validating increased engagement and key action linking before investing in advanced UI or dynamic features.  
* **Scope:** Web-only beta for new US starters as an a/b test; design stays \~90% the same as current checklist, powered by LLM, with direct links to 3-4 key features.  
* **Success:** \+15% engagement with guidance (vs general checklist) and \+15% lift in downstream actions (specifically sending an update).  
* **Key Risks:** LLM speed vs quality tradeoff and complexity of dynamically linking tasks to the right features.

## **Context and Opportunity**

Starters consistently tell us that after creating a petition, the hardest part is knowing what to do next — and how to keep momentum going beyond the first share. Our concept research and alpha testing show that clear, personalized next steps dramatically increase confidence, motivation, and downstream actions. **An AI-powered guidance experience is our highest-confidence bet to improve Week 2+ retention and help Starters run more successful campaigns end to end.**

The beta takes a focused step forward by evolving our existing checklist into AI-generated, personalized next steps tailored to each Starter’s petition. Building on the app alpha, we will bring LLM generated content to the web using the current checklist design, with minimal UI changes and a small set of actionable steps designed to help Starters complete real tasks. The goal is to first validate personalized guidance in an interactive checklist format, and how to reliably generate LLM-powered content, before investing further in expanded design work or more advanced capabilities. 

Problem Definition

**The User Problem**

Starters feel lost after the initial share.

After publishing and sharing with their immediate network, most starters don't have a roadmap for building momentum, reaching decision makers, or converting signatures into real-world change. They

* Don't know which tactics will be most effective for their specific campaign  
* Feel overwhelmed by generic advice that doesn't account for their petition type, location, or goals  
* Lack confidence about offline tactics (community meetings, media outreach, decision maker contact)  
* Aren't aware of Change.org tools that could help them (updates, recommended groups, QR codes)  
* Have no clear sense of campaign phases or what "good" looks like at each stage

**This leads to early drop-off.** Starters return in Week 1 to check signature counts, but without clear next actions, they lose momentum and rarely return in Week 2 and beyond.

**The Platform Problem**

* **Retention drops sharply after Week 1** (\~45% Week 1 → \~20% Week 2\)  
* The dashboard does not yet feel like a true “campaign home” with clear forward momentum.  
* Current checklists and prompts are generic, insufficiently personalized and do not encompass the types of actions needed to win a campaign.

### **The Core Hypothesis**

If we provide Starters with a personalized and motivating AI-guided checklist that clearly answers what to do next, why it matters, and how to do it, then

* Starters will feel more confident and less overwhelmed  
* They will return farther along in their journey (focus now is on Week 2\)  
* They will take more meaningful downstream actions that help or showcase success in their campaign (eg updates, outreach)

## **What We’ve Learned So Far**

Across [concept testing](https://docs.google.com/document/d/10m-TApt9B8tebWXxWka0Mwf7qAIVlQbnR4aEjhrQJL0/edit?tab=t.5t8hukyyg6f3#heading=h.j4cgwrdxufcq) the app alpha \[[designs](https://www.figma.com/design/DFRKsMspxHzCSJJcBCpu5s/MVP-App?node-id=5984-41974&t=SnxdHIwUxXizlgyc-4) and [synthesis](#bookmark=id.2vcrvfduhmd8)\], and our web MVP checklist \[[designs](https://www.figma.com/design/GkPxnLM7jy76DMwTBnntPL/SE_Dashboard-2.0?node-id=12158-121044&t=FadwJjF2ukDv2f4C-4) and [synthesis](#bookmark=id.pnj767cwkwce)\], a consistent set of signals has emerged.

**What’s working**

* **Personalization dramatically increases relevance and trust**  
  When guidance references a Starter's location, petition topic, and decision makers, it feels legitimate, credible, and useful. In concept testing, confidence increased from average 5/10 → 7-8/10 after seeing personalized guidance.  
* **Starters want to understand why each step matters**  
  Beyond knowing what to do, Starters want to understand why a step is important and how much impact their effort is likely to have, another insight that surfaced strongly in concept testing.  
* **Structured, progressive guidance reduces overwhelm and encourages exploration**  
  Progressive disclosure helps Starters get started without feeling buried by a long task list. In the web checklist, approximately **50% of users explored beyond the first three tasks**, indicating healthy engagement with the structured format.  
* **Personalized guidance drives immediate downstream action (directional signal)**  
  In the app alpha, Starters who viewed AI-generated guidance were approximately 1.5× more likely to share their petition (60% vs 40%) or send an update (14% vs 9%) compared to baseline behavior.

**What doesn’t work (yet)**

* **Guidance must enable execution.**  
  Action increases when steps clearly show *how* to act and link directly to the tools that complete the task.The app alpha signaled behavioral lift but no retention improvement and we hypothesize this is because guidance wasn't actionable enough.  
* **Progress tracking matters for return behavior**  
  Without a way to see progress or completion, Starters are less likely to return. Overall app retention for Starter that viewed the alpha was flat. 

**Our Detailed Hypothesis**

Personalized guidance is an effective way to drive retention, but only when it is:

* **Actionable** (clear "how," not just "what")  
* **Connected to real tools** that help Starters take the action  
* **Structured and progressive**, so it doesn't overwhelm  
* **Returnable**, with visible progress over time

## **Why This Beta?** 

We have strong evidence that personalized guidance works. Both the alpha and concept testing validate that our prompt can produce AI-generated next steps that resonate with starters and increase confidence in how to run a successful campaign. **The question isn't whether to do this, it's what's the next step to continue validating the critical factors before making bigger investments.**

*Our approach: Continue content validation in an interactive format that drives actions (ie our current web checklist UX), then evolve the experience.*

**What We're De-Risking in This Beta**

**1\. Does personalization meaningfully outperform our generic checklist?**

* We have a working baseline (generic checklist) with 30% engagement among users who see it  
* We need to prove that the added complexity of LLM-generated content drives measurably better outcomes:  
  * **\+15% engagement with AI guidance vs control** (our current checklist)  
  * **\+15% increase in sending updates** (downstream meaningful action)  
  * Begin looking at impact on Week 2 retention

**2\. Can we reliably integrate LLM output with our existing features?**

* How do we dynamically link the right features to the right task? We believe this is critical for driving meaningfully better outcomes and making the dashboard a place users want to return to.  
* We need to learn what's technically feasible before designing complex flows around it.  
* We're not aiming to be exhaustive—linking 3-4 high-value actions (eg updates, customize link, share to recommended groups, QR codes) is enough to prove this out.

**3\. What's our initial process for ensuring high-quality, personalized content consistently?**

* The alpha showed promise, 88% of users were happy with their next steps, but we need a better process to ensure quality across diverse petition types  
* **Our v1 approach:**  
  * Campaign expert reviews \~20 varied petitions and helps establish criteria for "good guidance" (specific, actionable, contextually relevant)  
  * Contractors use those criteria to grade \~100 petition samples, surfacing patterns in what works and what doesn't  
  * These reviews inform prompt iteration and create a quality baseline  
* **This lays groundwork for scale:** Learnings from this manual process will inform future HITL workflows and potentially AI-assisted grading, but first we need to define what "good" looks like in practice.

**Why Keep the Current Design (Mostly)?**

**Speed to learning.** We already have:

* A functional checklist UI / UX  
* Analytics instrumentation  
* Known baseline metrics to compare against

**By keeping the design \~90% the same, we can:**

* Isolate the variable we're testing (personalized content vs generic)  
* Learn about LLM integration challenges without also creating new UI patterns  
* Focus team energy on content quality rather than debating design details   
* Ship faster 

## 

## **AI Guidance Beta Proposed Scope**

### **What does success look like** 

**Primary**

* \+15% engagement with AI guidance vs control (our current checklist on the dashboard)  
* \+15% increase in a downstream meaningful action (e.g., sending an update)

**Secondary**

* Week 2 retention lift  
* TBD: Self-reported confidence and clarity  
* Return visits to guidance

### **What we’re building** 

We are iterating on the app alpha to a web-based beta for new US starters. The beta focuses on generating personalized next steps while keeping the current checklist design largely intact.

**Content Generation**

* LLM-generated checklist of \~10–12 tasks based on petition content, location, and decision maker.  
  * Preference is GPT 5 (we’ll start from our [current prompt](https://docs.google.com/document/d/1e9K31b6cexsNc1hiH30Ezgc5zFYT0RglluulXjlsg1g/edit?tab=t.0))  
* References to the Starter’s specific petition topic (title and description), location, and decision makers.  
  * Should not feel like generic advice. Recommendations should feel actionable based on their unique context.  
* All tasks should have a clear explanation of *what* to do and *why* it matters

**UI / UX**

* Build on the current checklist design to support richer content  
* Use progressive reveal to avoid overwhelming long lists  
* Clear completion states and persistent progress for return visits

**Feature Integration (Initial)**

* Direct links to a small set of high-value actions (TBD):  
  * Send an update  
  * Customize petition link  
  * Share to recommended groups / social  
  * Download QR code poster  
  * Update decision maker  
* These will go to the tabs where the features live

**Content Quality Layer**

* Pre-launch  
  * Expert / campaigner review of \~20 varied petitions   
  * Contractor review of \~100 varied petitions  
* Post-launch:   
  * TBD feedback mechanism   
    * Note: low usage of Recommended groups feedback mechanism but we could use our new aptitude features to do something lightweight here 

**Out of scope**

* Task deletion, dismissal, or auto-completion  
* Feature embedded in a next step (vs linked to)  
* Heavy animations  
* Ongoing content quality evaluation   
  * HITL sample-based manual review \+ flagged content review  
    * AI grading quality  
  * Prompt refinement based on quality issues  
* Email or push notifications  
* From team discussion  
  * 

## **Initial Risks & Mitigations**

**Model speed vs quality**

* *Risk:* Better models may increase latency.  
* *Mitigation:* Two-step prompting (fast initial response \+ higher-quality follow-up) and latency monitoring.

**Integration complexity**

* *Risk:* Deep feature integrations slow delivery.  
* *Mitigation:* Start with 2–3 high-value links; use Team Robot and other experts at Change; expand post-beta.

## **What This Beta Unlocks Next**

Likely Next Steps Following a Successful Beta

If the beta meets its success criteria, we would proceed with **targeted design and experience exploration**, focused on iteration rather than a full rebuild.

**Design & Experience Exploration**

* How personalized next steps and petition activity should work together on the Home experience  
* How to organize tasks into campaign phases with clearer visual hierarchy to reduce overwhelm  
* How to use richer progress indicators to make progress and momentum more visible over time  
* How to progressively reveal task detail without hiding the broader plan  
* How to better integrate actions directly within tasks (e.g., surfacing recommended groups inline vs elsewhere)  
* How to balance action-oriented CTAs with self-reported task completion

These explorations would be grounded in real usage data from the beta, allowing us to invest confidently in the next phase of AI Guidance.

**If successful, this beta gives us confidence to invest in larger bodies of work like:**

* More sophisticated personalization (dynamic guidance on return visits, campaign phase detection, milestone-based updates)  
* Expanded integrations to more campaign actions  
* Richer guidance formats or conversational layers  
* Scaling guidance across platforms (iOS, Android) and markets  
* Gamification or systems notifications 

**If unsuccessful, it still provides high-quality learning about:**

* Where personalization breaks down  
* Which tasks do or don't drive engagement or action  
* Whether the problem is content quality, integration, or the checklist format itself

### 

## 

Appendix

### **Additional metrics we’ll watch** 

After 4-6 weeks of beta:

**Engagement thresholds:**

* ≥70% of starters view their guidance  
* ≥x% engagement rate (complete or interact with ≥1 task)  
* ≥3.5/5 average helpfulness rating?

**Action-taking validation:**

* ≥10% increase in petition updates sent vs control  
* ≥5% increase in sharing to recommended groups vs control

**Retention signal:**

* Positive directionality on Week 2 retention (any increase vs control)  
* ≥20% of users return to view guidance again

**Content quality:**

* ≤5% of generated content flagged as low-quality/inaccurate  
* ≥80% of survey respondents rate content as relevant

Next steps

- Architecture design  
- How can we map output to current features  
- How to execute the prompts

Re potential structure some thoughts as I’m reading through

Status 😉

* Decisions open / needed:  
* Next step: Prob Alignment

Problem

* Tldr:  
  * Starters lose momentum after Week 1 because they don’t know what to do next. We’re testing whether LLM generated, personalized next steps (replacing generic checklist) drives 15% lift in engagement. This beta will validate the quality of the checklist content and our ability to integrate linked actions before investing in (xyz faster, more personalized / dynamic) checklist experiences  
* Goals  
* Non-Goals  
* Metrics

Solution

* High-level approach  
* User flow \+ key features for each (P0 vs nice to have)  
  * First x through  
  * Return visit  
  * Viewing task → completing it  
  * When guidance fails  
* Logic  
  * For checklist content: Maximum \#?  
  * For linking:   
* Edge Cases  
  * When call takes too long?  
  * If no linked tasks are available?

Launch Plan

* Any other depts or collab needed: CS, Marketing, Legal, etc  
* Table with milestones and how we move from one stage to the next  
* Criteria for full rollout (+15% engagement, \+15% increase in updates, any lift in W2, content passes QA)  
* Risks \+ how we’ll address: LLM too slow, feature links  
- 

## 

## 

# Roll out plan

\[to be added here\]

# Key Analyses

## **Research & Learnings Synthesis**

Across concept testing, the AI Guidance alpha (app), and the existing checklist MVP (web), a consistent picture has emerged about **where guidance works, where it breaks down, and what we need to learn next**.

**App Alpha**

### **Discovery & Timing: Guidance is seen early — and timing matters**

* Personalized Next Steps reached a meaningful portion of users:  
  * 40% of December users (24% in January to date)  
  * 950 total users viewed guidance (600 in December, 361 in January)  
* Dashboard callouts were widely visible:  
  * 80% of app users in December  
  * 85% in January  
* When users encounter guidance, it is **early in their journey**:  
  * 40% on Day 0  
  * 15% on Day 1  
  * 10% on Day 2, with steady drop-off after

**Takeaway:**  
Guidance is most impactful immediately after petition creation. Prominence and placement matter, and surfacing guidance early aligns with both user behavior and the beta’s intent.

### **Engagement & Action: Personalized guidance drives behavior**

* 88% of surveyed users reported being happy with their AI-generated next steps  
* Among users who viewed guidance:  
  * 60% shared after viewing vs. 40% baseline (1.5× lift)  
  * 14% sent updates vs. 9% baseline (1.56× lift)  
* 20% of users who saw their next steps saved them

**Takeaway:**  
Personalized guidance resonates and, and the user behavior of the small cohort of users who saw it, took key **downstream action**, like sharing and updating supporters. The content itself continues to show resonance. 

### **Retention: Action alone is not yet enough**

* 30–40% of users who viewed guidance returned to it the following week  
* Overall app retention for this cohort (\~55%) matched baseline  
* No clear lift in Week 2 retention yet

**Takeaway:**  
Although we are seeing early signs of guidance driving key actions, it **does not yet drive sustained return behavior**. Making guidance more actionable and clearer on progress and completion is likely required to impact retention.

### **Checklist MVP (Web)**

* 60% of users see the checklist (despite it not being above the fold)  
* 23% of all users interact with it (\~30% of those who see it)  
* 20% complete at least one task via a CTA  
* Highest engagement tasks:  
  * Customize petition link — 32%  
  * Complete profile — 14%  
  * Share with communities — 12%  
* Completed tasks skew heavily toward sharing:  
  * 31% shared with friends  
  * 16% shared with communities  
* Users actively explore:  
  * 34% view 3 tasks  
  * 23% view 5–10 tasks  
  * \~50% view more than 3 tasks

**Takeaway:**  
This is a great baseline to build on. Task order matters, but exploratory behavior is strong. This provides a solid baseline to test whether **personalization meaningfully outperforms generic guidance**, and it highlights which actions are most valuable to prioritize.

### **Concept Testing: Why structure and framing matter**

**Validated**

* Personalized, localized guidance makes Change.org feel like a knowledgeable partner  
* “Guidance” and “Next Steps” framing works; pressure-based framing does not  
* Progressive disclosure reduces overwhelm  
* Users want both:  
  * a clear immediate next step  
  * visibility into the broader plan

**Still needs work**

* Social sharing is ongoing, not one-and-done  
* Starters want clearer “how” guidance to feel confident acting  
* Starters want to understand *why* each step matters and its expected impact

**Takeaway:**  
Personalized guidance works — **but only when it enables execution**, explains impact, and doesn’t overwhelm.

### 

### 

### **Synthesis: What this all adds up to**

Across surfaces and studies, the signal is consistent:

Personalized guidance is effective — but only when it is:

* **actionable** (clear “how,” not just “what”)  
* **connected to real tools** that complete the task  
* **structured and progressive** to reduce overwhelm  
* **returnable**, with visible progress over time

This synthesis directly informs **why the MVP focuses on evolving the existing checklist into an AI-generated, personalized checklist**: it is the lowest-risk, highest-signal way to test whether personalization can move behavior *and* retention.

Appendix

Engagement & Retention Metrics \- AI Guidance Alpha ([amp](https://app.amplitude.com/analytics/change/dashboard/qejco1gw))

**Awareness & Reach**

*Personalized Next Steps are reaching a meaningful, although not as high as I'd expect, portion of users. January  is tracking lower than December so far so I am keeping an eye on that or validating I am interpreting the data correctly.*

* **40% of December users saw Personalized Next Steps** (24% in January to date)  
  * 950 users total viewed their Next Steps  
    * 600 in December  
    * 361 in January  
* Dashboard callout visibility (80% of app users in dec and 85% in jan)  
  * 3,000 users saw the callout in December (80% of app users)  
  * 1,500 users have seen it so far in January (85% of app users)

Takeaway: The tile / callout might be getting lost and I am excited about the dashboard direction we are taking on the app and the prominence we plan to give this on web.

**Timing in the Petition Journey**

*When users see Personalized Next Steps, most are early in their journey—and act quickly.*

* **40%** created their petition **the same day (Day 0\)**  
* 15% created their petition the next day (Day 1\)  
* 10% created their petition on Day 2, with continued decline after

Takeaway: Impact is strongest immediately after petition creation and in-line what we were thinking for the beta.

*Engagement with Next Steps*

* 20% of users who see their next steps, save them  
* Of users that rate (15% rated), 80% are happy with them

Takeaway: These feel like healthy engagement numbers and signals given the limited tracking and engagement provided in the alpha.

**Downstream Engagement (Sharing & Updates)**

*Viewing Personalized Next Steps looks to be correlated with deeper engagement.*

* **60%** share after viewing Next Steps vs **40% baseline** (**1.5× lift**)  
* **14%** send updates after viewing Next Steps vs **9% baseline** (**1.56× lift**)

Takeaway: Personalized guidance increases both sharing and update activity but keep in mind these are very engaged users :).

**Retention**

*Some positive signal here on users returning to the guidance but no gains on overall retention so far.*

**• 30%** who viewed the guidance returned to it the following week (excluding holiday weeks)

• **55%** return to the app overall (this is on par with baseline app retention)

Takeaway: Making the beta actionable (ie help Starter's accomplish their next steps) seems like it will be key to moving retention more meaningfully.

Checklist MVP on Web ([amp](https://app.amplitude.com/analytics/change/dashboard/ibwb84ap))

**Discovery & Visibility**

*The checklist is being discovered by a majority of users.*

* **60% of users** see the checklist (note is is not above the fold on desktop and appears as the **3rd module** on the page)  
* **23% of total users** interact with the checklist (\~**30% engagement rate** among users who see it)  
  * Note: engagement is at parity with Daily Steps to Victory (module to module comparison, Daily Steps to Victory was \~10% higher but this was before we had better and stronger actions to take from the dashboard for new starters)

Takeaway: Discovery is okay given placement, but I still think this is kind of low. I am glad we've done the pre-work for a world where AI guidance exists, knowing it will be important to see it on landing post petition creation.

**Task Engagement & Completion**

*A meaningful subset of users move from viewing to action. Users are primarily engaging with earlier tasks but some are exploring beyond the initial view. Sharing actions dominate completions.*

* **20%** complete at least one task via a CTA click  
* Top CTA Actions  
  * **Customize petition link** — **32% (**2nd task in the list)  
  * **Complete profile** — **14% (**1st task in the list)  
  * **Share with communities** — **12% (**4th task, suggesting users are clicking “view more”)  
* Completed Tasks  
  * **31%** shared with friends  
  * **16%** shared with communities  
  * **8%** customized link and thanked supporters *(analytics gap noted)*  
  * **8%** thanked supporters  
* Users are not just skimming—many actively browse multiple tasks.  
  * **34%** view **3 tasks**  
  * **23%** view **5–10 tasks**  
  * **\~50% view more than 3 tasks**

Takeaway: Task order matters, but engagement with lower-ranked tasks shows exploratory behavior that is very promising. Interesting that CTA actions and completed tasks aren't congruent (I am not sure if this is a data or logic issue or if people are checking things off right away \- this requires further investigation).

**Sharing & Update Behavior (Comparative Impact)**

Post-checklist view sharing and supporter updates are **comparable to pre-launch behavior**, when Daily Steps to Victory lived on the Share tab. This represents a **net win**, as the checklist reaches a **much larger user volume**

**Retention**

Week 1 retention impact assessment pending as it's been an insufficient time since launch to evaluate. 

**Concept Testing (AI-Powered Checklist)**

Starters described the experience as motivating and confidence-building.

* What we validated   
  * Specific, localized, personalized guidance made Change.org feel like a knowledgeable partner rather than a generic platform  
  * “Guidance” and “Next Steps” framing resonated; pressure-based framing did not  
  * Progressive disclosure reduced overwhelm  
  * Starters want both a clear immediate next step and visibility into the broader plan  
* What still needs work  
  * Social sharing is ongoing, not a one-time task  
  * Starters want clearer “how” guidance to feel confident taking action  
  * Starters want to understand *why* each step matters and its expected impact

*Key takeaway: The content is directionally strong, but prompts need refinement to better support action and motivation.*

**AI Guidance Alpha (in-app)**

* 88% of respondents who answered our prompt were happy with their AI-generated next steps.  
* Of the users that clicked to see their Personalized Next Steps, most are early in their journey and act quickly.  
  * **40%** created their petition **the same day (Day 0\)**  
  * 15% created their petition the next day (Day 1\)  
* Users who viewed guidance were \~1.5× more likely to share and send updates.  
* Retention for this cohort was not meaningfully higher than baseline

*Key takeaway: With prompt iterations from concept learnings, we continue to validate, with a larger group of users (\~1K), that content resonates and drives some immediate action, but we hypothesize the content must be more actionable to move retention.* 

**Checklist MVP (Web)**

* **60% of users** see the checklist (note is is not above the fold on desktop and appears as the **3rd module** on the page)  
* **23% of total users** interact with the checklist (\~**30% engagement rate** among users who see it)  
* Starters are taking the most action on   
  * **Customize petition link** — **32% (**2nd task in the list)  
  * **Complete profile** — **14% (**1st task in the list)  
  * **Share with communities** — **12% (**4th task, suggesting users are clicking “view more”)  
* Starters are completing these tasks at the highest rates  
  * **31%** shared with friends  
  * **16%** shared with communities  
  * **8%** customized link and thanked supporters  
  * **8%** thanked supporters  
* Users are not just skimming—many actively browse multiple tasks.  
  * **34%** view **3 tasks**  
  * **23%** view **5–10 tasks**  
  * **\~50% view more than 3 tasks**

*Key takeaway:This is a solid baseline to build on and test the impact of general vs personalized checklist. Increasing checklist prominence will help new starters see it early, and user behavior highlights some of the tasks where guidance can most effectively drive early action.*