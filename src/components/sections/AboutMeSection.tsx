'use client'

import PaginationDots from "@/components/PaginationDots";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Download } from "lucide-react";
import { forwardRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";




const aboutParagraphs = [
  "I'm a passionate Software Developer with experience building scalable and maintainable web applications. My journey started in 2021 with Python, which laid a strong foundation in logic and problem-solving.",
  "I specialize in React.js and Tailwind CSS, and I often use UI libraries like DaisyUI, Material UI, SHADCN, and Tailwind UI. My design-to-code process is supported by my Figma proficiency, using components, auto-layouts, and prototyping.",
  "While front-end is my strength, I've also worked on backend projects using Express, NestJS, Slim PHP, and Spring Boot, along with databases like PostgreSQL, MySQL, MongoDB, and Firebase.",
  "I'm familiar with Docker, Kubernetes, and Supabase, and I enjoy exploring tools across the full stack to continuously grow as a developer."
];


const AboutMeSection = forwardRef<HTMLElement>((__, ref) => {

	const handleDownload = () => {
		// URL to your static file in the public folder
		const fileUrl = '/RESUME-BACOLOD.pdf';

		// Create a temporary link and trigger download
		const link = document.createElement('a');
		link.href = fileUrl;
		link.setAttribute('download', 'RESUME-BACOLOD.pdf'); // filename for download
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	const [api, setApi] = useState<CarouselApi>()

	const [numberOfSlides, setNumberOfSlides] = useState<number>(1);

	const [current, setCurrent] = useState<number>(0)


	useEffect(() => {
		if(!api){
			return
		}

		setNumberOfSlides(api.slideNodes().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("scroll", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
		
	}, [api])


	return (
		<section ref={ref} id="about-me" className="h-full p-8 md:pl-12 lg:pl-20 relative flex flex-col gap-8 lg:gap-12 md:pb-12" data-section>
			{/* Heading */}
			<div>
				<p className="text-base lg:text-lg">About Me</p>
				<p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold">Get <span className="text-brand-500">To Know Me</span></p>
			</div>
			{/* Description */}
			{/* This only shows in larger screens */}
			<div className="hidden md:block text-sm lg:text-base max-w-80 md:max-w-[600px] lg:max-w-[800px] space-y-2 md:space-y-4 lg:space-y-6  2xl:text-2xl ">
				{aboutParagraphs.map((about, index) => (
					<p key={`l-about-${index}`}>{about}</p>
				))}
			</div>
			{/* Mobile only */}
			<div className="flex-1 text-base max-w-72 mx-auto space-y-2 md:hidden flex flex-col justify-center gap-2">
				<Carousel setApi={setApi} plugins={[
					Autoplay({
						delay: 5000,
						stopOnInteraction: false,
						stopOnFocusIn: true,
						stopOnMouseEnter: true
					})
				]}  className="bg-brand-500/50  p-8 rounded-md dark:bg-secondary-900/50 text-white">
					<CarouselContent >
						{aboutParagraphs.map((about, index) => (
							<CarouselItem key={`about-${index}`}><p>{about}</p></CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<PaginationDots pageTotal={numberOfSlides} activePage={current}/>
			</div>

			<Button className="w-max" onClick={handleDownload}>
				Download Resume
				<Download size={16}/>
			</Button>
		</section>
	)
})

AboutMeSection.displayName = "AboutMeSection";
export default AboutMeSection;