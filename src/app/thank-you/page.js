import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {FaDiscord} from "react-icons/fa";

export default function ThankYou() {
    return (
        <main className="flex bg-[#091211] min-h-screen flex-col items-center justify-center relative">
            <Header />
            {/* Background SVG */}
            <svg className="absolute top-0"
                 xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 800 450" opacity="0.66">
                <defs>
                    <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%"
                            filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic"
                                        edgeMode="none" result="blur"></feGaussianBlur>
                    </filter>
                </defs>
                <g filter="url(#bbblurry-filter)">
                    <ellipse rx="277.5" ry="225.5" cx="405.55" cy="-55.21"
                             fill="#248f6d"></ellipse>
                </g>
            </svg>

            {/* Thank You Content */}
            <div className="px-6 sm:px-16 lg:px-32 flex-grow flex flex-col items-center justify-center z-10 py-24">
                {/* Confirmation Badge */}
                <div className="inline-block bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full shadow-sm mb-4">
                    <span className="flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <span className="text-sm">Submission Received</span>
                    </span>
                </div>

                {/* Thank You Message */}
                <h1 className="text-5xl sm:text-6xl text-white text-center font-semibold">Thank You for Joining!</h1>
                <p className="text-gray-400 text-center mt-4 text-lg max-w-2xl">
                    We've successfully received your information. You're now part of the BountyBolt community.
                    Stay tuned for updates and exclusive offers.
                </p>

                {/* Optional: Next Steps or Call to Action */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/"
                       className="w-full sm:w-auto bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#248F6D] focus:ring-offset-2">
                        Return Home
                    </a>
                    <a href="https://discord.gg/ETGAhrsWRw"
                       className="w-full sm:w-auto flex flex-row items-center bg-[#248F6D] text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-[#1a6e53] focus:outline-none focus:ring-2 focus:ring-[#248F6D] focus:ring-offset-2">
                        Join our Discord
                        <FaDiscord className="text-white text-2xl ml-2"/>
                    </a>
                </div>
            </div>
            {/* Footer */}
            <Footer/>
        </main>
    );
}
