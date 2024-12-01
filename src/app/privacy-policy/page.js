import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
                <p className="text-sm text-gray-500 text-center mb-8">
                    Effective Date: 11/30/2024
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                    <p>
                        When you sign up for our waitlist, we collect the following information:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Your email address</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                    <p>We use the information you provide to:</p>
                    <ul className="list-disc list-inside">
                        <li>Send updates about our product or service.</li>
                        <li>Notify you of your status on the waitlist.</li>
                    </ul>
                    <p>
                        We will not sell or share your personal information with third parties unless required by law.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking</h2>
                    <p>
                        Our website does not use cookies or tracking technologies at this time. If this changes in the future, we will update this policy accordingly.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
                    <p>
                        Your data is stored securely on our servers or with trusted third-party service providers.
                        We implement reasonable security measures to protect your information but cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                    <p>
                        Depending on your location, you may have rights under data protection laws, such as the GDPR or CCPA.
                        These rights may include:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>The right to access, update, or delete your personal information.</li>
                        <li>The right to object to or restrict certain data processing activities.</li>
                    </ul>
                    <p>
                        To exercise these rights, please contact us at <a href="mailto:contact@bountybolt.com" className="text-green-600 hover:underline">contact@bountybolt.com</a>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons.
                        Any updates will be posted on this page with the updated effective date.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <a href="mailto:contact@bountybolt.com" className="text-green-600 hover:underline">contact@bountybolt.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
