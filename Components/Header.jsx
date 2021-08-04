import Link from "next/link";
import Links from "next/link";

export function Header() {
	return (
		<header className="w-full bg-gray-200">
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</li>
			</ul>
		</header>
	);
}
