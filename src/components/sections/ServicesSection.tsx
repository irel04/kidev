"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { LayoutDashboard, Route, ServerCog, Speech, TabletSmartphone, ToyBrick } from "lucide-react"
import React, { forwardRef } from "react"

type TSkillCard = {
	icon: React.ElementType;
	title: string,
	description: string
}

const SkillsCard = ({ icon: Icon, title, description }: TSkillCard) => {
	return (
		<div className={`text-sm flex flex-col gap-4 p-10 bg-secondary-900/50 rounded-sm `}>
			<Icon className="text-brand-500" size={36}/>
			<p className="font-bold">{title}</p>
			<p>{description}</p>
		</div>
	)
}

const ServicesSection = forwardRef<HTMLElement>((__, ref) => {

	const skillsData: TSkillCard[] = [
		{
			icon: ToyBrick,
			title: "API Integration",
			description: "Implemented API integrations on the front end using Axios, with efficient data fetching and caching handled by TanStack Query."
		},
		{
			icon: LayoutDashboard,
			title: "Front-end Development",
			description: "Worked as a Front-End Developer for 2 years, leveraging various libraries and tools within the React ecosystem."
		},
		{
			icon: ServerCog,
			title: "Back-end Development",
			description: "Developed and practiced RESTful APIs using Express, NestJS, and Spring Boot, with MySQL and PostgreSQL as database backends."
		},
		{
			icon: Speech,
			title: "Technical Leadership",
			description: "Led and guided development teams to successful. Proficient in Agile and Scrum methodologies."
		},
		{
			icon: TabletSmartphone,
			title: "Mobile Development",
			description: "Built mobile apps with React Native (Expo) and integrated Supabase as the backend service."
		},
		{
			icon: Route,
			title: "Google Maps  API",
			description: "Proficient in using Google Maps API Products like Maps, Routes, and Places"
		}
	]


	return (
		<section ref={ref} id="services" className="h-full p-8 md:pl-12 lg:pl-20 relative flex flex-col gap-8 lg:gap-12  " data-section>
			{/* Heading */}
			<div>
				<p className="text-base lg:text-lg">Services</p>
				<p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold">In <span className="text-brand-500">Capabale of</span></p>
			</div>
			{/* Description */}
			<div className="flex-1 flex justify-center md:hidden  items-center">
				<Carousel className="w-full max-w-56">
					<CarouselContent >
						{skillsData.map((skill, index) =>
							<CarouselItem key={index} >
								<SkillsCard icon={skill.icon} description={skill.description} title={skill.title} key={`carousel-${index}`}/>
							</CarouselItem>
						)}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				
				

			</div>

			<div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 max-w-[600px] lg:max-w-[900px]">
				{skillsData.map((skill, index) =>
					<SkillsCard icon={skill.icon} description={skill.description} title={skill.title} key={`grid-icons-${index}`}/>
				)}
			</div>

		</section>
	)
} )

ServicesSection.displayName = "ServicesSection"
export default ServicesSection