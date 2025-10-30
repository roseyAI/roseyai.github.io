# How to Connect Your Contact Form to n8n and Airtable

This guide will walk you through setting up an automation that sends form submissions from your website to Airtable using n8n.

## Overview

When someone fills out your contact form, the data will:
1. Be sent to n8n via a webhook
2. Get automatically added to your Airtable base
3. (Optional) Send you a notification email

---

## Step 1: Set Up Your Airtable Base

### 1.1 Create Your Base
1. Go to [Airtable](https://airtable.com) and sign in
2. Click **"Add a base"** → **"Start from scratch"**
3. Name it **"Leads"** (or whatever you prefer)

### 1.2 Create Your Table Structure
In your new base, create a table with these fields:

| Field Name | Field Type |
|------------|------------|
| Name | Single line text |
| Email | Email |
| Company | Single line text |
| Message | Long text |
| Submitted At | Date and time |
| Status | Single select (options: New, Contacted, Qualified, Closed) |

**Tip:** You can add more fields later based on your needs!

---

## Step 2: Set Up n8n Workflow

### 2.1 Create a New Workflow
1. Log into your n8n instance
2. Click **"New workflow"**
3. Name it **"Contact Form to Airtable"**

### 2.2 Add Webhook Trigger Node
1. Click the **+** button to add a new node
2. Search for **"Webhook"**
3. Select **"Webhook"** trigger
4. Click **"Execute Node"** to get your webhook URL
5. **Copy this webhook URL** - you'll need it for your contact form

Settings:
- **HTTP Method:** POST
- **Path:** `/contact-form` (or whatever you prefer)
- **Response Mode:** "Respond Immediately"
- **Response Code:** 200

### 2.3 Add Airtable Node
1. Click **+** after the Webhook node
2. Search for **"Airtable"**
3. Select **"Airtable"**
4. **Operation:** Create
5. Click **"Create New Credential"**

#### Setting Up Airtable Credentials:
1. Go to [Airtable API](https://airtable.com/create/tokens)
2. Click **"Create new token"**
3. Give it a name: "n8n Integration"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. Add access to your **"Leads"** base
6. Click **"Create token"**
7. **Copy the token** and paste it into n8n

#### Configure Airtable Node:
1. **Base:** Select your "Leads" base
2. **Table:** Select your table (usually "Table 1" or the name you gave it)
3. Map the fields from the webhook to Airtable:

**Field Mappings:**
- **Name:** `{{ $json.body.name }}`
- **Email:** `{{ $json.body.email }}`
- **Company:** `{{ $json.body.company }}`
- **Message:** `{{ $json.body.message }}`
- **Submitted At:** `{{ $now.toISO() }}`
- **Status:** `New` (static value)

---

## Step 3: Update Your Contact Form

### 3.1 Modify contact.html

Open your `contact.html` file and update the form submission script:

```javascript
// Replace the webhookURL with your n8n webhook URL
const webhookURL = 'YOUR_N8N_WEBHOOK_URL_HERE';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formMessage = document.getElementById('formMessage');
    const submitButton = this.querySelector('.form-button');

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'form-message success';
            this.reset();
        } else {
            throw new Error('Failed to send message');
        }

    } catch (error) {
        formMessage.textContent = 'Oops! Something went wrong. Please try again or contact me directly via email.';
        formMessage.className = 'form-message error';
    }

    formMessage.style.display = 'block';
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
});
```

---

## Step 4: Test Your Workflow

### 4.1 In n8n:
1. Click **"Execute Workflow"** in the top right
2. The workflow is now listening for submissions

### 4.2 On Your Website:
1. Go to your contact page
2. Fill out the form with test data
3. Click **"Send Message"**

### 4.3 Check Results:
1. Go to your Airtable base
2. You should see a new record with your test data!
3. In n8n, you should see the workflow executed successfully

---

## Step 5: (Optional) Add Email Notification

If you want to get notified when someone fills out the form:

### 5.1 Add Gmail Node (or any email service)
1. After the Airtable node, click **+**
2. Search for **"Gmail"** (or "Send Email")
3. Select **"Gmail"**
4. **Operation:** Send
5. Set up Gmail credentials (or use SMTP)

### 5.2 Configure Email:
- **To:** your-email@example.com
- **Subject:** `New Lead: {{ $json.body.name }}`
- **Body:**
```
You have a new contact form submission!

Name: {{ $json.body.name }}
Email: {{ $json.body.email }}
Company: {{ $json.body.company }}

Message:
{{ $json.body.message }}

Submitted at: {{ $now.toFormat('yyyy-MM-dd HH:mm:ss') }}
```

---

## Step 6: Activate Your Workflow

1. In n8n, click **"Save"** in the top right
2. Toggle the workflow to **"Active"**
3. Your automation is now live!

---

## Troubleshooting

### Form submissions not appearing in Airtable?
- Check that your webhook URL is correct in contact.html
- Make sure the workflow is "Active" in n8n
- Check the n8n execution logs for errors
- Verify Airtable field names match exactly

### CORS errors?
- Make sure your n8n instance allows CORS from your website domain
- In n8n webhook settings, check "Respond Immediately" is enabled

### Data not mapping correctly?
- Check that form field names (name, email, company, message) match what you're referencing in n8n
- Use `{{ $json.body }}` in n8n to see all incoming data

---

## Next Steps

### Enhance Your Automation:
1. **Add Tags/Categories:** Automatically tag leads based on keywords in their message
2. **Lead Scoring:** Assign scores based on company name or message content
3. **Auto-Responder:** Send a thank you email to the person who filled out the form
4. **Slack Notification:** Get notified in Slack when a high-value lead comes in
5. **CRM Integration:** Send leads to ActiveCampaign, HubSpot, or your CRM

Need help with any of these? Just ask!

---

## Summary

You now have:
✅ A contact form on your website
✅ n8n webhook receiving form submissions
✅ Automatic lead storage in Airtable
✅ (Optional) Email notifications for new leads

All without any monthly subscription costs for form tools! 🎉
