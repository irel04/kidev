"use client"

import { Button } from "@/components/ui/button"

type TFilter = {
	filterLabels: string[];
	active: string,
	handleClick: (value: string) => void
}

export default function Filter({ filterLabels, active, handleClick }: TFilter) {
	return (
		// For web view only version 
		<div className=" flex items-center overflow-x-auto gap-4 lg:gap-8 w-max">
			<Button variant={active === "all" ? "primary" : "outline"} onClick={() => handleClick("all")}>All</Button>
			{filterLabels.map((label, index) => <Button variant={label.toLowerCase() === active ? "primary" : "outline"} key={label + "-" + index} onClick={() => handleClick(label.toLowerCase())}>
				{label}
			</Button>)}
		</div>
	)
}