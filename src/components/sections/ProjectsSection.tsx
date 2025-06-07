'use client'

import Filter from "@/components/Filter";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardStack } from "@/components/ui/card-stack";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import data from "@/data.json";
import { ChevronsLeftRightEllipsis, Drama } from "lucide-react";
import { useState } from "react";


const filterLabels = ["Front-end", "Back-end", "UI/UX", "Mobile", "Repositories"]

type Project = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  link: string;
  categories: string[];
};

const EmptyResult = () => {
	return <div className="min-h-72 w-full  flex items-center justify-center flex-col ">
		<Drama size={36} className="text-foreground"/>
		<p className="text-lg font-medium mt-4">Empty</p>
		<p className="text-sm mt-2">No result were found under this </p>
	</div>
}


export default function ProjectsSection() {

	const [active, setActive] = useState<string>("all")

	const [renderedProjects, setRenderedProjects] = useState<Project[]>(data.projects)

	const [visibleProjects, setVisibleProjects] = useState<number>(6)


	const handleClickFilter = (value: string) => {
		setActive(value)

		if(value === "all"){
			setRenderedProjects(data.projects)
			return
		}

		const filteredProjects = data.projects.filter(item => item.categories.includes(value))

		setRenderedProjects(filteredProjects)
	}

	const handleViewMore = () => {
		if(visibleProjects >= data.projects.length){
			setVisibleProjects(6)
			return
		}

		setVisibleProjects(curr => curr + 3)
	}


	return (
		<section id="projects" className="h-full md:h-max p-8 md:pl-12 lg:pl-20 relative flex flex-col gap-8 lg:gap-12" data-section>
			{/* Heading */}
			<div>
				<p className="text-base lg:text-lg">Projects</p>
				<p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold"><span className="text-brand-500">Works</span> I&apos;ve been Part of</p>
			</div>
			{/* Mobile Card Stack */}
			<Dialog>
				<div className="flex-1 flex justify-evenly items-center md:hidden flex-col">
					<CardStack items={renderedProjects.slice(0, 4)} offset={4} />
					{data.projects.length > 6 && <DialogTrigger asChild>
						<Button variant="outline">See More</Button></DialogTrigger>}
				</div>
				<DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-brand-500">All Projects</DialogTitle>
            <DialogDescription>
              These are the projects I&apos;ve been part of and work with
            </DialogDescription>
          </DialogHeader>
					<div className="overflow-x-auto">
						<Filter filterLabels={filterLabels} active={active} handleClick={handleClickFilter} />
					</div>
					<div className="mt-4 flex flex-col gap-2">
						{renderedProjects.length === 0 ? <EmptyResult key="empty-1"/> : renderedProjects.map((item, index) => (
							<a className="text-sm flex gap-2 items-center underline decoration-brand-400 " href={item.link} target="_blank" rel="noopener noreferrer" key={`m${item.id}-${index}`} >
								<ChevronsLeftRightEllipsis size={14} />
								<p className="font-medium">{item.name}</p>
							</a>
						))}
					</div>
          
        </DialogContent>
			</Dialog>
			{/* Web View */}
			<div className="hidden md:flex flex-col max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] gap-6 items-center">
				<Filter filterLabels={filterLabels} active={active} handleClick={handleClickFilter}/>
				
				{renderedProjects.length === 0 ? <EmptyResult/> : <HoverEffect items={renderedProjects.slice(0, visibleProjects)}/>}
				{renderedProjects.length > 6 && <Button variant="outline" onClick={handleViewMore}>{visibleProjects >= data.projects.length ? "See Less" : "See More"}</Button>}
			</div>
		</section>
	)
}