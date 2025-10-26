# Website Engagement & Nurturing Automations

Text: 3 powerful CRM automations we can do to nurture and track your leads engagement
Service: Lead Automation
Featured: No
Tag: ActiveCampaign

![image.png](Website%20Engagement%20&%20Nurturing%20Automations/image.png)

1. Track lead engagement on the website

This automation begins when a contact submits any form. It then checks if the contact has previously visited the photography section of our website.

- If they **have** visited the photography page, the automation ends, indicating they've already shown interest.
- If they **haven't** visited the photography page, they receive a series of three emails (one per day) designed to promote website content. After these emails, the automation sets a "GOAL: Interested in Photography" and then ends.
    
    This flow helps us identify and nurture potential leads interested in photography, guiding them towards a specific goal based on their engagement.
    
1. Interest Nurturing & Sales Automation

![image.png](Website%20Engagement%20&%20Nurturing%20Automations/image%201.png)

This automation is triggered when a "Photography" tag is added to a contact. It first waits until a weekday at 9 AM in the contact's timezone.

Then, it sends a series of four "Photography Outreach" emails over several days. After these emails, the "Photography" tag is removed, and a "GOAL: PURCHASED" is set, implying a desired conversion.

Finally, an "Upsell - Photography" tag is added, and the contact is entered into another automation called "Made a Purchase" before this automation concludes. This flow is designed to nurture contacts tagged with "Photography" towards a purchase and then transition them into a post-purchase or upsell sequence.

1. ead Qualification & Management Automation

![image.png](Website%20Engagement%20&%20Nurturing%20Automations/image%202.png)

Lead Qualification & Management Automation

This automation starts when a "Photography" tag is added to a contact. It immediately checks if the contact is already in any stage of a "Business Pipeline."

- If the contact is **already in a deal stage**, the automation ends, preventing duplicate efforts.
- If the contact is **not in a deal stage**, a new deal named "New Photography Lead" is created for them, and two "Call" tasks are added to this deal.

The automation then waits for 30 days. After this waiting period, it checks if the contact's deal has moved to the "Qualified Lead" stage within the "Business Pipeline."

- If the deal **has** been moved to "Qualified Lead," it's then moved to "Cold Leads: No Response," and the automation ends. This suggests a follow-up or a re-engagement strategy for leads that became qualified but might not have progressed further.
- If the deal **has not** been moved to "Qualified Lead," the automation ends, indicating that the lead did not progress as expected within the 30-day period.

This automation streamlines the process of qualifying new photography leads, assigning follow-up tasks, and managing their progression within a sales pipeline.