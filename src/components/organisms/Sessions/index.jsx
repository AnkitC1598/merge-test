import {
	BookOpenIcon,
	DocumentTextIcon,
	PresentationChartBarIcon,
	TableCellsIcon,
	VideoCameraIcon,
} from "@heroicons/react/20/solid"
import { SessionCard } from "~/components/atoms"
import { LiveIcon, RTEIcon, YoutubeIcon } from "~/svgs"

const types = [
	{
		label: "Live",
		value: "live",
		icon: LiveIcon,
		color: "red",
		colors: {
			card: "bg-red-50 dark:bg-red-800 text-red-500 dark:text-red-200",
			icon: "text-red-200/50 dark:text-red-400/50",
			border: "border-red-200 dark:border-red-600",
		},
		type: "session",
		contentType: "live",
	},
	{
		label: "Recorded",
		value: "recorded",
		icon: VideoCameraIcon,
		color: "sky",
		colors: {
			card: "bg-sky-50 dark:bg-sky-800 text-sky-500 dark:text-sky-200",
			icon: "text-sky-200/50 dark:text-sky-400/50",
			border: "border-sky-200 dark:border-sky-600",
		},
		type: "content",
		contentType: "recorded",
	},
	{
		label: "Youtube Recorded",
		value: "recordedYoutube",
		icon: YoutubeIcon,
		colors: {
			card: "bg-rose-50 dark:bg-rose-800 text-rose-500 dark:text-rose-200",
			icon: "text-rose-200/50 dark:text-rose-400/50",
			border: "border-rose-200 dark:border-rose-600",
		},
		type: "content",
		contentType: "recordedYoutube",
	},
	{
		label: "Text",
		value: "rte",
		icon: RTEIcon,
		color: "neutral",
		colors: {
			card: "bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200",
			icon: "text-neutral-200/50 dark:text-neutral-400/50",
			border: "border-neutral-200 dark:border-neutral-600",
		},
		type: "content",
		contentType: "text",
	},
	{
		label: "PDF",
		value: "pdf",
		icon: BookOpenIcon,
		color: "rose",
		colors: {
			card: "bg-rose-50 dark:bg-rose-800 text-rose-500 dark:text-rose-200",
			icon: "text-rose-200/50 dark:text-rose-400/50",
			border: "border-rose-200 dark:border-rose-600",
		},
		type: "content",
		contentType: "document",
	},
	{
		label: "PPT",
		value: "ppt",
		icon: PresentationChartBarIcon,
		color: "yellow",
		colors: {
			card: "bg-yellow-50 dark:bg-yellow-800 text-yellow-500 dark:text-yellow-200",
			icon: "text-yellow-200/50 dark:text-yellow-400/50",
			border: "border-yellow-200 dark:border-yellow-600",
		},
		type: "content",
		contentType: "document",
	},
	{
		label: "Document",
		value: "doc",
		icon: DocumentTextIcon,
		color: "blue",
		colors: {
			card: "bg-blue-50 dark:bg-blue-800 text-blue-500 dark:text-blue-200",
			icon: "text-blue-200/50 dark:text-blue-400/50",
			border: "border-blue-200 dark:border-blue-600",
		},
		type: "content",
		contentType: "document",
	},
	{
		label: "Spreadsheet",
		value: "xls",
		icon: TableCellsIcon,
		color: "green",
		colors: {
			card: "bg-green-50 dark:bg-green-800 text-green-500 dark:text-green-200",
			icon: "text-green-200/50 dark:text-green-400/50",
			border: "border-green-200 dark:border-green-600",
		},
		type: "content",
		contentType: "document",
	},
]

const Sessions = ({ makeRoute = false, sessions = [] }) => {
	return sessions.length
		? sessions.map(session => {
				let type
				if (session.type === "document") {
					type = types.find(
						t =>
							t.contentType === session.type &&
							session.extension?.includes(t.value)
					)
				} else {
					type = types.find(t => t.contentType === session.type)
				}

				if (!type) return null
				return (
					<SessionCard
						key={session._id}
						type={type}
						session={session}
						makeRoute={makeRoute}
					/>
				)
		  })
		: null
}

export default Sessions
