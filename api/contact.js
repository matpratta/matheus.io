// Grab our SendGrid API key or quit if not available
const API_KEY = process.env.sendgrid_key

// Validate it
if (!API_KEY) {
  console.error('SendGrid API key not set. Please configure it by setting-up the sendgrid_key secret name on now.json and properly saving the secret value.')
  return process.exit(1)
}

// Grab our other env vars
const EMAIL_FROM = process.env.email_from
const EMAIL_TO = process.env.email_to

// Check them
if (!EMAIL_FROM || !EMAIL_TO) {
  console.error('Please fill all the TO and FROM env variables or secrets.')
  return process.exit(1)
}

// We'll use the SendGrid API here
const SendGrid = require('@sendgrid/mail')
SendGrid.setApiKey(API_KEY)

// Handle requests
module.exports = async (req, res) => {
  try {
    // Extract our fields
    const { name, email, subject, message } = req.body

    // Create our body
    const emailBody = `You received a new contact from ${name}!
      From: ${name} <${email}>
      Subject: ${subject}
      Message:
      ${message}`
    
    // Create our email headers
    const emailHeaders = {
      to: EMAIL_TO,
      from: EMAIL_FROM,
      replyto: email,
      subject: `Contact Form: ${subject} - ${subject}`,
      text: emailBody
    }

    // Attempt to send the email
    const emailResponse = await SendGrid.send(emailHeaders)

    // Do whatever you want with the response here, maybe log it?

    // Respond properly
    res.send({
      sent: true
    })
  } catch (e) {
    // Send back the error
    res.status(500).send({
      sent: false,
      error: e
    })
  }
}