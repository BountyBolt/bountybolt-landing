import {FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row py-6 w-full z-20 px-32 items-center">
            <div className="flex flex-col justify-start">
                <a href="/">
                    <img src="/bountyboltwritten.png" alt="BountyBolt Logo" className="h-auto object-contain w-64"/>
                </a>
                <div className="flex flex-row gap-4 items-center mb-4">
                    {/* Privacy Policy and Terms of Service Links */}
                    <a
                        href="/"
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="/privacy-policy"
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms-of-service"
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>

            <div className="flex flex-col sm:ml-auto sm:items-end">
                <div className="flex flex-row gap-4 items-center mb-4">
                    {/* Twitter Logo */}
                    <div
                        className="rounded-full ease-in-out transition-all border border-white/20 bg-gray-800 p-2 hover:bg-gray-700 cursor-pointer">
                        <FaTwitter className="text-white text-md"/>
                    </div>

                    {/* Instagram Logo */}
                    <div
                        className="rounded-full ease-in-out transition-all border border-white/20 bg-gray-800 p-2 hover:bg-gray-700 cursor-pointer">
                        <FaInstagram className="text-white text-md"/>
                    </div>

                    {/* GitHub Logo */}
                    <div
                        className="rounded-full ease-in-out transition-all border border-white/20 bg-gray-800 p-2 hover:bg-gray-700 cursor-pointer">
                        <FaGithub className="text-white text-md"/>
                    </div>
                </div>
                <span className="text-gray-400 font-light text-md">Copyright © 2024 BountyBolt.</span>
            </div>
        </footer>
    )
}
