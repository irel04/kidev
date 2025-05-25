'use client'

import Image from "next/image"
import Link from "next/link"

const Navigation = () => {
	return (
		<nav className="hidden md:flex max-w-[2560px] mx-auto w-full px-6 py-4 lg:py-8 lg:px-10 shadow-lg justify-between items-center">
			<div className="relative w-20 h-8">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="kidev logo"
						fill
						sizes="(max-width: 40px) 100vw, (max-width: 60px) 50vw, 33vw"
						className="object-contain cursor-pointer"
					/>
				</Link>
			</div>
			<ul className="flex items-center gap-4 text-sm lg:text-base">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="#about-me" scroll={true}>About Me</Link>
				</li>
				<li>
					<Link href="#services" scroll={true}>Services</Link>
				</li>
				<li>
					<Link href="#contact" scroll={true}>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
