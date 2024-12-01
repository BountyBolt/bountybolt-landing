import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BountyBolt",
  description: "Join BountyBolt, the decentralized platform for Web3 innovators to fund issues, solve problems, and grow open-source with crypto payments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
