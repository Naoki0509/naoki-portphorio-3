import Image from "next/image";

const ITEMS = [
	{ taitle: "HTML", src: "/HTML.png", alt: "html" },
	{ taitle: "CSS", src: "/CSS.png", alt: "css" },
	{ taitle: "Javascript", src: "/JS.png", alt: "JavaScript" },
	{ taitle: "React", src: "/React.png", alt: "React" },
	{ taitle: "Next.js", src: "/Next.png", alt: "Next.js" },
	{ taitle: "Tailwind CSS", src: "/Taileind.png", alt: "TailwindCss" },
];
export function TestCard() {
	return (
		<div className=" w-full flex flex-row flex-wrap bg-gray-100">
			{ITEMS.map((item) => {
				return (
					<div className="px-6">
						<div className="flex justify-center h-64 w-52 border border-black">
							<div className="w-32 h-32 bg-gray-300"></div>
						</div>
					</div>
				);
			})}
		</div>
	);
}