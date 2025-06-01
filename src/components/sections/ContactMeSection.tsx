import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function ContactMeSection() {
	return (
		<section id="contact" className="h-full  p-8 md:pl-12 lg:pl-20 relative flex flex-col gap-8 lg:gap-12" data-section>
			{/* Heading */}
			<div>
				<p className="text-base lg:text-lg">Contact Me</p>
				<p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold"> Get in <span className="text-brand-500">Touch</span></p>
			</div>
			<div className="md:max-w-[600px]">
				{/* Components for text wrapper */}
				<div className="w-max-[425px] space-y-5">
					<Input placeholder="Email"/>
					<Textarea placeholder="Write a message" className="min-h-64"/>
					<Button variant="primary">
						Send Message 
						<Mail size={16}/>
					</Button>
				</div>

				<div className="mt-10 text-xs md:text-sm text-neutral-500/[0.5] dark:text-neutral-300/[0.5]">
					<p>Phone Number: +63 9327893355</p>
					<p>Outlook: kianirel56@gmail.com</p>
				</div>
				
			</div>
		</section>
	)
}