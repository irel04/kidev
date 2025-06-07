'use client';

import { sections } from "@/components/Navigation";
import { Navigations, ThemeContext } from "@/components/ThemeProvider";
import Link from "next/link";
import { useContext } from "react";


export default function Stepper() {

	const { activeLink, setActiveLink } = useContext(ThemeContext)

	return (

		<div className="hidden fixed right-2 md:right-8 lg:right-20 xl:right-30 2xl:right-100 top-1/4 md:flex flex-col h-96 2xl:h-[600px] px-2 justify-between">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-secondary-500"></div>
			
			{sections.map((section, index) => (
				<Link href={section.link} key={index} onClick={() => setActiveLink(section.label as Navigations)}>
					<div className={`relative z-10 w-3 h-3 ${ activeLink!==section.label ? "border-brand-500 border-2 bg-background" : "bg-brand-500"} rounded-full flex itemx-center justify-center`}>
						{activeLink === section.label && <div className=" animate-ping h-3 w-3 bg-brand-400 rounded-full" />}

					</div>
				</Link>
			)) }
			
		</div>

	)
}