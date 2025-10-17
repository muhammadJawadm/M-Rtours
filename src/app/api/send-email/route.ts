import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Create a transporter using SMTP credentials from environment variables
    let transporter;

    if ( 
        process.env.EMAIL_HOST && 
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
    const toAddress = 'malikjawadkanyal@gmail.com';
    
    // Determine which form was submitted and format email accordingly
    let subject, textContent, htmlContent;

    if (formData.formType === 'umrahBooking') {
      // Umrah booking form submission
      subject = 'New Umrah Package Booking Request';
      textContent = `
        New Umrah Booking Request:
        
        Customer Details:
        Full Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Address: ${formData.address || 'Not provided'}
        
        Package Details:
        Package Name: ${formData.packageName}
        Travel Date: ${formData.travelDate}
        Travelers: ${formData.numAdults} adults, ${formData.numChildren} children, ${formData.numInfants} infants
        Departure Airport: ${formData.departureAirport}
        Preferred Airline: ${formData.preferredAirline || 'Not specified'}
        Room Type: ${formData.roomType}
        Meal Preference: ${formData.mealPreference}
        
        Additional Services:
        Ziyarah Tours in Makkah: ${formData.addZiyarahMakkah ? 'Yes' : 'No'}
        Ziyarah Tours in Madinah: ${formData.addZiyarahMadinah ? 'Yes' : 'No'}
        Direct Flights: ${formData.requestDirectFlights ? 'Yes' : 'No'}
        Private Transport: ${formData.requestPrivateTransport ? 'Yes' : 'No'}
        Travel Insurance: ${formData.addTravelInsurance ? 'Yes' : 'No'}
        
        Special Requests:
        ${formData.specialRequests || 'None'}
        
        This request was submitted on ${new Date().toLocaleString()}
      `;
      
      htmlContent = `
        <h2>New Umrah Package Booking Request</h2>
        <p>A customer has submitted a booking request for an Umrah package.</p>
        
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Full Name:</strong> ${formData.fullName}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>Address:</strong> ${formData.address || 'Not provided'}</li>
        </ul>
        
        <h3>Package Details:</h3>
        <ul>
          <li><strong>Package Name:</strong> ${formData.packageName}</li>
          <li><strong>Travel Date:</strong> ${formData.travelDate}</li>
          <li><strong>Travelers:</strong> ${formData.numAdults} adults, ${formData.numChildren} children, ${formData.numInfants} infants</li>
          <li><strong>Departure Airport:</strong> ${formData.departureAirport}</li>
          <li><strong>Preferred Airline:</strong> ${formData.preferredAirline || 'Not specified'}</li>
          <li><strong>Room Type:</strong> ${formData.roomType}</li>
          <li><strong>Meal Preference:</strong> ${formData.mealPreference}</li>
        </ul>
        
        <h3>Additional Services:</h3>
        <ul>
          <li><strong>Ziyarah Tours in Makkah:</strong> ${formData.addZiyarahMakkah ? 'Yes' : 'No'}</li>
          <li><strong>Ziyarah Tours in Madinah:</strong> ${formData.addZiyarahMadinah ? 'Yes' : 'No'}</li>
          <li><strong>Direct Flights:</strong> ${formData.requestDirectFlights ? 'Yes' : 'No'}</li>
          <li><strong>Private Transport:</strong> ${formData.requestPrivateTransport ? 'Yes' : 'No'}</li>
          <li><strong>Travel Insurance:</strong> ${formData.addTravelInsurance ? 'Yes' : 'No'}</li>
        </ul>
        
        <h3>Special Requests:</h3>
        <p style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #dee2e6;">
          ${formData.specialRequests ? formData.specialRequests.replace(/\n/g, '<br>') : 'None provided'}
        </p>
        
        <p>This request was submitted on ${new Date().toLocaleString()}</p>
      `;
    } else if (formData.formType === 'beatMyPrice') {
      // Beat My Price form submission
      subject = 'New Beat My Price Quote Request';
      textContent = `
        New Beat My Price Quote Request:
        
        Customer Details:
        Full Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        Trip Details:
        Travel Month: ${formData.travelMonth}
        Duration: ${formData.duration} days
        Number of Guests: ${formData.numberOfGuests}
        Departure City: ${formData.departureCity}
        Accommodation Preference: ${formData.accommodationPreference}
        Current Quote: £${formData.currentQuote}
        
        Additional Information:
        ${formData.packageDetails}
        
        This request was submitted on ${new Date().toLocaleString()}
      `;
      
      htmlContent = `
        <h2>New Beat My Price Quote Request</h2>
        <p>A customer has requested a competitive quote for their travel.</p>
        
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Full Name:</strong> ${formData.fullName}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
        </ul>
        
        <h3>Trip Details:</h3>
        <ul>
          <li><strong>Travel Month:</strong> ${formData.travelMonth}</li>
          <li><strong>Duration:</strong> ${formData.duration} days</li>
          <li><strong>Number of Guests:</strong> ${formData.numberOfGuests}</li>
          <li><strong>Departure City:</strong> ${formData.departureCity}</li>
          <li><strong>Accommodation Preference:</strong> ${formData.accommodationPreference}</li>
          <li><strong>Current Quote:</strong> £${formData.currentQuote}</li>
        </ul>
        
        <h3>Additional Information:</h3>
        <p style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #dee2e6;">
          ${formData.packageDetails ? formData.packageDetails.replace(/\n/g, '<br>') : 'No additional details provided.'}
        </p>
        
        <p>This request was submitted on ${new Date().toLocaleString()}</p>
      `;
    } else {
      // Default booking form submission
      subject = 'New Booking Request from Website';
      textContent = `
        New booking request details:
        
        Departure Date: ${formData.departureDate}
        Departure City: ${formData.departureCity}
        Number of Travelers: ${formData.travelers}
        Number of Nights: ${formData.nights}
        
        Contact Information:
        Full Name: ${formData.fullName}
        Phone: ${formData.phone}
        Email: ${formData.email}
        
        This request was submitted on ${new Date().toLocaleString()}
      `;
      
      htmlContent = `
        <h2>New Booking Request</h2>
        <p>A new booking request has been submitted through the website.</p>
        
        <h3>Travel Details:</h3>
        <ul>
          <li><strong>Departure Date:</strong> ${formData.departureDate}</li>
          <li><strong>Departure City:</strong> ${formData.departureCity}</li>
          <li><strong>Number of Travelers:</strong> ${formData.travelers}</li>
          <li><strong>Number of Nights:</strong> ${formData.nights}</li>
        </ul>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Full Name:</strong> ${formData.fullName}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
        </ul>
        
        <p>This request was submitted on ${new Date().toLocaleString()}</p>
      `;
    }
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@m-rtours.co.uk',
      to: toAddress,
      subject: subject,
      text: textContent,
      html: htmlContent,
    };
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}
