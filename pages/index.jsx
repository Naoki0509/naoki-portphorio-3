import Head from "next/head";
import { Card } from "../Components/card";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen font-serif">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-col items-center w-full flex-1 text-center pt-10">
				<div className="flex flex-col pb-14">
					<h1 className="text-6xl font-black">ProFile</h1>
					<div className="flex flex-row">
						<div className="pr-40">
							<p>Naoki Hayashida</p>
							<p>2002.05.09</p>
							<p>Yokohama.Japan</p>
						</div>
						<div className="w-64 h-32 flex justify-center items-center bg-gray-200">
							Image
						</div>
					</div>
				</div>
				<Card />
			</main>

			<Footer />
		</div>
	);
}
