import { classNames } from "@/web-core/src/utils"
import { format, isAfter } from "date-fns"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { TopicIcon } from "~/svgs"

const hierarchyTypes = {
	ctsct: ["cohort", "term", "subject", "chapter", "session"],
	cst: ["cohort", "subject", "session"],
	ct: ["cohort", "session"],
}

const statusColors = {
	live: "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
	upcoming:
		"bg-amber-50 text-amber-800 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-500 dark:ring-amber-400/20",
	finished:
		"bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
}

const SessionCard = ({ session, type, makeRoute }) => {
	const router = useRouter()

	const status = useMemo(() => {
		const isSession = type.value.includes("live")
		if (!isSession) return null

		return session.config.isLive
			? "live"
			: session.config.hasEnded
			? "finished"
			: isAfter(new Date(session.startDate), new Date())
			? "upcoming"
			: null
	}, [
		session.config.hasEnded,
		session.config.isLive,
		session.startDate,
		type.value,
	])

	const href = useMemo(() => {
		if (!makeRoute) return `${router.asPath}/${session._id}`
		const hierarchy = session.cohort.type.map(t => t[0]).join("")
		const hierarchyArr = hierarchyTypes[hierarchy]
		let route = "/cohorts"

		hierarchyArr.forEach((h, i) => {
			if (i === 0) route += `/${session.cohort._id}`
			else if (i === hierarchyArr.length - 1) route += `/${session._id}`
			else route += `/${session[h]._id}`
		})

		return route
	}, [makeRoute, router.asPath, session])

	return (
		<>
			<Link
				href={href}
				className={classNames(
					"relative flex flex-col bg-neutral-50 dark:bg-neutral-900 transition-all duration-300 divide divide-y divide-neutral-200 dark:divide-neutral-800 group h-full shadow dark:shadow-neutral-700 rounded-md border border-neutral-200 dark:border-neutral-700"
				)}
			>
				<div className="flex gap-x-4 gap-y-1 items-center justify-between px-3 py-2">
					<div className="flex flex-wrap gap-x-2 gap-y-1">
						<span
							className={
								`${classNames(
									"flex whitespace-nowrap items-center text-center rounded-md px-2 py-0.5 ring-1 ring-inset capitalize font-medium",
									type.colors.bgText
								)}` + " text-xs"
							}
						>
							{type.label}
						</span>
						{type.showStatus && status ? (
							<span
								className={
									`${classNames(
										"flex items-center gap-1 rounded-md px-2 py-0.5 font-medium ring-1 ring-inset capitalize",
										statusColors[status],
										status === "live" ? "animate-pulse" : ""
									)}` + " text-xxs"
								}
							>
								{status === "live" ? (
									<span className="h-1 w-1 bg-red-700 dark:bg-red-400 rounded-full" />
								) : null}
								<span>{status}</span>
							</span>
						) : null}
					</div>
					<div className="flex-1 flex gap-1 justify-end items-center">
						<TopicIcon className="h-3 w-3" />
						<span className="whitespace-none text-xs flex gap-0.5">
							<span>{session.topics.length}</span>
							<span>Topics</span>
						</span>
					</div>
				</div>
				<div className="relative overflow-hidden min-h-32 gap-2 flex-1 flex flex-col justify-between px-3 py-4 z-10">
					<div className="flex gap-1 font-medium text-sm">
						<span>{session.priority + 1}.</span>
						<span className="@2xs/sessionCard:line-clamp-3 line-clamp-2">
							{session?.title} adsasd asdasfasfasd asd fasdfasd
							fasdf asdf asdf asdf
						</span>
					</div>
					{/* {type.progressBar ? (
						<div className="z-10 flex flex-col gap-2 w-2/3">
							<div className="text-xs">Progress - 65%</div>
							<div
								className={classNames(
									"h-2 rounded-full overflow-hidden w-full ring-1 ring-inset bg-neutral-200/20 dark:bg-white/5",
									type.colors.progressContainer
								)}
							>
								<div
									className={classNames(
										"h-2 rounded-full overflow-hidden",
										type.colors.progress
									)}
									style={{ width: "65%" }}
								/>
							</div>
						</div>
					) : null} */}
					<div className="absolute inset-0 z-0 flex items-end justify-between group">
						<div className="flex-1 aspect-video opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
							<div
								className={classNames(
									"w-full h-full scale-90 group-hover:scale-110 transition-transform duration-1000 ease-in-out origin-bottom-left",
									type.colors.blob
								)}
							/>
						</div>
						<type.icon
							className={classNames(
								"w-1/4 aspect-square group-hover:scale-110 transition duration-300",
								type.colors.icon
							)}
						/>
					</div>
				</div>
				<div className="px-3 py-2 flex justify-between items-center gap-4">
					<div className="flex flex-wrap flex-1 gap-x-1 gap-y-0.5">
						<span className="text-xs font-normal">
							{format(
								new Date(session?.startDate),
								"dd MMM yyyy"
							)}
							,
						</span>
						<span className="font-medium text-xs">
							{format(new Date(session?.startDate), "hh:mm aa")}
						</span>
					</div>
					{session?.hasAttended ? (
						<span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20 capitalize">
							Attended
						</span>
					) : null}
				</div>
			</Link>
		</>
	)
}

export default SessionCard
