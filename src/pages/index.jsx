import { RectangleStackIcon } from "@heroicons/react/24/solid"
import { Sessions } from "~/components/organisms"
import Cohorts from "./cohorts"

const Home = () => {
	return (
		<>
			<div className="flex flex-col gap-8 justify-start">
				<div className="flex flex-col gap-0.5">
					<h1 className="text-2xl leading-8 font-semibold">
						Welcome, !
					</h1>
					<p className="text-base leading-6 font-normal text-slate-500">
						Your dashboard is your go-to place to get started
					</p>
				</div>
				<div className="flex flex-col border border-neutral-300 dark:border-neutral-700 divide-y divide-neutral-300 dark:divide-neutral-700 shadow rounded-md">
					<div className="p-4 flex flex-col gap-0.5">
						<div className="flex gap-2">
							<RectangleStackIcon className="h-6 w-6 text-slate-500" />
							<h1 className="text-lg leading-6 font-medium">
								Upcoming
							</h1>
						</div>
						<p className="text-sm leading-5 font-normal text-slate-500">
							Your all enrolled courses are listed below click to
							get started
						</p>
					</div>
					<div className="@container/session p-4">
						<div className="gap-4 grid grid-flow-col @2xl:auto-cols-[minmax(calc(25%_-_16px),_1fr)] @md:auto-cols-[minmax(calc(33%_-_16px),_1fr)] @sm:auto-cols-[minmax(calc(50%_-_16px),_1fr)] auto-cols-max overflow-x-scroll scrollbar-hide">
							<Sessions />
						</div>
					</div>
				</div>
				<div className="flex flex-col border border-neutral-300 dark:border-neutral-700 divide-y divide-neutral-300 dark:divide-neutral-700 shadow rounded-md">
					<div className="p-4 flex flex-col gap-0.5">
						<div className="flex gap-2">
							<RectangleStackIcon className="h-6 w-6 text-slate-500" />
							<h1 className="text-lg leading-6 font-medium">
								Recents
							</h1>
						</div>
						<p className="text-sm leading-5 font-normal text-slate-500">
							Your all enrolled courses are listed below click to
							get started
						</p>
					</div>
					<div className="@container p-4">
						<div className="gap-4 grid grid-flow-col @2xl:auto-cols-[minmax(calc(25%_-_16px),_1fr)] @md:auto-cols-[minmax(calc(33%_-_16px),_1fr)] @sm:auto-cols-[minmax(calc(50%_-_16px),_1fr)] auto-cols-max overflow-x-scroll scrollbar-hide">
							<Sessions />
						</div>
					</div>
				</div>
				<Cohorts preview />
			</div>
		</>
	)
}

export default Home
