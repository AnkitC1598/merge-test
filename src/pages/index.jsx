import { Sessions } from "~/components/organisms"
import { useStore } from "~/store"
import Cohorts from "./cohorts"

const Home = () => {
	const user = useStore(store => store.user)

	return (
		<>
			<div className="flex flex-col gap-8 justify-start">
				<div className="flex flex-col gap-0.5">
					<h1 className="text-2xl leading-8 font-semibold">
						Welcome, {user?.fullname}!
					</h1>
					<p className="text-base leading-6 font-normal text-slate-500">
						Your dashboard is your go-to place to get started
					</p>
				</div>
				<div className="flex flex-col rounded-md">
					<p className="p-4 pb-0 text-sm leading-5 font-normal">
						Upcoming
					</p>
					<div className="@container/session p-4">
						<div className="gap-4 grid grid-flow-col @5xl:auto-cols-[minmax(calc(20%_-_32px),_1fr)] @4xl:auto-cols-[minmax(calc(25%_-_32px),_1fr)] @xl:auto-cols-[minmax(calc(33%_-_32px),_1fr)] @sm:auto-cols-[minmax(calc(50%_-_32px),_1fr)] auto-cols-[minmax(calc(75%_-_32px),_1fr)] overflow-x-scroll scrollbar-hide">
							<Sessions />
						</div>
					</div>
				</div>
				<div className="flex flex-col rounded-md">
					<p className="p-4 pb-0 text-sm leading-5 font-normal">
						Recents
					</p>
					<div className="@container/session p-4">
						<div className="gap-4 grid grid-flow-col @5xl:auto-cols-[minmax(calc(20%_-_32px),_1fr)] @4xl:auto-cols-[minmax(calc(25%_-_32px),_1fr)] @xl:auto-cols-[minmax(calc(33%_-_32px),_1fr)] @sm:auto-cols-[minmax(calc(50%_-_32px),_1fr)] auto-cols-[minmax(calc(75%_-_32px),_1fr)] overflow-x-scroll scrollbar-hide">
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
