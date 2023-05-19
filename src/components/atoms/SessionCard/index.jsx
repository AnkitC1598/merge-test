import { classNames } from "@/web-core/src/utils"
import { ClockIcon } from "@heroicons/react/20/solid"
import { differenceInMinutes } from "date-fns"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { TopicIcon } from "~/svgs"

const hierarchyTypes = {
	ctsct: ["cohort", "term", "subject", "chapter", "session"],
	cst: ["cohort", "subject", "session"],
	ct: ["cohort", "session"],
}

const SessionCard = ({ session, type, makeRoute }) => {
	const router = useRouter()

	const href = useMemo(() => {
		if (!makeRoute) return `${router.asPath}/${session._id}`
		const hierarchy = session.cohort.type.map(t => t[0]).join("")
		const hierarchyArr = hierarchyTypes[hierarchy]
		let route = "/cohorts/"

		hierarchyArr.forEach((h, i) => {
			if (i === 0) route += `/${session.cohort._id}`
			else if (i === hierarchyArr.length - 1) route += `/${session._id}`
			else route += `/${session[h]._id}`
		})

		return route
	}, [makeRoute, router.asPath, session])
	console.debug(`🚀 ~ file: index.jsx:16 ~ href ~ href:`, href)

	return (
		<>
			<Link
				href={href}
				className={classNames(
					"relative group md:aspect-video shadow hover:shadow-md dark:shadow-neutral-700 rounded-md border border-neutral-200 dark:border-neutral-700",
					type.colors.card
				)}
			>
				<div className="absolute inset-0 p-2 flex items-start justify-end">
					<type.icon
						className={classNames(
							"h-1/3 aspect-square group-hover:scale-110 transition duration-300",
							type.colors.icon
						)}
					/>
				</div>
				<div className="@container/sessionCard h-full relative z-10 p-4">
					<div
						className={classNames(
							"h-full flex flex-col gap-4 justify-between"
						)}
					>
						<p className="font-semibold @2xs/sessionCard:line-clamp-2 line-clamp-1">
							{session?.title}
						</p>
						<div
							className={classNames(
								"pt-4 flex flex-wrap gap-2 items-center border-t",
								type.colors.border
							)}
						>
							<div className="flex gap-1 items-center">
								<TopicIcon className="h-3 w-3" />
								<span className="text-xs">
									{session.topics.length} Topics
								</span>
							</div>
							<div className="flex gap-1 items-center">
								<ClockIcon className="h-4 w-4" />
								<span className="text-xs">
									{differenceInMinutes(
										new Date(session.endDate),
										new Date(session.startDate)
									)}{" "}
									mins
								</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default SessionCard
