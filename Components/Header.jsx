import Link from "next/link";
import { FiTwitter, FiInstagram } from "react-icons/fi";

export function Header() {
	return (
		<div>
			<header className="m-0 p-0 fixed inset-x-0 flex justify-between w-full shadow bg-gray-300  ">
				<Link href="/">
					<a className="h-[60px] leading-[60px] text-brack font-bold text-[2em] no-underline cursor-pointer pl-[20px]  ">
						Logo
					</a>
				</Link>
				<div className=" absolute top-0 right-0 w-[60px] h-[60px] bg-purple-300 cursor-pointer flex justify-center items-center"></div>
				<div>
					<ui>
						<li>
							<Link href="/">
								<a>HOME</a>
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
						<li>
							<Link href="/acess">
								<a>Acess</a>
							</Link>
						</li>
					</ui>
				</div>
			</header>
		</div>

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
