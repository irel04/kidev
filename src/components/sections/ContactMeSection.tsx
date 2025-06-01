'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser"

export default function ContactMeSection() {

	const [email, setEmail] = useState<string>("")
	const [textMessage, setTextMessage] = useState<string>("")

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const payload = {
			email,
			message: textMessage
		}

		
		emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, payload, {
			publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!
		}).then(() => {
			toast.success("Email sent successfully. Thank you for reaching out!")
			
			setEmail("")
			setTextMessage("")
		}, 
		(error) => {
			toast.error("Something went wrong")
			console.error(error);
		})

		
	}

	return (
		<section id="contact" className="h-full  p-8 md:pl-12 lg:pl-20 relative flex flex-col gap-8 lg:gap-12" data-section>
			{/* Heading */}
			<div>
				<p className="text-base lg:text-lg">Contact Me</p>
				<p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold"> Get in <span className="text-brand-500">Touch</span></p>
			</div>
			<div className="md:max-w-[600px]">
				{/* Components for text wrapper */}
				<form className="w-max-[425px] space-y-5" onSubmit={handleSubmit}>
					<Input placeholder="Email" required type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
					<Textarea placeholder="Write a message" className="min-h-64" onChange={(e) => setTextMessage(e.target.value)} required value={textMessage}/>
					<Button variant="primary" type="submit">
						Send Message 
						<Mail size={16}/>
					</Button>
				</form>

				<div className="mt-10 text-xs md:text-sm text-neutral-500/[0.5] dark:text-neutral-300/[0.5]">
					<p>Phone Number: +63 9327893355</p>
					<p>Outlook: kianirel56@gmail.com</p>
				</div>
				
			</div>
		</section>
	)
}