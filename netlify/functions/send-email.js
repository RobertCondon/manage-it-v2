const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Set up SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    // Parse the request body
    const data = JSON.parse(event.body);
    const { email, name, company, phone, message, formType } = data;
    
    // Validate required fields
    if (!email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email and message are required' })
      };
    }
    
    // Create email content
    const subject = formType === 'contact' 
      ? `Contact Form Submission from ${name || email}`
      : `Quote Request from ${name || email}`;
    
    const htmlContent = `
      <h2>${formType === 'contact' ? 'New Contact Form Submission' : 'New Quote Request'}</h2>
      <p><strong>Email:</strong> ${email}</p>
      ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Submitted from manageit.nz ${formType} form</em></p>
    `;
    
    const msg = {
      to: process.env.TO_EMAIL || 'info@manageit.nz',
      from: process.env.FROM_EMAIL || 'noreply@manageit.nz',
      replyTo: email,
      subject: subject,
      html: htmlContent
    };
    
    // Send the email
    await sgMail.send(msg);
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message 
      })
    };
  }
};