"use client"

type TPaginationDots = {
	pageTotal: number,
	activePage: number,
}

const PaginationDots = ({ pageTotal, activePage }: TPaginationDots) => {

	return (
		<ul className="flex justify-center items-center gap-1">
			{Array.from({length: pageTotal}).map((__, index) => (
				<li key={`stepper-${index}`} className={`w-3 h-3 ${activePage === (index + 1) ? "bg-neutral-500" : "border-neutral-500 border bg-neutral-500/50"} rounded-full`}/>
			))}

		</ul>
	)
}

export default PaginationDots