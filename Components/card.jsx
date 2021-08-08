import { Box, Wrap } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Badge } from "@chakra-ui/layout";

const ITEMS = [
	{ taitle: "HTML", src: "/HTML.png", alt: "html" },
	{ taitle: "CSS", src: "/CSS.png", alt: "css" },
	{ taitle: "Javascript", src: "/JS.png", alt: "JavaScript" },
	{ taitle: "React", src: "/React.png", alt: "React" },
	{ taitle: "Next.js", src: "/Next.png", alt: "Next.js" },
	{ taitle: "Tailwind CSS", src: "/Taileind.png", alt: "TailwindCss" },
];
export function Card() {
	return (
		<div className="w-full bg-gray-300 ">
			{ITEMS.map((item) => {
				return (
					<Box
						maxW="100px"
						borderWidth="1px"
						borderRadius="lg"
						overflow="hidden"
					>
						<Image src={item.src} alt={item.alt} boxsize="80px" />
					</Box>
				);
			})}
		</div>
	);
}
