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
				<h1>profile</h1>
				<p>Naoki Hayashda</p>
				<p>2002.05.09</p>
				<p>Yokohama,Japan</p>

				<p>横浜在住の１９歳フリーランスエンジニアです。</p>
				<p>
					中学校２年生から３年生にかけて不登校を経験し、そこから自分のやりたいことは何かを考え、フリーランスエンジニアという道を選びました。
				</p>

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
