export function Profile() {
	return (
		<div className="flex flex-col pb-14">
			<h1 className="text-6xl font-black pb-8">ProFile</h1>
			<div className="flex flex-row items-center justify-center">
				<div className=" pr-20 te">
					<p>Naoki Hayashida</p>
					<p>2002.05.09</p>
					<p>Yokohama.Japan</p>
				</div>
				<div className="w-[250px] h-[150px] flex justify-center items-center rounded-lg bg-gray-200">
					Image
				</div>
			</div>
		</div>
	);
}
