import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-col items-center w-full flex-1 text-center">
				<div className="flex flex-col justify-center w-full h-80 bg-gray-200">
					<h1 className="text-6xl font-serif">Profile</h1>
					<p>2002.05.09</p>
					<p>Yokohama,Japan</p>
					<p>Naoki Hayashda</p>
				</div>
				<div>
					<h1>Skill Set</h1>
					<p>HTML</p>
					<p>CSS</p>
					<p>Javascript</p>
					<p>Reat</p>
					<p>Next.js</p>
					<p>Tailwind CSS</p>
				</div>
			</main>

			<Footer />
		</div>
	);
}
