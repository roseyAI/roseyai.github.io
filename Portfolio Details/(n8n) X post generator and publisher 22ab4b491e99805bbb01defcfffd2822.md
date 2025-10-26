# (n8n) X post generator and publisher

Text: n8n automation that will generate and publish content to your X account!
Service: Social media content generation
Featured: No
Tag: n8n

[https://www.loom.com/share/adc345b9e191455a8409d7c63b6ea0cc?sid=6fec0242-33c2-4e9d-9d2e-be34303af425](https://www.loom.com/share/adc345b9e191455a8409d7c63b6ea0cc?sid=6fec0242-33c2-4e9d-9d2e-be34303af425)

Please see this video for a quick demo.

![Screenshot 2025-07-08 at 2.04.10 PM.png]((n8n)%20X%20post%20generator%20and%20publisher/Screenshot_2025-07-08_at_2.04.10_PM.png)

This n8n automation is designed to generate and publish content to X (formerly Twitter). The workflow consists of these main steps:

- **Enter Title Topic**: The workflow begins with a form input where you enter the topic or title for your X post.
- **Generate AI Content**: Using OpenAI Chat Model, the automation generates content based on your provided topic. It includes a "Format AI Output" component to structure the generated content properly for X.
- **Post to X**: The workflow then automatically posts the generated content to your X account using the "create:tweet" action.
- **Show Confirmation**: Finally, it displays a confirmation that your post has been published successfully.

This automation streamlines the content creation and publishing process for X, allowing you to quickly generate AI-powered posts without having to manually write and publish them yourself.