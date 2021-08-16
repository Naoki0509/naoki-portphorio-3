import Link from "next/link";

export function Header() {
	return (
		<header className="w-full bg-gray-100">
			<nav className="flex justify-center">
				<div className="pl-3 font-serif text-4xl font-black">N's Blog</div>
				<ul className="flex flex-row font-serif text-3xl">
					<li className="px-8">
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className="px-8">
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li className="px-8">
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
