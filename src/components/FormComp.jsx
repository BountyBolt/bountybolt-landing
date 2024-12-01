"use client";
import { useState } from "react";

export default function FormComp() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail(""); // Clear the email field after successful submission
                window.location.href = "/thank-you"; // Redirect to the success page
            } else {
                const errorData = await response.json();
                setStatus(`error: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error adding subscriber:", error);
            setStatus("error: Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex flex-col max-w-2xl flex-1 w-full">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-2 mt-8 w-full"
            >
                <label htmlFor="email" className="sr-only">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full sm:w-2/3 px-4 py-3 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#248F6D] focus:ring-offset-2"
                />
                <button
                    type="submit"
                    className="w-full whitespace-nowrap sm:w-min bg-[#248F6D] text-white text-md font-semibold px-4 py-3 rounded-md hover:bg-[#1a6e53] focus:outline-none focus:ring-2 focus:ring-[#248F6D] focus:ring-offset-2"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Joining..." : "Join Waitlist"}
                </button>
            </form>
            {status && status !== "loading" && (
                <p className="mt-4 text-sm text-gray-400 text-center">
                    {status === "success"
                        ? "You have successfully joined the waitlist!"
                        : status}
                </p>
            )}
        </div>
    );
}
