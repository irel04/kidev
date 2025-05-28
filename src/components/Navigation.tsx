'use client'

import { Navigations, ThemeContext } from "@/components/ThemeProvider"
import { BrainCog, FolderCode, Home, Phone, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

export const sections = [
	{ label: "Home", link: "#home", icon: Home },
	{ label: "About Me", link: "#about-me", icon: User },
	{ label: "Services", link: "#services", icon: BrainCog },
	{ label: "Projects", link: "#projects", icon: FolderCode },
	{ label: "Contact", link: "#contact", icon: Phone }
]

const Navigation = () => {
	const { theme, activeLink, setActiveLink } = useContext(ThemeContext)

	 const logoSrc = theme === 'light' ? '/logo-light.png' : '/logo.png';



	return (
		<nav id="navigation" className="relative md:fixed bottom-0 md:bottom-auto md:top-0 left-0  w-full  z-10 bg-background justify-center shadow-md">
			{/* Wrapper */}
			<div className="flex px-6 py-4 lg:py-8 lg:px-10 2xl:py-12 2xl:px-14  justify-between items-center w-full max-w-[1222px] ">
				<div className="hidden md:block relative w-20 h-8">
					<Link href="/">
						<Image
							src={logoSrc}
							alt="kidev logo"
							fill
							sizes="(max-width: 40px) 100vw, (max-width: 60px) 50vw, 33vw"
							className="object-contain cursor-pointer"
						/>
					</Link>
				</div>
				<ul className="flex items-center gap-4 text-sm lg:text-base flex-1 justify-between md:flex-none">
					{sections.map((section) => (
						<li key={section.label} className={`${activeLink === section.label ? 'text-brand-500' : ''}`}>
							<Link
								href={section.link}
								onClick={() => setActiveLink(section.label as Navigations)}
							>
								<p className="hidden md:block">{section.label}</p>
								<section.icon className="md:hidden" />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
