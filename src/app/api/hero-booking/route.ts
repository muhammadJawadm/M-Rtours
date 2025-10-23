import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

export async function POST(request: Request) {
  try {
    // Get form data from request
    const formData = await request.json();
    
    // 1. Save to Firebase
    let firestoreId = '';
    try {
      const bookingWithTimestamp = {
        ...formData,
        source: 'hero_banner_form',
        submittedAt: serverTimestamp(),
        status: 'new'
      };
      
      const docRef = await addDoc(collection(db, "bookings"), bookingWithTimestamp);
      firestoreId = docRef.id;
      console.log('Hero booking saved to Firebase with ID:', docRef.id);
    } catch (firestoreError) {
      console.error('Error saving to Firebase:', firestoreError);
      // Continue with email even if Firebase fails
    }
    
    // 2. Send email notification
    // Create a transporter using SMTP credentials from environment variables
    let transporter;

    if (process.env.EMAIL_HOST && 
        process.env.EMAIL_USER && 
        process.env.EMAIL_PASSWORD) {
      // Production configuration
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
    
    // The recipient email address
    const toAddress = process.env.EMAIL_RECIPIENT || 'info@m-rtours.co.uk';
    
    // Format email subject and content
    const subject = `New ${formData.packageType === 'hajj' ? 'Hajj' : 'Umrah'} Booking Request`;
    
    const textContent = `
      New Quick Booking Request:
      
      Package Details:
      Package Type: ${formData.packageType === 'hajj' ? 'Hajj Package' : 'Umrah Package'}
      Specific Package: ${formData.specificPackage || 'Not specified'}
      Departure Date: ${formData.departureDate}
      Departure City: ${formData.departureCity}
      Travelers: ${formData.travelers}
      Nights: ${formData.nights}
      
      Customer Information:
      Full Name: ${formData.fullName}
      Phone: ${formData.phone}
      Email: ${formData.email}
      
      Reference ID: ${firestoreId}
      Submitted on: ${new Date().toLocaleString()}
    `;
    
    const htmlContent = `
      <h2>New Quick Booking Request</h2>
      <p>A customer has submitted a quick booking request from the homepage.</p>
      
      <h3>Package Details:</h3>
      <ul>
        <li><strong>Package Type:</strong> ${formData.packageType === 'hajj' ? 'Hajj Package' : 'Umrah Package'}</li>
        <li><strong>Specific Package:</strong> ${formData.specificPackage || 'Not specified'}</li>
        <li><strong>Departure Date:</strong> ${formData.departureDate}</li>
        <li><strong>Departure City:</strong> ${formData.departureCity}</li>
        <li><strong>Travelers:</strong> ${formData.travelers}</li>
        <li><strong>Nights:</strong> ${formData.nights}</li>
      </ul>
      
      <h3>Customer Information:</h3>
      <ul>
        <li><strong>Full Name:</strong> ${formData.fullName}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
      </ul>
      
      <p><strong>Reference ID:</strong> ${firestoreId}</p>
      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    `;
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@m-rtours.co.uk',
      to: toAddress,
      subject: subject,
      text: textContent,
      html: htmlContent,
      replyTo: formData.email
    };
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    
    // 3. Send confirmation email to customer
    const customerEmailText = `
      Dear ${formData.fullName},
      
      Thank you for submitting your ${formData.packageType === 'hajj' ? 'Hajj' : 'Umrah'} booking request with MR Tours.
      
      Your booking details:
      - Package Type: ${formData.packageType === 'hajj' ? 'Hajj Package' : 'Umrah Package'}
      - Departure Date: ${formData.departureDate}
      - Departure City: ${formData.departureCity}
      - Travelers: ${formData.travelers}
      - Nights: ${formData.nights}
      
      Your reference number is: ${firestoreId}
      
      Our team will contact you shortly to discuss your booking and answer any questions you may have.
      
      If you need immediate assistance, please contact us:
      Phone: +44 7517 240405
      Email: info@m-rtours.co.uk
      
      Best regards,
      The MR Tours Team
    `;
    
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #28AAE2;">Thank You for Your Booking Request</h2>
        </div>
        
        <p>Dear ${formData.fullName},</p>
        
        <p>Thank you for submitting your ${formData.packageType === 'hajj' ? 'Hajj' : 'Umrah'} booking request with MR Tours.</p>
        
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your booking details:</h3>
          <ul>
            <li><strong>Package Type:</strong> ${formData.packageType === 'hajj' ? 'Hajj Package' : 'Umrah Package'}</li>
            <li><strong>Departure Date:</strong> ${formData.departureDate}</li>
            <li><strong>Departure City:</strong> ${formData.departureCity}</li>
            <li><strong>Travelers:</strong> ${formData.travelers}</li>
            <li><strong>Nights:</strong> ${formData.nights}</li>
          </ul>
          
          <p><strong>Your reference number is:</strong> ${firestoreId}</p>
        </div>
        
        <p>Our team will contact you shortly to discuss your booking and answer any questions you may have.</p>
        
        <p>If you need immediate assistance, please contact us:</p>
        <p>Phone: <a href="tel:+447517240405" style="color: #28AAE2;">+44 7517 240405</a><br>
        Email: <a href="mailto:info@m-rtours.co.uk" style="color: #28AAE2;">info@m-rtours.co.uk</a></p>
        
        <p>Best regards,<br>The MR Tours Team</p>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">© ${new Date().getFullYear()} MR Tours. All rights reserved.</p>
        </div>
      </div>
    `;
    
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'info@m-rtours.co.uk',
        to: formData.email,
        subject: 'Thank You for Your Booking Request - MR Tours',
        text: customerEmailText,
        html: customerEmailHtml
      });
      console.log('Confirmation email sent to customer');
    } catch (customerEmailError) {
      console.error('Error sending confirmation email to customer:', customerEmailError);
      // Continue even if customer email fails
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Booking request processed successfully',
      referenceId: firestoreId
    });
  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process booking request',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}
