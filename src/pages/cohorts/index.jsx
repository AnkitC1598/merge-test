import { classNames } from "@/web-core/src/utils"
import { CalendarDaysIcon, UsersIcon } from "@heroicons/react/20/solid"
import { RectangleStackIcon } from "@heroicons/react/24/solid"
import { format } from "date-fns"
import Link from "next/link"
import { useEffect } from "react"
import { useGetAllCohorts } from "~/hooks/queries/curriculum"
import { useStore } from "~/store"

const Cohorts = ({ preview = false }) => {
	const dispatch = useStore(store => store.dispatch)

	const { data: cohorts } = useGetAllCohorts()

	useEffect(() => {
		if (!preview)
			dispatch({ type: "SET_STATE", payload: { currentHierarchy: null } })
	}, [dispatch, preview])

	return (
		<>
			<div
				className={classNames(
					"flex flex-col",
					preview ? "rounded-md" : "gap-4"
				)}
			>
				<div
					className={classNames(
						"flex gap-4 justify-between items-center",
						preview ? "p-4" : "sm:pt-8 pt-4"
					)}
				>
					<div className="flex gap-2">
						<RectangleStackIcon className="h-6 w-6 text-slate-500" />
						<h1 className="text-lg leading-6 font-medium">
							Your Cohorts
						</h1>
					</div>
					{preview ? (
						<Link
							href="/cohorts"
							className="rounded-md bg-neutral-900 dark:bg-neutral-50 py-2 px-3 text-sm font-semibold text-slate-50 dark:text-slate-900 shadow hover:shadow-md hover:shadow-neutral-600 hover:bg-neutral-900 dark:hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outlone-neutral-800 dark:focus-visible:outline-neutral-50 flex items-center transition duration-300 ease-in-out"
						>
							View More
						</Link>
					) : null}
				</div>
				<div
					className={classNames(
						"@container/cohorts",
						preview ? "p-4" : ""
					)}
				>
					<div className="gap-4 grid @2xl/cohorts:grid-cols-4 @md/cohorts:grid-cols-3 @sm/cohorts:grid-cols-2 grid-cols-1">
						{cohorts?.map(cohort => (
							<div
								key={cohort.cohort._id}
								className="col-span-1 rounded-md border border-neutral-300 dark:border-neutral-700 shadow hover:shadow-md dark:shadow-neutral-700 group"
							>
								<Link
									href={`/cohorts/${cohort.cohort._id}`}
									className="flex flex-col justify-between gap-6 p-4 h-full w-full"
								>
									<div className="flex flex-col gap-1">
										<div className="text-sm leading-5 font-medium text-purple-500 dark:text-purple-300">
											{cohort.cohort.title}
										</div>
										<div className="text-sm leading-5 font-normal text-slate-400">
											{cohort.course?.title}
										</div>
									</div>
									<div className="flex flex-col gap-1 text-slate-400">
										<div className="flex gap-2">
											<UsersIcon className="h-4 w-4" />
											<span className="text-sm leading-5 font-normal">
												*120 Students
											</span>
										</div>
										{cohort.duration ? (
											<div className="flex gap-2">
												<CalendarDaysIcon className="h-4 w-4" />
												<span className="text-sm leading-5 font-normal">
													{format(
														new Date(
															cohort.duration.startDate
														),
														"LLL yyyy"
													)}{" "}
													-{" "}
													{format(
														new Date(
															cohort.duration.endDate
														),
														"LLL yyyy"
													)}
												</span>
											</div>
										) : null}
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Cohorts
