const ITEMS = [
	{ title: "HTML" },
	{ title: "CSS" },
	{ title: "Javascript" },
	{ title: "Using Next.js, React.js" },
	{ title: "Tailwind CSS" },
];

export function Skill() {
	return (
		<div className="flex flex-col justify-center items-center pt-8">
			<div>
				<h1 className="text-6xl font-bold">Skill</h1>
			</div>
			<div className="flex justify-center items-center sm:w-full">
				<div className="flex flex-col">
					<div className="grid grid-cols-2 gap-x-12 gap-y-4">
						{ITEMS.map((item) => {
							return <div className="text-4xl p-6 border">{item.title}</div>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
