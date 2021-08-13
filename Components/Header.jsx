import Link from "next/link";
import Links from "next/link";

export function Header() {
	return (
		<header className="w-full flex flex-row bg-gray-100">
			<div className="font-black ">N's Blog</div>
			<ul className="flex flex-row ">
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
		</header>
	);
}
