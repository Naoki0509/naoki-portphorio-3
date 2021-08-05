import { Box } from "@chakra-ui/layout";

const ITEMS = [
	{ taitle: "HTML", src: "/HTML.png", alt: "html" },
	{ taitle: "CSS", src: "/CSS.png", alt: "css" },
	{ taitle: "Javascript", src: "/JS.png", alt: "JavaScript" },
	{ taitle: "Reat", src: "/React.png", alt: "React" },
	{ taitle: "Next.js", src: "/Next.png", alt: "Next.js" },
	{ taitle: "Tailwind CSS", src: "/Taileind.png", alt: "TailwindCss" },
];
export function Card() {
	return (
		<div className="w-full bg-gray-300 ">
			<Box />

			{/* <h1 className="text-5xl font-serif font-bold">Skill Set</h1>
			<p>HTML</p>
			<p>CSS</p>
			<p>Javascript</p>
			<p>Reat</p>
			<p>Next.js</p>
			<p>Tailwind CSS</p> */}
		</div>
	);
}
