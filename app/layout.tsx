import { GeistSans } from "geist/font/sans";
import Sidebar from "../components/Sidebar.jsx";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Next.js and Supabase Starter Kit",
	description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body>
				<div className="drawer lg:drawer-open">
					<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content flex flex-col">
						{/* Navbar */}
						<div className="w-full navbar bg-base-300">
							<div className="flex-none lg:hidden">
								<label
									htmlFor="my-drawer-2"
									aria-label="open sidebar"
									className="btn btn-square btn-ghost"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block w-6 h-6 stroke-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</label>
							</div>
							<div className="flex-1 px-2 mx-2">Navbar Title</div>
							<div className="flex-none hidden lg:block">
								<ul className="menu menu-horizontal">
									{/* Navbar menu content here */}
									<li>
										<a>Navbar Item 1</a>
									</li>
									<li>
										<a>Navbar Item 2</a>
									</li>
								</ul>
							</div>
						</div>
						{children}
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-2"
							aria-label="close sidebar"
							className="drawer-overlay"
						/>
						<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
							{/* Sidebar content here */}
							<li>
								<a>Sidebar Item 1</a>
							</li>
							<li>
								<a>Sidebar Item 2</a>
							</li>
						</ul>
					</div>
				</div>
			</body>
		</html>
	);
}
