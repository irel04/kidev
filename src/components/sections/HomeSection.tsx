'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function HomeSection() {
	return (
		<section id="home" className="h-full flex flex-col justify-center items-center  ">
			<div className="relative w-24 lg:w-28 aspect-square bg-brand-500 rounded-full">
				<Image src="/my_avatar.svg" alt="Description" fill className="relative object-cover rounded-full" />
			</div>	
			{/* Description */}
			<div className="flex flex-col items-center mt-8 gap-4 text-center max-w-56 md:max-w-[600px]  2xl:max-w-[1000px]">
				<p className="text-3xl font-medium md:text-4xl lg:text-5xl 2xl:text-7xl">Hello, I am <span className="text-brand-400">Irel Kian</span></p>
				<p className="text-sm md:text-base lg:text-lg 2xl:text-xl">I am a full-stack developer based in the Philippines with expertise in building scalable, efficient, and user-friendly web and mobile applications.</p>
				<Button>
					Connect with me
					<ArrowRight size={16}/>
				</Button>
			</div>
		</section>
	)
}