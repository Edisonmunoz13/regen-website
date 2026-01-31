import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendWelcomeEmail(email: string, firstName?: string | null) {
  console.log(`📬 sendWelcomeEmail called for: ${email}`);
  console.log(`🔐 SMTP_USER exists: ${!!process.env.SMTP_USER}`);
  console.log(`🔐 SMTP_PASSWORD exists: ${!!process.env.SMTP_PASSWORD}`);
  console.log(`📧 EMAIL_FROM: ${process.env.EMAIL_FROM || "Regen <horacio@regeninvest.co>"}`);
  
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn("⚠️ SMTP credentials not set, skipping email");
    console.warn(`   SMTP_USER: ${process.env.SMTP_USER || "undefined"}`);
    console.warn(`   SMTP_PASSWORD: ${process.env.SMTP_PASSWORD ? "***" : "undefined"}`);
    return { success: false, error: "SMTP credentials not configured" };
  }

  const name = firstName || "there";

  try {
    console.log(`📧 Attempting to send welcome email to: ${email}`);
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || "Regen <horacio@regeninvest.co>",
      to: email,
      subject: "Welcome to Regen — You're on the waitlist! 🔥",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(180deg, #0B1410 0%, #13241B 50%, #0B1410 100%);">
            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #0B1410 0%, #13241B 50%, #0B1410 100%); padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #000000; border: 1px solid #27272a; border-radius: 12px; padding: 40px;">
                    <tr>
                      <td align="center" style="padding-bottom: 30px;">
                        <h1 style="color: #85EFAC; font-size: 28px; font-weight: bold; margin: 0;">LET'S GOOO 🔥</h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="color: #e5e7eb; font-size: 16px; line-height: 1.6;">
                        <p style="margin: 0 0 20px 0;">Hey ${name},</p>
                        <p style="margin: 0 0 20px 0;">You're officially on the Regen waitlist! 🎉</p>
                        <p style="margin: 0 0 20px 0;">We're building something special that will help you stack cash automatically with every bet.</p>
                        <p style="margin: 0 0 30px 0;">Keep an eye on your inbox, big things incoming.</p>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="padding-top: 20px; border-top: 1px solid #27272a;">
                        <p style="color: #71717a; font-size: 14px; margin: 0;">© ${new Date().getFullYear()} Regen. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    console.log(`✅ Email sent successfully to ${email}`);
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Response: ${info.response}`);
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`❌ Error sending welcome email to ${email}:`, error);
    if (error instanceof Error) {
      console.error(`   Error message: ${error.message}`);
    }
    // Don't throw - we don't want to fail the signup if email fails
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
