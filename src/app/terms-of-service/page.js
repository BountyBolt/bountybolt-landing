import React from "react";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Terms of Service</h1>
                <p className="text-sm text-gray-500 text-center mb-8">
                    Effective Date: 11/30/2024
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Purpose of the Waitlist</h2>
                    <p>
                        The waitlist is designed to notify you about updates, news, and potential access to
                        <strong> BountyBolt</strong>. Joining the waitlist does not guarantee access to any future
                        product or service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Email Collection</h2>
                    <p>
                        By providing your email address, you consent to receiving communication
                        from <strong>BountyBolt</strong> regarding our waitlist and related updates. Your information will not be shared with third
                        parties without your explicit consent,
                        except as required by law. For more details, please see our <a href="/privacy-policy"
                                                                                       className="text-green-600 hover:underline">Privacy
                        Policy</a>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Prohibited Use</h2>
                    <p>You agree not to:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Use false or misleading information when signing up.</li>
                        <li>Attempt to disrupt or interfere with the operation of the website.</li>
                    </ul>
                    <p>
                        We reserve the right to remove users from the waitlist at our discretion if these terms are
                        violated.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Ownership and Intellectual Property</h2>
                    <p>
                        All content on this website, including text, images, logos, and design, is the intellectual
                        property of <strong>BountyBolt</strong> and may not be used without prior written permission.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                    <p><strong>BountyBolt</strong> is not responsible for:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Any errors or technical issues that may occur while using the site.</li>
                        <li>Any delays or changes in the launch of our product or service.</li>
                    </ul>
                </section>


                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Changes to the Terms</h2>
                    <p>
                        We may update these Terms of Service from time to time. Any changes will be posted on this page
                        with an updated effective date.
                        Your continued use of the website signifies your acceptance of the revised terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
                    <p>
                        These terms are governed by the laws of <strong>the USA</strong>. Any disputes shall be resolved
                        exclusively
                        in the courts of <strong>Maryland</strong>.
                    </p>
                </section>

                <p className="text-center mt-12">
                    If you have any questions or concerns, please contact us at <a href="mailto:contact@bountybolt.com"
                                                                                   className="text-green-600 hover:underline">contact@bountybolt.com</a>.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
