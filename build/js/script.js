document.getElementById("rsvp-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const event = document.getElementById("event").value;
    const rsvp = document.querySelector('input[name="rsvp"]:checked').value;
    const notes = document.getElementById("notes").value;
  
    // Airtable API URL and Key
    const airtableUrl = "https://api.airtable.com/v0/pattINxgBGHWQchim/Participants";
    const airtableApiKey = "pattINxgBGHWQchim.faccf93b4d8048c359d7dfee328f165fe327cd1808c635346cecb1eab88dd99f";
  
    // Data to send to Airtable
    const data = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Contact: contact,
            "Event Name": event,
            "RSVP Confirmation": rsvp,
            "Additional Notes": notes,
          },
        },
      ],
    };
  
    // Send data to Airtable
    try {
      const response = await fetch(airtableUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert("RSVP submitted successfully!");
      } else {
        alert("Failed to submit RSVP.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }

    // Reset form
    document.getElementById("rsvp-form").reset();


    const SENDGRID_API_KEY = "YOUR_SENDGRID_API_KEY";

    async function sendEmail(email, subject, message) {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        personalizations: [{ to: [{ email: email }] }],
        from: { email: "your-sender-email@example.com" },
        subject: subject,
        content: [{ type: "text/plain", value: message }],
        }),
    });

    if (response.ok) {
        console.log("Email sent successfully!");
    } else {
        console.error("Failed to send email.");
    }
    }

    // Example: Send a confirmation email
    document.querySelector("#eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userEmail = document.querySelector("#email").value;
    sendEmail(userEmail, "Event Registration Confirmation", "Thank you for registering!");
    });


    // Example: Send a reminder email
    document.querySelector("#reminderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userEmail = document.querySelector("#email").value;
    sendEmail(userEmail, "Event Reminder", "Don't forget about the event tomorrow!");
    });


    // Example: Send a follow-up email
    document.querySelector("#followUpForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userEmail = document.querySelector("#email").value;
    sendEmail(userEmail, "Event Follow-Up", "Thank you for attending the event!");
    });

    const TWILIO_SID = "YOUR_TWILIO_SID";
    const TWILIO_AUTH_TOKEN = "YOUR_TWILIO_AUTH_TOKEN";
    const TWILIO_WHATSAPP_NUMBER = "whatsapp:+YOUR_TWILIO_NUMBER";

    async function sendWhatsAppMessage(to, message) {
    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`, {
        method: "POST",
        headers: {
        Authorization: `Basic ${btoa(`${TWILIO_SID}:${TWILIO_AUTH_TOKEN}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
        From: TWILIO_WHATSAPP_NUMBER,
        To: `whatsapp:${to}`,
        Body: message,
        }),
    });

    if (response.ok) {
        console.log("WhatsApp message sent!");
    } else {
        console.error("Failed to send WhatsApp message.");
    }
    }

    // Example: Notify user via WhatsApp
    sendWhatsAppMessage("+123456789", "Thank you for registering for our event!");

    // Example: Notify user via WhatsApp//
    sendWhatsAppMessage("+123456789", "Don't forget about the event tomorrow!");


});


const supabase = createClient(
    process.env.SUPABASE_DATABASE_URL,
    process.env.PUBLIC_SUPABASE_ANON_KEY
  );