import Head from "next/head";
import { Header } from "../Components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</div>
	);
}
