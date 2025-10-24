import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Setup transporter (uses env vars already configured)
        let transporter;
        if (
            process.env.EMAIL_HOST &&
            process.env.EMAIL_USER &&
            process.env.EMAIL_PASSWORD
        ) {
            transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: Number(process.env.EMAIL_PORT) || 587,
                secure: process.env.EMAIL_SECURE === 'true',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });
        } else {
            return NextResponse.json(
                { success: false, message: 'Email configuration is missing' },
                { status: 500 }
            );
        }

        const toAddress =  'malikjawadkanyal@gmail.com';

        const mailOptions = {
            from: process.env.EMAIL_FROM || 'website@m-rtours.co.uk',
            to: toAddress,
            subject: subject ? `Contact Form: ${subject}` : 'Contact Form Submission',
            text: `
                New contact form submission:

                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message:
                ${message}

                Submitted on: ${new Date().toLocaleString()}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Subject:</strong> ${subject}</li>
                </ul>
                <h3>Message:</h3>
                <p style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #dee2e6;">
                    ${message ? message.replace(/\n/g, '<br>') : ''}
                </p>
                <p>Submitted on: ${new Date().toLocaleString()}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Contact mail sending error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email', error: String(error) },
            { status: 500 }
        );
    }
}
