import Head from "next/head";
import { Card } from "../Components/card";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Header /> */}
			<main className="flex flex-col items-center w-full flex-1 text-center">
				<Card />
			</main>

			<Footer />
		</div>
	);
}
