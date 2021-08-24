import Link from "next/link";
import { FiTwitter, FiInstagram } from "react-icons/fi";

export function Header() {
	return (
		<header className=" items-center justify-between">
			<nav>
				<div>
					<ui className="flex flex-row list-none text-2xl">
						<li className="px-3">
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li className="px-3">
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li className="px-3">
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						<li className="px-3">
							<Link href="/blog">
								<a>Access</a>
							</Link>
						</li>
					</ui>
				</div>
			</nav>
		</header>

		// <nav className="w-full h-16 flex flex-row justify-between  bg-gray-100">
		// 	<div className="flex justify-center items-center">
		// 		<div className="text-3xl font-serif font-bold pl-3">N's Blog</div>
		// 	</div>
		// 	<div className="flex justify-center items-center">
		// 		<ui className="flex flex-row list-none text-3xl">
		// 			<li className="px-3">
		// 				<Link href="/">
		// 					<a>Home</a>
		// 				</Link>
		// 			</li>
		// 			<li className="px-3">
		// 				<Link href="/about">
		// 					<a>About</a>
		// 				</Link>
		// 			</li>
		// 			<li className="px-3">
		// 				<Link href="/blog">
		// 					<a>Blog</a>
		// 				</Link>
		// 			</li>
		// 			<li className="px-3">
		// 				<Link href="/blog">
		// 					<a>Access</a>
		// 				</Link>
		// 			</li>
		// 		</ui>
		// 	</div>
		// 	<div className="flex flex-row justify-center items-center">
		// 		<FiTwitter className="text-7xl px-6" />
		// 		<FiInstagram className="text-7xl px-6" />
		// 	</div>
		// </nav>
	);
}
