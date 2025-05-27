'use client'

import { forwardRef } from "react";

const AboutMeSection = forwardRef<HTMLElement>((__, ref) => {
	return (
		<section ref={ref} id="about-me" className="h-full" data-section>
			About Me Section
		</section>
	)
})

AboutMeSection.displayName = "AboutMeSection";
export default AboutMeSection;