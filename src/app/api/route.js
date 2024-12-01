// app/api/subscribe/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Parse the JSON request body
        const { email } = await request.json();

        // Check if the email is provided
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Validate email format (simple regex for demo purposes)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Send a POST request to the MailerLite API
        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
            },
            body: JSON.stringify({
                email,
                groups: ["139446969113249365"], // Add the subscriber to the specified group(s)
            }),
        });

        // Handle non-200 responses from MailerLite
        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.message }, { status: response.status });
        }

        // Parse and return the successful response
        const data = await response.json();
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        // Handle unexpected errors (e.g., network issues)
        console.error('Error adding subscriber:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
