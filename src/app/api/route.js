// app/api/subscribe/route.js
import { NextResponse } from 'next/server';
import mailchimp from "@mailchimp/mailchimp_marketing"


export async function POST(request) {
    mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: "us20"
    });

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
        const response = await mailchimp.lists.addListMember("ef389e90ce", {
            email_address: email,
            status: "subscribed",
        });

        // Parse and return the successful response
        return NextResponse.json({
            message: `Successfully added contact. Contact ID: ${response.id}`,
        }, { status: 200 });

    } catch (error) {
        // Handle unexpected errors (e.g., network issues)
        console.error('Error adding subscriber:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
