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
		label: "Live Session",
		value: "live",
		icon: LiveIcon,
		color: "purple",
		colors: {
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(147,_51,_234,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(192,_132,_252,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-purple-50 dark:bg-purple-800 text-purple-500 dark:text-purple-200",
			icon: "text-purple-200/50 dark:text-purple-400/25",
			border: "border-purple-200 dark:border-purple-600",
			bgText: "bg-purple-50 dark:bg-purple-400/10 text-purple-700 dark:text-purple-400 ring-purple-700/10 dark:ring-purple-400/30",
			progress: "dark:bg-purple-600 bg-purple-700",
			progressContainer: "dark:ring-purple-400/30 ring-purple-700/10",
		},
		type: "session",
		contentType: "live",
		progressBar: true,
		showStatus: true,
	},
	{
		label: "Recorded",
		value: "recorded",
		icon: VideoCameraIcon,
		color: "sky",
		colors: {
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(2,_132,_199,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(56,_189,_248,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-sky-50 dark:bg-sky-800 text-sky-500 dark:text-sky-200",
			icon: "text-sky-200/50 dark:text-sky-400/25",
			border: "border-sky-200 dark:border-sky-600",
			bgText: "bg-sky-50 dark:bg-sky-400/10 text-sky-700 dark:text-sky-400 ring-sky-700/10 dark:ring-sky-400/30",
			progress: "dark:bg-sky-600 bg-sky-700",
			progressContainer: "dark:ring-sky-400/30 ring-sky-700/10",
		},
		type: "content",
		contentType: "recorded",
		progressBar: true,
	},
	{
		label: "Youtube Recorded",
		value: "recordedYoutube",
		icon: YoutubeIcon,
		colors: {
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(225,_29,_72,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(251,_113,_133,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-rose-50 dark:bg-rose-800 text-rose-500 dark:text-rose-200",
			icon: "text-rose-200/50 dark:text-rose-400/25",
			border: "border-rose-200 dark:border-rose-600",
			bgText: "bg-rose-50 dark:bg-rose-400/10 text-rose-700 dark:text-rose-400 ring-rose-600/10 dark:ring-rose-400/20",
			progress: "dark:bg-rose-600 bg-rose-700",
			progressContainer: "dark:ring-rose-400/20 ring-rose-600/10",
		},
		type: "content",
		contentType: "recordedYoutube",
		progressBar: true,
	},
	{
		label: "Text",
		value: "rte",
		icon: RTEIcon,
		color: "neutral",
		colors: {
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(82,_82,_82,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(163,_163,_163,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200",
			icon: "text-neutral-200/50 dark:text-neutral-400/25",
			border: "border-neutral-200 dark:border-neutral-600",
			bgText: "bg-neutral-50 dark:bg-neutral-400/10 text-neutral-600 dark:text-neutral-400 ring-neutral-500/10 dark:ring-neutral-400/20",
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
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(225,_29,_72,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(251,_113,_133,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-rose-50 dark:bg-rose-800 text-rose-500 dark:text-rose-200",
			icon: "text-rose-200/50 dark:text-rose-400/25",
			border: "border-rose-200 dark:border-rose-600",
			bgText: "bg-rose-50 dark:bg-rose-400/10 text-rose-700 dark:text-rose-400 ring-rose-600/10 dark:ring-rose-400/20",
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
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(202,_138,_4,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(250,_204,_21,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-yellow-50 dark:bg-yellow-800 text-yellow-500 dark:text-yellow-200",
			icon: "text-yellow-200/50 dark:text-yellow-400/25",
			border: "border-yellow-200 dark:border-yellow-600",
			bgText: "bg-yellow-50 dark:bg-yellow-400/10 text-yellow-800 dark:text-yellow-500 ring-yellow-600/20 dark:ring-yellow-400/20",
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
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(37,_99,_235,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(96,_165,_250,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-blue-50 dark:bg-blue-800 text-blue-500 dark:text-blue-200",
			icon: "text-blue-200/50 dark:text-blue-400/25",
			border: "border-blue-200 dark:border-blue-600",
			bgText: "bg-blue-50 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400 ring-blue-700/10 dark:ring-blue-400/30",
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
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(22,_163,_74,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(74,_222,_128,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
			card: "bg-green-50 dark:bg-green-800 text-green-500 dark:text-green-200",
			icon: "text-green-200/50 dark:text-green-400/25",
			border: "border-green-200 dark:border-green-600",
			bgText: "bg-green-50 dark:bg-green-400/10 text-green-700 dark:text-green-400 ring-green-600/20 dark:ring-green-400/30",
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
