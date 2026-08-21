import nodemailer from "nodemailer";

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
    return Response.json({ message: "Failed to send email" }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
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
    console.error("Contact form email failed:", error);
    return Response.json({ message: "Failed to send email" }, { status: 500 });
  }
}
