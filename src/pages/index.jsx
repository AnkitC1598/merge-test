import { useEffect } from "react"
import { Breadcrumb } from "~/components/molecules"
import { Sessions } from "~/components/organisms"
import { useGetDashboardSessions } from "~/hooks/queries/dashboard"
import { useStore } from "~/store"
import Cohorts from "./cohorts"

const Home = () => {
	const { user, dispatch } = useStore(store => ({
		user: store.user,
		dispatch: store.dispatch,
	}))

	const { data: upcoming, isFetching: fetchingUpcoming } =
		useGetDashboardSessions({ type: "upcoming" })
	const { data: recent, isFetching: fetchingRecent } =
		useGetDashboardSessions({ type: "finished" })

	useEffect(() => {
		dispatch({
			type: "SET_STATE",
			payload: {
				currentHierarchy: null,
			},
		})
		dispatch({
			type: "SET_STATE",
			payload: {
				cohortTitle: null,
			},
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className="pt-4">
				<Breadcrumb breadcrumbs={[]} />
			</div>
			<div className="sm:pt-8 pt-4 flex flex-col gap-8 justify-start">
				<div className="flex flex-col gap-0.5">
					<h1 className="text-2xl leading-8 font-semibold">
						Welcome, {user?.fullname}!
					</h1>
					<p className="text-base leading-6 font-normal text-slate-500">
						Your dashboard is your go-to place to get started
					</p>
				</div>
				{fetchingUpcoming ? (
					<>Loading...</>
				) : upcoming.length ? (
					<div className="flex flex-col rounded-md">
						<p className="p-4 pb-0 text-sm leading-5 font-normal">
							Upcoming
						</p>

						<div className="@container/session p-4">
							<div className="gap-4 grid grid-flow-col @5xl:auto-cols-[calc(20%_-_32px)] @4xl:auto-cols-[calc(25%_-_32px)] @xl:auto-cols-[calc(33%_-_32px)] @sm:auto-cols-[calc(50%_-_32px)] auto-cols-[calc(75%_-_32px)] overflow-x-scroll scrollbar-hide">
								<Sessions
									makeRoute
									sessions={upcoming}
								/>
							</div>
						</div>
					</div>
				) : null}
				{fetchingRecent ? (
					<>Loading...</>
				) : recent.length ? (
					<div className="flex flex-col rounded-md">
						<p className="p-4 pb-0 text-sm leading-5 font-normal">
							Recents
						</p>
						<div className="@container/session p-4">
							<div className="gap-4 grid grid-flow-col @5xl:auto-cols-[calc(20%_-_32px)] @4xl:auto-cols-[calc(25%_-_32px)] @xl:auto-cols-[calc(33%_-_32px)] @sm:auto-cols-[calc(50%_-_32px)] auto-cols-[calc(75%_-_32px)] overflow-x-scroll scrollbar-hide">
								<Sessions
									makeRoute
									sessions={recent}
								/>
							</div>
						</div>
					</div>
				) : null}
				<Cohorts preview />
			</div>
		</>
	)
}

export default Home
