import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await sgMail.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function createContactEmailTemplate(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #1e293b; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
        New Contact Form Submission - ORIONTEL EXIM
      </h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #475569; margin-top: 0;">Contact Details</h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.email}</td>
          </tr>
          ${data.company ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Company:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.company}</td>
          </tr>
          ` : ''}
          ${data.phone ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.phone}</td>
          </tr>
          ` : ''}
        </table>
      </div>
      
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
        <h3 style="color: #475569; margin-top: 0;">Message</h3>
        <p style="color: #1e293b; line-height: 1.6; margin: 0;">${data.message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="color: #64748b; font-size: 14px; margin: 0;">
          This email was sent from the ORIONTEL EXIM website contact form.
        </p>
      </div>
    </div>
  `;

  const text = `
New Contact Form Submission - ORIONTEL EXIM

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}

This email was sent from the ORIONTEL EXIM website contact form.
  `;

  return { html, text };
}