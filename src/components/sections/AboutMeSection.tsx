'use client'

import PaginationDots from "@/components/PaginationDots";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Download } from "lucide-react";
import { forwardRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { aboutMe } from "@/data.json"




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
				{aboutMe.map((about, index) => (
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
				]}  className="bg-brand-900 p-8 rounded-md dark:bg-secondary-900/50 text-white">
					<CarouselContent >
						{aboutMe.map((about, index) => (
							<CarouselItem key={`about-${index}`}><p>{about}</p></CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<PaginationDots pageTotal={numberOfSlides} activePage={current}/>
			</div>

			<div className="w-full flex justify-center md:justify-start">
				<Button className="w-max" onClick={handleDownload}>
					Download Resume
					<Download size={16} />
				</Button>
			</div>
		</section>
	)
})

AboutMeSection.displayName = "AboutMeSection";
export default AboutMeSection;