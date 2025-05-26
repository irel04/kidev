'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function HomeSection() {
	return (
		<section className="flex-1 flex flex-col justify-center items-center border-secondary-500 border-2 p-4">
			<div className="relative w-24 md:w-28 lg:w-40 2xl:w-64 aspect-square bg-brand-500 rounded-full">
				<Image src="/my_avatar.svg" alt="Description" fill className="relative object-cover rounded-full" />
			</div>
			{/* Description */}
			<div className="flex flex-col items-center mt-8 gap-4">
				<p className="text-3xl font-medium md:text-4xl lg:text-5xl">Hello, I am <span className="text-brand-400">Irel Kian</span></p>
				<p className="text-sm text-center md:text-base lg:text-lg">I am a full-stack developer based in the Philippines with expertise in building scalable, efficient, and user-friendly web and mobile applications.</p>
				<Button>
					Connect with me
					<ArrowRight size={16}/>
				</Button>
			</div>
		</section>
	)
}