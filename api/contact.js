import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Configure Nodemailer Transporter
    // Note: Vercel environment variables must be set in the Vercel Dashboard
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `Startfol.io Contact: ${subject || 'New Message'}`,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };

    try {
        await transporter.verify();
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: "Success", message: "Email Sent Successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ status: "Error", message: "Failed to send email", error: error.message });
    }
}
