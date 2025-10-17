import { NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();
    
    // 1. Save to Firebase
    let firestoreId = '';
    try {
      // Create a copy of the data with a timestamp
      const bookingWithTimestamp = {
        ...bookingData,
        submittedAt: serverTimestamp(),
        status: "new"
      };
      
      // Add to Firebase
      const docRef = await addDoc(collection(db, "umrah_bookings"), bookingWithTimestamp);
      firestoreId = docRef.id;
      console.log('Booking saved to Firebase with ID:', docRef.id);
    } catch (firestoreError) {
      console.error('Error saving to Firebase:', firestoreError);
      // Continue with Google Sheets even if Firebase fails
    }

    // 2. Send the data to Google Sheets using direct POST to Google Apps Script Web App
    try {
      // The Google Apps Script Web App URL (you need to create this - see instructions below)
      const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzIh3m2rnHidwO_OlSpODlF-P7WIuosBsmiiftgnqVnijCeyl9j6hurKBpqvrP_n5yp/exec';
      
      // Format the data for the sheet
      const sheetData = {
        timestamp: new Date().toISOString(),
        firebaseId: firestoreId,
        fullName: bookingData.fullName,
        email: bookingData.email,
        phone: bookingData.phone,
        address: bookingData.address || 'Not provided',
        packageName: bookingData.packageName,
        travelDate: bookingData.travelDate,
        numAdults: bookingData.numAdults,
        numChildren: bookingData.numChildren,
        numInfants: bookingData.numInfants,
        departureAirport: bookingData.departureAirport,
        preferredAirline: bookingData.preferredAirline || 'Not specified',
        roomType: bookingData.roomType,
        mealPreference: bookingData.mealPreference,
        addZiyarahMakkah: bookingData.addZiyarahMakkah ? 'Yes' : 'No',
        addZiyarahMadinah: bookingData.addZiyarahMadinah ? 'Yes' : 'No',
        requestDirectFlights: bookingData.requestDirectFlights ? 'Yes' : 'No',
        requestPrivateTransport: bookingData.requestPrivateTransport ? 'Yes' : 'No',
        addTravelInsurance: bookingData.addTravelInsurance ? 'Yes' : 'No',
        specialRequests: bookingData.specialRequests || 'None',
        status: 'New'
      };
      
      // Send data to Google Sheets
      try {
        const sheetsResponse = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetData),
        });
        
        const sheetsResult = await sheetsResponse.text();
        console.log('Google Sheets response:', sheetsResult);
        
        if (!sheetsResponse.ok) {
          console.warn('Google Sheets submission failed:', sheetsResult);
        }
      } catch (sheetsError) {
        console.error('Failed to submit to Google Sheets:', sheetsError);
      }
      
      // Send email notification
      try {
        // Use absolute URL for fetch in server components
        const response = await fetch('http://localhost:3000/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            formType: 'umrahBooking',
            ...bookingData,
            firebaseId
          })
        });
        
        if (!response.ok) {
          console.warn('Email notification failed:', await response.text());
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue even if email fails
      }
      
      return NextResponse.json({
        success: true,
        message: 'Booking submitted successfully',
        firebaseId: firestoreId
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      return NextResponse.json(
        { 
          success: false,
          message: 'Failed to process booking',
          error: process.env.NODE_ENV === 'development' ? String(error) : undefined
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing booking submission:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to process booking',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

