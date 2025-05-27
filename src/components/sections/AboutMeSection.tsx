'use client'

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { forwardRef } from "react";

const AboutMeSection = forwardRef<HTMLElement>((__, ref) => {
	return (
		<section ref={ref} id="about-me" className="h-full p-8  md:pt-4 md:pl-12 lg:pl-20 relative flex flex-col gap-4 md:block md:space-y-8 lg:space-y-12" data-section>
			{/* Heading */}
			<div>
				<p className="text-sm lg:text-lg">About Me</p>
				<p className="mt-2 text-lg md:text-xl lg:text-2xl font-bold">Get <span className="text-brand-500">To Know Me</span></p>
			</div>
			{/* Description */}
			<div className="text-xs md:text-sm max-w-80 md:max-w-[600px] lg:max-w-[800px] space-y-2 md:space-y-4 lg:space-y-6  2xl:text-2xl flex-1 md:flex-none ">
				<p>I&apos;m a passionate Software eveloper with experience building scalable and maintainable web applications. My journey started in 2021 with Python, which laid a strong foundation in logic and problem-solving.</p>
				<p>I specialize in React.js and Tailwind CSS, and I often use UI libraries like DaisyUI, Material UI, SHADCN, and Tailwind UI. My design-to-code process is supported by my Figma proficiency, using components, auto-layouts, and prototyping.</p>
				<p>While front-end is my strength, I&apos;ve also worked on backend projects using Express, NestJS, Slim PHP, and Spring Boot, along with databases like PostgreSQL, MySQL, MongoDB, and Firebase.</p>
				<p>Im familiar with Docker, Kubernetes, and Supabase, and I enjoy exploring tools across the full stack to continuously grow as a developer.</p>
			</div>

			<Button >
				Download Resume
				<Download size={16}/>
			</Button>
		</section>
	)
})

AboutMeSection.displayName = "AboutMeSection";
export default AboutMeSection;