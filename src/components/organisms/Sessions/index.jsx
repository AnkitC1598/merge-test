import {
	DocumentChartBarIcon,
	DocumentTextIcon,
	PresentationChartBarIcon,
	TableCellsIcon,
} from "@heroicons/react/24/outline"
import { SessionCard } from "~/components/atoms"
import { LiveIcon, RTEIcon, RecordedIcon, YoutubeIcon } from "~/svgs"

const types = [
	{
		label: "Live Session",
		value: "live",
		icon: LiveIcon,
		colors: {
			options: {
				active: "text-purple-700 dark:text-purple-200 bg-purple-100 dark:bg-purple-500",
				base: "text-purple-700 dark:text-purple-400",
				iconActive: "text-purple-400 dark:text-purple-200",
				iconBase: "text-purple-400",
			},
			form: {
				bg: "bg-purple-50 dark:bg-purple-400/10",
				toggle: "bg-purple-400",
			},
			accent: {
				bg: "bg-purple-800",
				text: "text-purple-50",
				lightText: "text-purple-200",
			},
			bgText: "bg-purple-50 dark:bg-purple-400/10 text-purple-700 dark:text-purple-400 ring-purple-700/10 dark:ring-purple-400/30",
			icon: "text-purple-200 dark:text-purple-400",
			border: "border-purple-200 dark:border-purple-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(147,_51,_234,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(192,_132,_252,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "session",
		contentType: "live",
		title: "New Session",
		permission: ["cohort.contentManagement.create"],
	},
	{
		label: "Recorded",
		value: "recorded",
		icon: RecordedIcon,
		colors: {
			options: {
				active: "text-sky-700 dark:text-sky-200 bg-purple-100 dark:bg-purple-500",
				base: "text-sky-700 dark:text-sky-400",
				iconActive: "text-sky-400 dark:text-sky-200",
				iconBase: "text-sky-400",
			},
			form: {
				bg: "bg-sky-50 dark:bg-sky-400/10",
				toggle: "bg-sky-400",
			},
			accent: {
				bg: "bg-sky-800",
				text: "text-sky-50",
				lightText: "text-sky-200",
			},
			bgText: "bg-sky-50 dark:bg-sky-400/10 text-sky-700 dark:text-sky-400 ring-sky-700/10 dark:ring-sky-400/30",
			icon: "text-sky-200 dark:text-sky-400",
			border: "border-sky-200 dark:border-sky-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(56,_189,_248,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(2,_132,_199,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "content",
		contentType: "recorded",
		title: "Upload Recorded Content",
		permission: ["cohort.contentManagement.create"],
	},
	{
		label: "Youtube",
		value: "recordedYoutube",
		icon: YoutubeIcon,
		colors: {
			options: {
				active: "text-rose-700 dark:text-rose-200 bg-purple-100 dark:bg-purple-500",
				base: "text-rose-700 dark:text-rose-400",
				iconActive: "text-rose-400 dark:text-rose-200",
				iconBase: "text-rose-400",
			},
			form: {
				bg: "bg-rose-50 dark:bg-rose-400/10",
				toggle: "bg-rose-400",
			},
			accent: {
				bg: "bg-rose-800",
				text: "text-rose-50",
				lightText: "text-rose-200",
			},
			bgText: "bg-rose-50 dark:bg-rose-400/10 text-rose-700 dark:text-rose-400 ring-rose-600/10 dark:ring-rose-400/20",
			icon: "text-rose-200 dark:text-rose-400",
			border: "border-rose-200 dark:border-rose-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(225,_29,_72,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(251,_113,_133,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "content",
		contentType: "recordedYoutube",
		title: "Upload Recorded Content",
		permission: ["cohort.contentManagement.create"],
	},
	{
		label: "Text",
		value: "rte",
		icon: RTEIcon,
		colors: {
			options: {
				active: "text-gray-700 dark:text-gray-200 bg-purple-100 dark:bg-purple-500",
				base: "text-gray-700 dark:text-gray-400",
				iconActive: "text-gray-400 dark:text-gray-200",
				iconBase: "text-gray-400",
			},
			form: {
				bg: "bg-gray-50 dark:bg-gray-400/10",
				toggle: "bg-gray-400",
			},
			accent: {
				bg: "bg-gray-800",
				text: "text-gray-50",
				lightText: "text-gray-200",
			},
			bgText: "bg-gray-50 dark:bg-gray-400/10 text-gray-600 dark:text-gray-400 ring-gray-500/10 dark:ring-gray-400/20",
			icon: "text-gray-200 dark:text-gray-400",
			border: "border-gray-200 dark:border-gray-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(82,_82,_82,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(163,_163,_163,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "content",
		contentType: "text",
		title: "Draft Text Content",
		permission: ["cohort.contentManagement.create"],
	},
	{
		label: "PDF",
		value: "pdf",
		icon: DocumentChartBarIcon,
		colors: {
			options: {
				active: "text-rose-700 dark:text-rose-200 bg-purple-100 dark:bg-purple-500",
				base: "text-rose-700 dark:text-rose-400",
				iconActive: "text-rose-400 dark:text-rose-200",
				iconBase: "text-rose-400",
			},
			form: {
				bg: "bg-rose-50 dark:bg-rose-400/10",
				toggle: "bg-rose-400",
			},
			accent: {
				bg: "bg-rose-800",
				text: "text-rose-50",
				lightText: "text-rose-200",
			},
			bgText: "bg-rose-50 dark:bg-rose-400/10 text-rose-700 dark:text-rose-400 ring-rose-600/10 dark:ring-rose-400/20",
			icon: "text-rose-200 dark:text-rose-400",
			border: "border-rose-200 dark:border-rose-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(225,_29,_72,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(251,_113,_133,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "content",
		contentType: "document",
		title: "Upload PDF Content",
		permission: ["cohort.contentManagement.create"],
	},
	{
		label: "PPT",
		value: "ppt",
		icon: PresentationChartBarIcon,
		colors: {
			options: {
				active: "text-amber-700 dark:text-amber-200 bg-purple-100 dark:bg-purple-500",
				base: "text-amber-700 dark:text-amber-400",
				iconActive: "text-amber-400 dark:text-amber-200",
				iconBase: "text-amber-400",
			},
			form: {
				bg: "bg-amber-50 dark:bg-amber-400/10",
				toggle: "bg-amber-400",
			},
			accent: {
				bg: "bg-amber-800",
				text: "text-amber-50",
				lightText: "text-amber-200",
			},
			bgText: "bg-amber-50 dark:bg-amber-400/10 text-amber-800 dark:text-amber-500 ring-amber-600/20 dark:ring-amber-400/20",
			icon: "text-amber-200 dark:text-amber-400",
			border: "border-amber-200 dark:border-amber-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(217,_119,_6,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(251,_191,_36,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "content",
		contentType: "document",
		title: "Upload PPT Content",
		permission: ["cohort.contentManagement.create"],
	},
	{
		label: "Document",
		value: "doc",
		icon: DocumentTextIcon,
		colors: {
			options: {
				active: "text-blue-700 dark:text-blue-200 bg-purple-100 dark:bg-purple-500",
				base: "text-blue-700 dark:text-blue-400",
				iconActive: "text-blue-400 dark:text-blue-200",
				iconBase: "text-blue-400",
			},
			form: {
				bg: "bg-blue-50 dark:bg-blue-400/10",
				toggle: "bg-blue-400",
			},
			accent: {
				bg: "bg-blue-800",
				text: "text-blue-50",
				lightText: "text-blue-200",
			},
			bgText: "bg-blue-50 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400 ring-blue-700/10 dark:ring-blue-400/30",
			icon: "text-blue-200 dark:text-blue-400",
			border: "border-blue-200 dark:border-blue-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(37,_99,_235,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(96,_165,_250,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "content",
		contentType: "document",
		title: "Upload Doc Content",
		permission: ["cohort.contentManagement.create"],
	},
	{
		label: "Spreadsheet",
		value: "xls",
		icon: TableCellsIcon,
		colors: {
			options: {
				active: "text-lime-700 dark:text-lime-200 bg-purple-100 dark:bg-purple-500",
				base: "text-lime-700 dark:text-lime-400",
				iconActive: "text-lime-400 dark:text-lime-200",
				iconBase: "text-lime-400",
			},
			form: {
				bg: "bg-lime-50 dark:bg-lime-400/10",
				toggle: "bg-lime-400",
			},
			accent: {
				bg: "bg-lime-800",
				text: "text-lime-50",
				lightText: "text-lime-200",
			},
			bgText: "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 ring-lime-600/20 dark:ring-lime-400/30",
			icon: "text-lime-200 dark:text-lime-400",
			border: "border-lime-200 dark:border-lime-600",
			blob: "bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(101,_163,_13,_0.15)_0%,rgba(76,_182,_193,_0)_100%)] dark:bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,rgba(163,_230,_53,_0.15)_0%,rgba(76,_182,_193,_0)_100%)]",
		},
		type: "content",
		contentType: "document",
		title: "Upload Spreadsheet Content",
		permission: ["cohort.contentManagement.create"],
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
