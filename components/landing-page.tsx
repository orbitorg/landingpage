"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Zap, Code, Server } from "lucide-react";
import Image from "next/image";
import Logo from "./logo.jpg";

export function LandingPageComponent() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
			<header className="container mx-auto px-4 py-6 flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<Image src={Logo} alt="Blockchain Universe" className="rounded-lg w-10 h-10" />
					<span className="text-2xl font-bold">Orbits Lab</span>
				</div>
				<nav className="hidden md:flex space-x-4">
					<a href="#about" className="hover:text-blue-400 transition">
						About
					</a>
					<a href="#services" className="hover:text-blue-400 transition">
						Services
					</a>
					<a href="#team" className="hover:text-blue-400 transition">
						Team
					</a>
					<a href="#contact" className="hover:text-blue-400 transition">
						Contact
					</a>
				</nav>
				<Button className="md:hidden">Menu</Button>
			</header>

			<main>
				<section className="container mx-auto px-4 py-20 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Navigating the Blockchain Universe
					</h1>
					<p className="text-xl md:text-2xl mb-8">
						Expert solutions for Cosmos, Ethereum, and Solana ecosystems
					</p>
					<Button
						className="text-lg px-6 py-3"
						onClick={() => {
							window.location.href = "#services";
						}}
					>
						Explore Our Services
					</Button>
				</section>

				<section id="about" className="container mx-auto px-4 py-20">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						About Orbits Lab
					</h2>
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<p className="text-lg mb-4">
								Orbits Lab is a cutting-edge blockchain development team
								specializing in Cosmos, Ethereum, and Solana ecosystems. With our
								diverse expertise, we offer comprehensive solutions for both
								on-chain and cross-chain decentralized applications.
							</p>
							<p className="text-lg">
								Our mission is to propel blockchain technology forward, helping
								clients navigate the complex world of decentralized systems with
								innovative and reliable solutions.
							</p>
						</div>
						<div className="relative h-64 md:h-full">
							<Image
								src="/placeholder.svg?height=400&width=400"
								alt="Blockchain Universe"
								layout="fill"
								objectFit="contain"
								className="rounded-lg"
							/>
						</div>
					</div>
				</section>

				<section id="services" className="container mx-auto px-4 py-20">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Our Services
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="bg-gray-800 border-blue-500">
							<CardContent className="p-6">
								<Globe className="h-12 w-12 mb-4 text-blue-400" />
								<h3 className="text-xl font-bold mb-2">Cosmos Ecosystem</h3>
								<ul className="list-disc list-inside">
									<li>Validator node operation</li>
									<li>Chain upgrades and integrations</li>
									<li>Fee abstraction implementation</li>
								</ul>
							</CardContent>
						</Card>
						<Card className="bg-gray-800 border-blue-500">
							<CardContent className="p-6">
								<Zap className="h-12 w-12 mb-4 text-blue-400" />
								<h3 className="text-xl font-bold mb-2">Ethereum & Solana</h3>
								<ul className="list-disc list-inside">
									<li>Smart contract development</li>
									<li>DApp creation and optimization</li>
									<li>Backend service integration</li>
								</ul>
							</CardContent>
						</Card>
						<Card className="bg-gray-800 border-blue-500">
							<CardContent className="p-6">
								<Code className="h-12 w-12 mb-4 text-blue-400" />
								<h3 className="text-xl font-bold mb-2">Cross-Chain Solutions</h3>
								<ul className="list-disc list-inside">
									<li>Interoperability protocols</li>
									<li>Cross-chain asset transfers</li>
									<li>Multi-chain DApp development</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				<section
					id="showcase"
					className="container mx-auto px-4 py-20 bg-gray-800 rounded-lg"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Our Showcase
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{["Cosmos", "Osmosis", "Whitewhale", "Aura Network", "DeFi", "Meme"].map(
							(item, index) => (
								<div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
									<span className="text-lg font-semibold">{item}</span>
								</div>
							)
						)}
					</div>
				</section>

				<section id="team" className="container mx-auto px-4 py-20">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Team</h2>
					<div className="grid md:grid-cols-4 gap-8">
						{[
							{ role: "Solution Architect", icon: Server },
							{ role: "Backend Engineer", icon: Server },
							{ role: "Smart Contract Engineer", icon: Code },
							{ role: "Frontend Engineer", icon: Code },
						].map((member, index) => (
							<Card key={index} className="bg-gray-800 border-blue-500">
								<CardContent className="p-6 text-center">
									<member.icon className="h-16 w-16 mx-auto mb-4 text-blue-400" />
									<h3 className="text-xl font-bold mb-2">{member.role}</h3>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section id="why-choose-us" className="container mx-auto px-4 py-20">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Why Choose Orbits Lab?
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<Card className="bg-gray-800 border-blue-500">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-4">
									Expertise Across Ecosystems
								</h3>
								<p>
									Our team's diverse experience in Cosmos, Ethereum, and Solana
									allows us to provide comprehensive solutions tailored to your
									specific needs.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-gray-800 border-blue-500">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-4">End-to-End Development</h3>
								<p>
									From smart contracts to user interfaces, we handle every aspect
									of your blockchain project with precision and care.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-gray-800 border-blue-500">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-4">Cutting-Edge Solutions</h3>
								<p>
									We stay at the forefront of blockchain technology, implementing
									the latest advancements to give your project a competitive edge.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-gray-800 border-blue-500">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-4">Reliable Partnership</h3>
								<p>
									Our commitment to your success extends beyond development. We
									provide ongoing support and maintenance to ensure your project
									thrives.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				<section id="contact" className="container mx-auto px-4 py-20">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Ready to Launch Your Blockchain Journey?
					</h2>
					<div className="max-w-md mx-auto">
						<Button variant="outline" className="w-full text-lg py-6">
							Contact Us Today
						</Button>
					</div>
				</section>
			</main>

			<footer className="bg-gray-800 py-8">
				<div className="container mx-auto px-4 text-center">
					<p>&copy; 2023 Orbits Lab. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
