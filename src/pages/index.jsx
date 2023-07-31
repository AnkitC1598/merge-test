import { useEffect } from "react"
import { Breadcrumb } from "~/components/molecules"
import { Sessions } from "~/components/organisms"
import { useGetDashboardSessions } from "~/hooks/queries/dashboard"
import { useStore } from "~/store"
import Cohorts from "./cohorts"
import Loading from "~/components/atoms/Loading"

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
			<Breadcrumb
				breadcrumbs={[]}
				className="border-t bg-neutral-50 dark:bg-neutral-900 z-50 sticky top-0"
			/>
			<div className="@lg:px-8 px-2 sm:pt-8 pt-4 flex flex-col gap-8 justify-start">
				<div className="flex flex-col gap-0.5">
					<h1 className="text-2xl leading-8 font-semibold">
						Welcome, {user?.fullname}!
					</h1>
					<p className="text-base leading-6 font-normal text-slate-500">
						Your dashboard is your go-to place to get started
					</p>
				</div>
				{fetchingUpcoming ? (
					<div className="w-full flex items-center justify-center">
						<Loading className="w-10 h-10" />
					</div>
				) : upcoming.length ? (
					<div className="flex flex-col rounded-md">
						<p className="pt-4 text-sm leading-5 font-normal">
							Upcoming Sessions
						</p>

						<div className="@container/session py-4">
							<div className="gap-4 grid grid-flow-col @5xl:auto-cols-[calc(25%_-_15px)] @4xl:auto-cols-[calc(25%_-_15px)] @xl:auto-cols-[calc(33%_-_32px)] @sm:auto-cols-[calc(52%_-_32px)] auto-cols-[calc(78%_-_32px)] overflow-x-scroll overflow-y-visible scrollbar-hide">
								<Sessions
									makeRoute
									sessions={upcoming}
								/>
							</div>
						</div>
					</div>
				) : null}
				{fetchingRecent ? (
					<div className="w-full flex items-center justify-center">
						<Loading className="w-10 h-10" />
					</div>
				) : recent.length ? (
					<div className="flex flex-col rounded-md">
						<p className="pt-4 text-sm leading-5 font-normal">
							Recent Sessions
						</p>
						<div className="@container/session py-4">
							<div className="gap-4 grid grid-flow-col @5xl:auto-cols-[calc(25%_-_15px)] @4xl:auto-cols-[calc(25%_-_15px)] @xl:auto-cols-[calc(33%_-_32px)] @sm:auto-cols-[calc(52%_-_32px)] auto-cols-[calc(78%_-_32px)] overflow-x-scroll overflow-y-visible scrollbar-hide">
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
