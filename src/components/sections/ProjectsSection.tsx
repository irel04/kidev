'use client'

import { CardStack } from "@/components/ui/card-stack";
import Image from "next/image";


const CARDS = [
	{
		id: 0,
		name: "Buildhub PH | E-Commerce",
		designation: "ReactJS, NodeJS, MYSQL",
		content: (
			<Image
				src="/websites/buildhub.jpg"
				alt="web"
				fill
				className="object-cover"
			/>
		),
	},
	{
		id: 1,
		name: "Towfactory | Towing Service",
		designation: "ReactJS, NodeJS, MYSQL, Google Maps API",
		content: (
			<Image
				src="/websites/towfactory.jpg"
				alt="web"
				fill
				className="object-cover"
			/>
		),
	},
	{
		id: 2,
		name: "Aircamp | Listing Platform",
		designation: "ReactJS, TypeScipt, NodeJS, MYSQL, REST, Google MAPS API",
		content: (
			<Image
				src="/websites/aircamp.jpg"
				alt="web"
				fill
				className="object-cover"
			/>
		),
	},
	{
		id: 3,
		name: "Innovex | Social Health Platform",
		designation: "HTML, CSS, JS, NodeJS, MVC, MYSQL",
		content: (
			<Image
				src="/websites/innovex.jpg"
				alt="web"
				fill
				className="object-cover"
			/>
		),
	},
	{
		id: 4,
		name: "Laro | Online Service",
		designation: "ReactJS, NodeJS, MYSQL, Google Maps API",
		content: (
			<Image
				src="/websites/laro.jpg"
				alt="web"
				fill
				className="object-cover"
			/>
		),
	},
	{
		id: 5,
		name: "SK Website | Online Service",
		designation: "ReactJS, NodeJS, Supabase, MYSQL, SHADCN",
		content: (
			<Image
				src="/websites/sk-online.jfif"
				alt="web"
				fill
				className="object-cover"
			/>
		),
	}
];

export default function ProjectsSection() {

	

	return (
		<section id="projects" className="h-full p-8 md:pl-12 lg:pl-20 relative flex flex-col gap-8 lg:gap-12  " data-section>
			{/* Heading */}
			<div>
				<p className="text-base lg:text-lg">Projects</p>
				<p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold"><span className="text-brand-500">Highlights</span> of My Work</p>
			</div>
			{/* Mobile Card Stack */}
			<div className="flex-1 flex justify-center  items-center md:hidden">
				<CardStack items={CARDS} offset={4} />

			</div>
		</section>
	)
}