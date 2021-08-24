import { Image, Box } from "@chakra-ui/react";

export function Profile() {
	return (
		<div className="flex flex-col pb-14">
			<h1 className="text-6xl font-black pb-8">ProFile</h1>
			<div className="flex flex-row items-center justify-center">
				<div className="w-[180px] h-[180px] flex justify-center items-center rounded-full bg-gray-200 shadow-md"></div>
				<div className=" text-2xl font-bold font-mono">
					<p>Hello!! </p>
					<p>Myname is Naoki.</p>
					<p>2002.05.09</p>
					<p>Yokohama.Japan</p>
				</div>
			</div>
		</div>
	);
}
