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
				mo{" "}
				<div className="flex flex-col w-full bg-gray-100">
					<h1 className="text-6xl font-serif">profile</h1>
					<div className="bg-gray-300 pt-16 w-4/5">
						<div className=" bg-red-100 float-left">
							<p>2002.05.09</p>
							<p>Yokohama,Japan</p>
							<p>Naoki Hayashda</p>
						</div>
					</div>
				</div>
				<h1>Skill Set</h1>
				<p>HTML</p>
				<p>CSS</p>
				<p>Javascript</p>
				<p>Reat</p>
				<p>Next.js</p>
				<p>Tailwind CSS</p>
			</main>

			<Footer />
		</div>
	);
}
