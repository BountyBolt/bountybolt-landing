import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import HowItWorks from "@/components/HowItWorks";
import {FaDiscord} from "react-icons/fa";

const Accordion = dynamic(() => import("@/components/ui/accordion").then(mod => mod.Accordion));
const AccordionItem = dynamic(() => import("@/components/ui/accordion").then(mod => mod.AccordionItem));
const AccordionTrigger = dynamic(() => import("@/components/ui/accordion").then(mod => mod.AccordionTrigger));
const AccordionContent = dynamic(() => import("@/components/ui/accordion").then(mod => mod.AccordionContent));

const CheckIcon = () => {
    return (
        <div className="flex items-center justify-center">
            <div
                className="flex items-center justify-center w-6 h-6 rounded-full bg-[#248F6D]"
                aria-label="Checkmark Icon"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M20.292 6.292a1 1 0 011.416 1.416l-11 11a1 1 0 01-1.416 0l-5-5a1 1 0 111.416-1.416L10 16.586l9.292-9.294z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    )
}

const JoinDiscord = ({position}) => {
    return (
        <div className={` ${position === "top" && "justify-center"} flex mt-2`}>
            <a
                href="https://discord.gg/x3C7nBDr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#248F6D] flex mt-4 flex-row items-center transition-all ease-in-out text-gray-200 text-lg font-semibold px-8 py-3 rounded-md hover:bg-[#1a6e53] focus:outline-none focus:ring-2 focus:ring-[#248F6D] focus:ring-offset-2"            >
                Join our Discord
                <FaDiscord className="text-white text-2xl ml-2"/>

            </a>
        </div>
    )
}
export default function Home() {
    return (
        <main
            className="flex bg-[#091211] min-h-screen flex-col items-center justify-center">
            <Header/>
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
                    <ellipse rx="277.5" ry="225.5" cx="405.551230690696" cy="-55.2087111039595"
                             fill="#248f6d"></ellipse>
                </g>
            </svg>
            <div
                className="px-6 sm:px-16 lg:px-40 z-10 flex flex-col items-center justify-center pt-20 sm:pt-24 xl:pt-32 pb-16 sm:pb-24">
                <div className="inline-block bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full shadow-sm mb-4">
                    <span className="flex items-center justify-center space-x-2">
                      {/* Star Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      <span className="text-sm">Empower Your Web3 Journey</span>
                    </span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl/[1.1] text-white text-center font-medium leading-[1.3]">
                    Solve Issues, Earn Crypto – Empower Web3 Projects Today
                </h1>
                <p className="text-gray-400 text-center mt-4 text-sm sm:text-lg lg:text-xl leading-relaxed">
                    Join a decentralized marketplace connecting blockchain innovators with skilled
                    developers. <br/> Fund issues, fix
                    problems, and grow the open-source Web3 ecosystem – all with secure crypto payments.
                </p>
                <div className="flex flex-col max-w-2xl flex-1 w-full">
                    <JoinDiscord position="top" />
                    <p className="text-md text-gray-300 text-center mt-4">
                        Join for access to the BountyBolt airdrop and early access to the platform.
                    </p>
                </div>
            </div>

            <div className="pb-16 px-8 sm:px-16 lg:px-32 flex flex-col w-full">
                <h2 className="text-gray-400 text-center text-lg sm:text-xl lg:text-2xl">
                    Trusted by 50+ Companies and Open-Source Projects in Web3 and Blockchain
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    <Image
                        src="/0x.webp"
                        width={120}
                        height={80}
                        alt="0x Logo"
                        className="object-contain"
                    />
                    <Image
                        src="/ethfoundation.webp"
                        width={120}
                        height={80}
                        alt="Ethereum Foundation Logo"
                        className="object-contain"
                    />
                    <Image
                        src="/cryptocom.webp"
                        width={120}
                        height={80}
                        alt="Crypto.com Logo"
                        className="object-contain"
                    />
                    <Image
                        src="/Uniswap-Logo.webp"
                        width={120}
                        height={80}
                        alt="Uniswap Logo"
                        className="object-contain"
                    />
                    <Image
                        src="/kraken.webp"
                        width={120}
                        height={80}
                        alt="Kraken Logo"
                        className="object-contain"
                    />
                    <Image
                        src="/chainlink.webp"
                        width={120}
                        height={80}
                        alt="Chainlink Logo"
                        className="object-contain"
                    />
                </div>
            </div>
            <HowItWorks/>
            <section className="flex flex-col w-full items-center py-16 px-6 sm:px-16 lg:px-32">
                <div className="inline-block bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full shadow-sm mb-4">
                <span className="flex items-center justify-center space-x-2">
                    {/* Star Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="text-sm">Seamless Collaboration</span>
                </span>
                </div>
                <h2 className="text-4xl sm:text-5xl text-center font-bold text-white">Unlock the Benefits of
                    Decentralized Bounties</h2>
                <p className="text-gray-400 mt-2 text-center text-lg max-w-4xl">
                    Our platform bridges backers and developers in the Web3 ecosystem, enabling secure transactions,
                    transparent collaboration, and rewarding contributions. Here's what makes it unique:
                </p>
                <div
                    className="relative w-full border border-gray-400/40 sm:w-3/4 mt-8 rounded-2xl drop-shadow-[0px_0px_60px_rgba(36,143,109,0.5)]">
                    <Image
                        src="/dashboardss.webp"
                        width={1920}
                        height={1080}
                        alt="Platform Features"
                        className="rounded-2xl"
                    />
                </div>
                <div
                    className="lg:grid flex flex-col sm:flex-row sm:items-center lg:grid-cols-3 gap-8 mt-10 text-left max-w-5xl ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6"/>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-white font-bold text-lg">Community-Driven Funding</h3>
                            <p className="text-gray-400 mt-1 text-base">
                                Anyone can fund an issue, boosting its resolution speed and empowering
                                open-source innovation.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6"/>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-white font-bold text-lg">Secure Escrow Contracts</h3>
                            <p className="text-gray-400 mt-1 text-base">
                                Funds are held in smart contracts and released released automatically upon resolution.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6"/>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-white font-bold text-lg">Crypto Rewards</h3>
                            <p className="text-gray-400 mt-1 text-base">
                                Contributors earn rewards directly to their wallets, making payments seamless and
                                trustless.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="grid grid-cols-1 lg:grid-cols-2 relative w-full items-center py-16 px-6 sm:px-16 lg:px-32 gap-16">
                <svg className="absolute bottom-0 hidden md:block"
                     xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 800 450" opacity="0.53">
                    <defs>
                        <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%"
                                filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%"
                                            in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                        </filter>
                    </defs>
                    <g filter="url(#bbblurry-filter)">
                        <ellipse rx="277.5" ry="225.5" cx="393.1876220703125" cy="649.5185269442471"
                                 fill="#248f6d"></ellipse>
                    </g>
                </svg>
                {/* Left Column */}
                <div className="flex flex-col justify-start col-span-1 z-10">
                    <div
                        className="inline-block bg-gray-800 text-gray-300 text-sm px-4 w-fit py-2 rounded-full shadow-sm mb-4">
            <span className="flex items-center justify-center space-x-2">
                {/* Star Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="text-sm">Exclusive Access</span>
            </span>
                    </div>

                    {/* Header */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-left lg:text-left">
                        Shape the Future of Decentralized Collaboration
                    </h2>
                    <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-4xl">
                        Be among the first to explore our platform connecting Web3 innovators with global talent. By
                        joining the waitlist, you’ll gain early access, insider updates, and exclusive opportunities to
                        grow with us.
                    </p>

                    {/* Signup Form */}
                    <div className="flex flex-col max-w-2xl flex-1 w-full">
                        <JoinDiscord position="bottom"/>
                        <p className="text-md text-gray-300 mt-4">
                            Join for access to the BountyBolt airdrop and early access to the platform.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col z-10 col-span-1 text-white">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10 py-2">
                            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                                What is BountyBolt?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base">
                                BountyBolt is a decentralized bounty marketplace for Web3 projects. Backers can fund existing GitHub issues or post new ones, while developers (contributors) solve them to earn cryptocurrency rewards.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10 py-2">
                            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                                What network will BountyBolt support?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base">
                                BountyBolt will initially support the Base network, with plans to expand to other
                                blockchains in the future.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10 py-2">
                            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                                Can I fund issues I don’t own?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base">
                                Yes! You can fund issues from any public GitHub repository. Your funding incentivizes developers to solve the issue faster, even if you don’t own the project.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-white/10 py-2">
                            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                                How do I get paid on BountyBolt?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base">
                                Once a pull request is approved by the backer, funds will be released to the
                                contributor’s wallet in the
                                cryptocurrency of their choice. This will be automated through the use of oracles &
                                smart contracts.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border-white/10 py-2">
                            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                                How do issue contribution payments work?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base">
                                Payments can be made in cryptocurrency or fiat.
                                Fiat payments are securely converted to crypto and held in escrow by smart contracts until the issue is resolved.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className="border-white/10 py-2">
                            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                                What if no one solves my issue?
                            </AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base">
                                You can specify a deadline for issue resolution. If the deadline passes without a solution, funds will be returned to the backer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            <Footer/>
        </main>
    );
}
