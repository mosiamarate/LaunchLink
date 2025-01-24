# LaunchLink  
LaunchLink is a web-based event management system designed to capture participant data, automate email notifications, and streamline event workflows. This project integrates modern tools like Airtable, SendGrid, and Twilio for data handling and communication, ensuring seamless event coordination.  

---

## Project Structure  

```
LaunchLink/
├── index.html          # Homepage with an event registration form and navigation links
├── about.html          # About page with company details and the team section
├── contact.html        # Contact page with a contact form and company information
├── events.html         # Events page with event-specific details and highlights
├── styles.css          # CSS file for styling all the pages
├── scripts.js          # JavaScript file for dynamic functionality and integrations
```

---

## Features 

### Core Pages
- Homepage (`index.html`):  
  - Displays a registration form for events.  
  - Dynamic data submission to Airtable for participant management.  

- About Page (`about.html`):  
  - Highlights the company's mission, vision, and core values.  
  - Introduces the team with roles and images.  

- Contact Page (`contact.html`):  
  - Includes a contact form for inquiries.  
  - Displays company contact details:
    - Support Email and Phone Numbers  
    - Social Media Links (LinkedIn, Instagram, Facebook)  

- Events Page (`events.html`):  
  - Lists upcoming and featured events.  
  - Includes an interactive Valentine's Event section for user engagement.  

### Styling (`css/styles.css`) 
- Consistent theme with cohesive colors and typography.  
- Responsive design for all device sizes.  
- Customized social media icons matching the project theme.  

### Dynamic Functionality (`js/scripts.js`) 
- Handles form submissions and sends data to Airtable.  
- Automates email notifications using SendGrid.  
- Sends WhatsApp notifications via Twilio.  
- Implements navigation bar locking during scroll for improved UX.  

---

## Technologies Used  
1. Frontend:  
   - HTML5  
   - CSS3  
   - JavaScript (ES6)  

2. Database Integration:  
   - Airtable for storing and analyzing participant data.  

3. Automations and Notifications:  
   - Zapier/Make for triggering workflows.  
   - SendGrid for email communications.  
   - Twilio for WhatsApp notifications.  

4. Hosting:  
   - Netlify for static file hosting and serverless backend functions.  

---

## Setup and Deployment Instructions 

### 1. Clone the Repository 
```bash
git clone https://github.com/mosiamarate/launchlink.git
cd launchlink
```

### 2. Hosting on Netlify  
1. Create an account on [Netlify](https://www.netlify.com/).  
2. Drag and drop the project folder into the Netlify dashboard.  
3. Get your live URL for public access.  

### 3. Configure Airtable  
1. Create an Airtable base for participant data.  
2. Get your Airtable API key and Base ID.  
3. Update the following variables in `scripts.js`:  
   ```javascript
   const AIRTABLE_API_KEY = "YOUR_API_KEY";
   const AIRTABLE_BASE_ID = "YOUR_BASE_ID";
   const AIRTABLE_TABLE_NAME = "YOUR_TABLE_NAME";
   ```

### 4. Set Up SendGrid for Email Notifications  
1. Sign up for [SendGrid](https://sendgrid.com/).  
2. Generate an API key and verify your sender email.  
3. Update the following in `scripts.js`:  
   ```javascript
   const SENDGRID_API_KEY = "YOUR_SENDGRID_API_KEY";
   ```

### 5. Configure Twilio for WhatsApp Notifications 
1. Create an account on [Twilio](https://www.twilio.com/).  
2. Get your **Account SID**, **Auth Token**, and **WhatsApp-enabled number**.  
3. Update the following in `scripts.js`:  
   ```javascript
   const TWILIO_SID = "YOUR_TWILIO_SID";
   const TWILIO_AUTH_TOKEN = "YOUR_TWILIO_AUTH_TOKEN";
   const TWILIO_WHATSAPP_NUMBER = "whatsapp:+YOUR_NUMBER";
   ```

---

## How to Use  
1. Event Registration:  
   - Navigate to the homepage and fill out the registration form.  
   - Form data will be sent to Airtable for storage.  

2. Email and WhatsApp Notifications:  
   - Upon form submission, participants will receive a confirmation email and WhatsApp notification.  
   - Automated reminders and feedback emails are triggered via Zapier or custom scripts.  

3. Admin Features:  
   - Analyze participant data in Airtable for post-event evaluation.  
   - Use SendGrid and Twilio APIs for custom communications.  

---

## Future Enhancements  
- Add user authentication for participants to track event history.  
- Implement a dashboard for admins to manage events and communication.  
- Enhance analytics by integrating Google Sheets or Power BI.  

---

## License  
This project is licensed under the MIT License. Feel free to use and modify it for your own needs.  

---
