import { classNames } from "@/web-core/src/utils"
import { RectangleStackIcon } from "@heroicons/react/24/solid"
import { format } from "date-fns"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { Breadcrumb } from "~/components/molecules"
import { useGetAllCohorts } from "~/hooks/queries/curriculum"
import { useStore } from "~/store"

const typeMap = {
	ctsct: {
		label: "Degree",
		color: "bg-lime-50 text-lime-700 ring-lime-600/20 dark:bg-lime-500/10 dark:text-lime-400 dark:ring-lime-500/20",
	},
	cst: {
		label: "Bootcamp",
		color: "bg-pink-50 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20",
	},
	ct: {
		label: "Workshop",
		color: "bg-amber-50 text-amber-800 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-500 dark:ring-amber-400/20",
	},
}

const Cohorts = ({ preview = false }) => {
	const { dispatch, orgName } = useStore(store => ({
		dispatch: store.dispatch,
		orgName: store.orgInfo.name,
	}))

	const { data: cohorts } = useGetAllCohorts()

	useEffect(() => {
		if (!preview)
			dispatch({ type: "SET_STATE", payload: { currentHierarchy: null } })
	}, [dispatch, preview])

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
			<Head>
				<title>Cohorts - {orgName ?? "Lisa"}</title>
			</Head>
			{preview ? null : (
				<Breadcrumb
					breadcrumbs={[{ label: "Cohorts" }]}
					className="border-t bg-neutral-50 dark:bg-neutral-900 z-50 sticky top-0"
				/>
			)}
			<div
				className={classNames(
					"flex flex-col",
					preview ? "rounded-md" : "@lg:px-8 px-2 gap-4"
				)}
			>
				<div
					className={classNames(
						"flex gap-4 justify-between items-center",
						preview ? "py-4" : "sm:pt-8 pt-4"
					)}
				>
					<div className="flex gap-2">
						<RectangleStackIcon className="h-6 w-6 text-slate-500" />
						<h1 className="text-lg leading-6 font-medium">
							Your Cohorts
						</h1>
					</div>
					{preview && cohorts?.length > 5 ? (
						<Link
							href="/cohorts"
							className="rounded-md bg-neutral-900 dark:bg-neutral-50 py-2 px-3 text-sm font-semibold text-slate-50 dark:text-slate-900 shadow hover:shadow-md hover:shadow-neutral-600 hover:bg-neutral-900 dark:hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outlone-neutral-800 dark:focus-visible:outline-neutral-50 flex items-center transition duration-300 ease-in-out"
						>
							View More
						</Link>
					) : null}
				</div>
				{cohorts?.length ? (
					<div
						className={classNames(
							"@container/cohorts",
							preview ? "py-4" : ""
						)}
					>
						<div className="gap-4 grid @2xl/cohorts:grid-cols-4 @md/cohorts:grid-cols-3 @sm/cohorts:grid-cols-2 grid-cols-1">
							{cohorts
								?.slice(0, preview ? 5 : Infinity)
								?.map(cohort => {
									if (!cohort) return null
									cohort = cohort?.cohort
									if (!cohort?.type) return null
									const cohortType = cohort.type
										.map(t => t[0])
										.join("")
									return (
										<Link
											key={cohort?._id}
											href={`/cohorts/${cohort?._id}`}
											className="flex flex-col col-span-1 rounded-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow hover:shadow-md hover:border-neutral-200 dark:shadow-neutral-800 divide-y divide-purple-100 dark:divide-neutral-700 transition-all duration-300 ease-in-out group font-medium overflow-hidden"
										>
											<div className="flex flex-col">
												{cohort?.coverImage ? (
													<div className="w-full aspect-video relative">
														<Image
															src={
																cohort?.coverImage
															}
															alt={cohort?.title}
															fill
															priority
														/>
													</div>
												) : (
													<div className="w-full aspect-video bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center">
														<div className="h-10 w-10 relative">
															<Image
																src={`/favicon.ico`}
																alt={
																	cohort?.title
																}
																fill
																className="opacity-10"
															/>
														</div>
													</div>
												)}
												<div className="px-4 py-2 flex flex-wrap-reverse gap-x-4 gap-y-2 items-center justify-between">
													<div className="flex gap-2 items-center">
														<span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30 capitalize">
															{cohort?.mode}
														</span>
														<span
															className={classNames(
																"inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset capitalize",
																typeMap[
																	cohortType
																].color
															)}
														>
															{
																typeMap[
																	cohortType
																].label
															}
														</span>
													</div>
													{cohort?.duration
														?.startDate ? (
														<span className="text-purple-400 text-xs">
															{format(
																new Date(
																	cohort?.duration?.startDate
																),
																"LLL yyyy"
															)}
														</span>
													) : null}
												</div>
											</div>
											<div className="flex flex-col">
												<div className="px-4 py-2 flex items-center justify-center gap-4 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400">
													<span className="text-xs leading-5 font-medium">
														{cohort?.uid ?? ""}
													</span>
													{/* <span>·</span>
													<span className="text-xs leading-5 font-medium whitespace-nowrap">
														{cohort?.totalStudents ??
															0}{" "}
														Users
													</span> */}
												</div>
												<div className="p-4 flex items-center gap-4">
													{cohort?.icon ? (
														<div className="rounded-md overflow-hidden border border-neutral-200 dark:border-yellow-400/20 h-10 w-10 relative aspect-square flex-shrink-0">
															<Image
																src={
																	cohort?.icon
																}
																alt={
																	cohort?.title
																}
																fill
																priority
															/>
														</div>
													) : (
														<div className="rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-700 h-10 w-10 relative aspect-square flex-shrink-0">
															<Image
																src={`/favicon.ico`}
																alt={
																	cohort?.title
																}
																fill
																className="opacity-10"
															/>
														</div>
													)}
													<div className="text-sm leading-5 font-medium">
														{cohort?.title ?? ""}
													</div>
												</div>
											</div>
										</Link>
									)
								})}
						</div>
					</div>
				) : (
					<div className="py-16 flex items-center justify-center">
						No Cohorts Found
					</div>
				)}
			</div>
		</>
	)
}

export default Cohorts
