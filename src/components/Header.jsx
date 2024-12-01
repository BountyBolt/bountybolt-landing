import Image from "next/image";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="flex items-center justify-center py-4 px-6">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <Image
                        src="/bountyboltwritten.png"
                        alt="BountyBolt Logo"
                        className="object-contain"
                        height={48}
                        width={192}
                    />
                </a>
            </div>
        </header>
    )
}
