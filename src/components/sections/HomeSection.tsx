'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { forwardRef } from "react";
import { home } from "@/data.json"


const HomeSection = forwardRef<HTMLElement>((__,ref) => {
	return (
		<section data-section ref={ref} id="home" className="h-full flex flex-col justify-center items-center  ">
			<div className="relative w-24 lg:w-28 aspect-square bg-brand-500 rounded-full">
				<Image src="/my_avatar.svg" alt="Description" fill className="relative object-cover rounded-full" />
			</div>	
			{/* Description */}
			<div className="flex flex-col items-center mt-8 gap-4 text-center max-w-56 md:max-w-[600px]  2xl:max-w-[1000px]">
				<p className="text-3xl font-medium md:text-4xl lg:text-5xl 2xl:text-7xl">{home.greetings} <span className="text-brand-400">{home.name}</span></p>
				<p className="text-sm md:text-base lg:text-lg 2xl:text-xl">{home.description}</p>
				<Button onClick={() => window.open(home.linkedin)}>
					Connect with me
					<ArrowRight size={16}/>
				</Button>
			</div>
		</section>
	)
})

HomeSection.displayName = "HomeSection"

export default HomeSection;