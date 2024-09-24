import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitronFont = Orbitron({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
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
			<body className={`${orbitronFont.className} antialiased`}>{children}</body>
		</html>
	);
}
