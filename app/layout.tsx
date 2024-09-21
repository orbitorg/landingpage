import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	title: "OrbitLabs",
	description: "Expert solutions for Cosmos, Ethereum, and Solana ecosystems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<head>
				<meta
					name="description"
					content="OrbitLabs is a cutting-edge blockchain development team specializing in Cosmos, Ethereum, and Solana ecosystems. With our diverse expertise, we offer comprehensive solutions for both on-chain and cross-chain decentralized applications."
				/>
				<meta name="title" content="OrbitLabs - Expert Blockchain Team" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
  );
}
