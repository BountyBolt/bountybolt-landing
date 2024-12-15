'use client'
import { useState } from 'react';
import { FaHandshakeSimple, FaCodeBranch, FaBoltLightning } from 'react-icons/fa6';

const HowItWorks = () => {
    const [isBackerView, setIsBackerView] = useState(false);

    const backerSteps = [
        {
            icon: <FaHandshakeSimple className="text-white text-2xl"/>,
            title: "1. Fund an Issue",
            description: "Post a new GitHub issue or contribute funding to an existing one."
        },
        {
            icon: <FaCodeBranch className="text-white text-xl"/>,
            title: "2. Track Progress",
            description: "Stay updated as developers claim bounties and submit pull requests."
        },
        {
            icon: <FaBoltLightning className="text-white text-xl"/>,
            title: "3. Support and Conclude",
            description: "Contribute to open-source development. Funds are released upon resolution."
        }
    ];


    const contributorSteps = [
        {
            icon: <FaHandshakeSimple className="text-white text-2xl"/>,
            title: "1. Browse Bounties",
            description: "Browse funded issues and choose tasks aligned with your expertise."
        },
        {
            icon: <FaCodeBranch className="text-white text-xl"/>,
            title: "2. Submit Solutions",
            description: "Complete the task and submit a high-quality pull request."
        },
        {
            icon: <FaBoltLightning className="text-white text-xl"/>,
            title: "3. Get Paid",
            description: "Receive crypto payments directly to your wallet after approval."
        }
    ];

    const currentSteps = isBackerView ? backerSteps : contributorSteps;

    return (
        <section className="flex flex-col w-full items-center bg-[url('/ooorganiz.svg')] bg-repeat py-16 px-8 sm:px-16 lg:px-32">
            <div className="inline-block bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full shadow-sm mb-4">
                <span className="flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <span className="text-sm">Discover How it Works</span>
                </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-2">
                How BountyBolt Works
            </h2>
            <p className="text-gray-400 mt-2 text-base sm:text-lg px-4 sm:px-12 lg:px-24 text-center">
                {isBackerView
                    ? 'Easily create, manage, and fund development tasks in the Web3 ecosystem.'
                    : 'Find and complete bounties to earn crypto rewards for your development skills.'}
            </p>

            {/* Toggle Switch */}
            <div className="flex justify-center my-8">
                <div className="bg-gray-800 rounded-full p-1 flex items-center space-x-2">
                    <button
                        onClick={() => setIsBackerView(true)}
                        className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                            isBackerView
                                ? 'bg-[#248F6D] text-white'
                                : 'bg-transparent text-gray-400 hover:bg-gray-700'
                        }`}
                    >
                        For Backers
                    </button>
                    <button
                        onClick={() => setIsBackerView(false)}
                        className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                            !isBackerView
                                ? 'bg-[#248F6D] text-white'
                                : 'bg-transparent text-gray-400 hover:bg-gray-700'
                        }`}
                    >
                        For Contributors
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-around w-full mt-8 space-y-8 lg:space-y-0">
                {currentSteps.map((step, index) => (
                    <div key={index} className="rounded-lg text-center max-w-xs mx-auto shadow-lg relative">
                        <div className="relative inline-block mb-6">
                            <div className="absolute w-14 h-14 bg-[#194d40] rounded-md -top-2 -left-2 z-0 shadow-md"></div>
                            <div className="w-14 h-14 bg-gradient-to-br from-[#248F6D] to-[#1a6e53] rounded-md flex items-center justify-center shadow-lg z-10 relative">
                                {step.icon}
                            </div>
                        </div>
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
