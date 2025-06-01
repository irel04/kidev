'use client'

import Filter from "@/components/Filter";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardStack } from "@/components/ui/card-stack";

import data from "@/data.json";
import { useState } from "react";


const filterLabels = ["Front-end", "Back-end", "UI/UX", "Mobile", "Repositories"]

export default function ProjectsSection() {

	const [active, setActive] = useState<string>("all")

	const handleClickFilter = (value: string) => {
		setActive(value)
	}


	return (
		<section id="projects" className="h-full md:h-max p-8 md:pl-12 lg:pl-20 relative flex flex-col gap-8 lg:gap-12  " data-section>
			{/* Heading */}
			<div>
				<p className="text-base lg:text-lg">Projects</p>
				<p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold"><span className="text-brand-500">Highlights</span> of My Work</p>
			</div>
			{/* Mobile Card Stack */}
			<div className="flex-1 flex justify-center  items-center md:hidden">
				<CardStack items={data.projects.slice(0,3)} offset={4} />
			</div>
			{/* Web View */}
			<div className="hidden md:flex flex-col max-w-[600px] lg:max-w-[900px] h-full gap-6 items-center">
				<Filter filterLabels={filterLabels} active={active} handleClick={handleClickFilter}/>
				<HoverEffect items={data.projects}/>
			</div>
		</section>
	)
}