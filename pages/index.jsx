import Head from "next/head";
import { About } from "../Components/About";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Profile } from "../Components/Profile";
import { Skill } from "../Components/skill";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen font-serif box-border">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-col items-center w-full flex-1 text-center pt-10">
				<Profile />
				<About />
				<Skill />
			</main>

			<Footer />
		</div>
	);
}
