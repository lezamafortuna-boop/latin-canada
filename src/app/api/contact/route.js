import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  const body = await request.json().catch(() => null);
  const { name, email, subject, message } = body || {};

  if (!name || !email || !message) {
    return Response.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const destinationEmail =
    process.env.CONTACT_EMAIL || "franciscopassuelo@gmail.com";

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Missing SMTP environment variables.");
    return Response.json(
      { message: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const port = Number(SMTP_PORT);

    if (!Number.isInteger(port) || port <= 0) {
      console.error("Invalid SMTP_PORT environment variable.");
      return Response.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const emailSubject = subject || `New message from ${name}`;

    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      to: destinationEmail,
      replyTo: email,
      subject: emailSubject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject || "No subject provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "No subject provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form email failed:", {
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
    });

    const message =
      error?.code === "EAUTH" || error?.responseCode === 535
        ? "Email service authentication failed."
        : "Unable to send email right now.";

    return Response.json({ message }, { status: 500 });
  }
}
