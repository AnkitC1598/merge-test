import { classNames } from "@/web-core/src/utils"
import {
	ArrowSmallLeftIcon,
	Bars3CenterLeftIcon,
	BarsArrowUpIcon,
	BookOpenIcon,
	DocumentTextIcon,
	MagnifyingGlassIcon,
	PresentationChartBarIcon,
	Squares2X2Icon,
	TableCellsIcon,
	VideoCameraIcon,
} from "@heroicons/react/20/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo, useRef, useState } from "react"
import { Sessions } from "~/components/organisms"
import {
	useGetAllChapters,
	useGetAllSessions,
	useGetAllSubjects,
	useGetAllTerms,
	useGetOneCohort,
} from "~/hooks/queries/curriculum"
import { useStore } from "~/store"
import { ChapterIcon, LiveIcon, RTEIcon, SubjectIcon, TermIcon } from "~/svgs"

const hierarchyProps = {
	term: {
		icon: props => <TermIcon {...props} />,
		colors: {
			card: "bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-50",
			icon: "text-pink-200 dark:text-pink-500",
		},
		get: useGetAllTerms,
	},
	subject: {
		icon: props => <SubjectIcon {...props} />,
		colors: {
			card: "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-50",
			icon: "text-purple-200 dark:text-purple-500",
		},
		get: useGetAllSubjects,
	},
	chapter: {
		icon: props => <ChapterIcon {...props} />,
		colors: {
			card: "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-50",
			icon: "text-blue-200 dark:text-blue-500",
		},
		get: useGetAllChapters,
	},
	default: {
		icon: null,
		colors: {
			card: "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-50",
			icon: "text-neutral-200 dark:text-neutral-500",
		},
		get: () => ({ data: null, isFetching: false }),
	},
}

const hierarchyTypes = {
	ctsct: ["cohort", "term", "subject", "chapter", "session"],
	cst: ["cohort", "subject", "session"],
	ct: ["cohort", "session"],
}

const types = [
	{
		label: "Live",
		value: "live",
		icon: LiveIcon,
		color: "red",
		colors: {
			card: "bg-red-50 dark:bg-red-800 text-red-500 dark:text-red-200",
			icon: "text-red-200 dark:text-red-400",
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
			icon: "text-sky-200 dark:text-sky-400",
		},
		type: "content",
		contentType: "recorded",
	},
	{
		label: "RichText",
		value: "rte",
		icon: RTEIcon,
		color: "neutral",
		colors: {
			card: "bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200",
			icon: "text-neutral-200 dark:text-neutral-400",
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
			icon: "text-rose-200 dark:text-rose-400",
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
			icon: "text-yellow-200 dark:text-yellow-400",
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
			icon: "text-blue-200 dark:text-blue-400",
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
			icon: "text-green-200 dark:text-green-400",
		},
		type: "content",
		contentType: "document",
	},
]

const Curriculum = ({ hierarchy }) => {
	const router = useRouter()
	const overflowRef = useRef()
	const [query, setQuery] = useState("")
	const [viewMode, setViewMode] = useState(
		hierarchy === "session" ? "list" : "grid"
	)

	const {
		icon: Icon,
		colors,
		get: getData,
	} = hierarchyProps[hierarchy] || hierarchyProps.default

	const { data: hierarchyData, isFetching } = getData()

	const filteredDatas =
		query === ""
			? hierarchyData?.children ?? []
			: hierarchyData.children.filter(d =>
					d.title
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  )

	return (
		<>
			{isFetching ? (
				<div className="flex h-full items-center justify-center">
					Loading...
				</div>
			) : (
				<div className="h-full flex flex-col relative">
					<div className="p-4 pt-0 bg-neutral-50 dark:bg-neutral-800 flex sm:flex-nowrap flex-wrap gap-4 justify-between items-center shadow-sm sticky top-0 z-20 border-b-2 border-neutral-200 dark:border-neutral-700">
						<div className="text-lg xl:max-w-1/2 w-full leading-6 font-medium flex space-x-2 items-center">
							<Link
								href={router.asPath
									.split("/")
									.slice(0, -1)
									.join("/")}
								className="dark:bg-white/5 p-0.5 rounded-md group border border-neutral-300 dark:border-neutral-700"
							>
								<ArrowSmallLeftIcon className="h-9 w-9 text-slate-900 dark:text-slate-200" />
							</Link>
							<div
								ref={overflowRef}
								className="overflow-hidden w-max"
							>
								<div
									className={classNames(
										"whitespace-nowrap delay-1000",
										overflowRef.current &&
											overflowRef.current.scrollWidth >
												overflowRef.current.clientWidth
											? "animate-marquee"
											: ""
									)}
								>
									<span className="w-full">
										{hierarchyData?.title ?? ""}
									</span>
								</div>
							</div>
							<span
								className={classNames(
									"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
									colors.card
								)}
							>
								{hierarchyData?.children.length
									.toString()
									.padStart(2, "0") ?? "00"}
							</span>
						</div>
						<div className="flex space-x-2 items-center justify-end xl:w-auto w-full">
							<div className="flex-1 flex rounded-md shadow-sm">
								<div className="flex-1 relative flex items-stretch focus-within:z-10">
									<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<MagnifyingGlassIcon
											className="h-5 w-5 text-slate-400 group-focus-within:text-slate-900"
											aria-hidden="true"
										/>
									</div>
									<input
										type="search"
										name="search"
										id="search"
										autoComplete="off"
										className="block md:min-w-40 w-full rounded-md border-0 bg-white/5 py-2 pl-10 pr-3.5 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 rounded-r-none"
										placeholder="Search"
										onChange={e => setQuery(e.target.value)}
									/>
								</div>
								<button
									type="button"
									disabled
									className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 bg-white/5 disabled:cursor-not-allowed"
								>
									<BarsArrowUpIcon
										className="-ml-0.5 h-5 w-5 text-slate-400"
										aria-hidden="true"
									/>
									Sort
								</button>
							</div>
							<button
								className="h-full p-2.5 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 bg-white/5 rounded-md hover:shadow-md"
								onClick={() =>
									setViewMode(prev =>
										prev === "list" ? "grid" : "list"
									)
								}
							>
								{viewMode === "list" ? (
									<Bars3CenterLeftIcon
										className="h-5 w-5 text-slate-400"
										aria-hidden="true"
									/>
								) : (
									<Squares2X2Icon
										className="h-5 w-5 text-slate-400"
										aria-hidden="true"
									/>
								)}
							</button>
						</div>
					</div>
					<div className="@container/curriculum p-4 h-full overflow-y-scroll scrollbar">
						<div
							className={classNames(
								"gap-4",
								viewMode === "list"
									? "flex flex-col"
									: "grid @5xl/curriculum:grid-cols-5 @4xl/curriculum:grid-cols-4 @md/curriculum:grid-cols-3 @sm/curriculum:grid-cols-2 grid-cols-1"
							)}
						>
							{filteredDatas && filteredDatas.length ? (
								filteredDatas.map(data => (
									<Link
										href={`${router.asPath}/${data._id}`}
										key={data._id}
										className={classNames(
											"relative flex-col justify-between p-4 flex rounded-md overflow-hidden group shadow hover:shadow-md space-y-4 transition-all duration-300",
											colors.card,
											viewMode === "list"
												? "flex-1"
												: "col-span-1 aspect-video"
										)}
									>
										<p className="text-sm leading-5 font-semibold">
											{data.priority + 1}. {data.title}
										</p>
										<Icon
											className={classNames(
												"absolute bottom-2 right-0 h-1/3 aspect-square self-end group-hover:scale-110 transition-all duration-300",
												colors.icon
											)}
										/>
									</Link>
								))
							) : (
								<div className="col-span-full flex items-center justify-center text-center py-8 capitalize">
									{`No ${hierarchy} found`}
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

const Session = () => {
	const router = useRouter()
	const currentHierarchy = useStore(store => store.currentHierarchy)
	const overflowRef = useRef()
	const [query, setQuery] = useState("")

	const hierarchy = useMemo(() => {
		return hierarchyTypes[currentHierarchy][
			router.query.slug ? router.query.slug?.length + 1 : 1
		]
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentHierarchy])

	const [viewMode, setViewMode] = useState(
		hierarchy === "session" ? "list" : "grid"
	)

	const { data: sessions, isFetching } = useGetAllSessions()

	const filteredSessions =
		query === ""
			? sessions?.children ?? []
			: sessions?.children.filter(d =>
					d.title
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  )

	return (
		<>
			{isFetching ? (
				<div className="flex h-full items-center justify-center">
					Loading...
				</div>
			) : (
				<div className="h-full flex flex-col relative">
					<div className="p-4 pt-0 bg-neutral-50 dark:bg-neutral-800 flex sm:flex-nowrap flex-wrap gap-4 justify-between items-center shadow-sm sticky top-0 z-20 border-b-2 border-neutral-200 dark:border-neutral-700">
						<div className="text-lg xl:max-w-1/2 w-full leading-6 font-medium flex space-x-2 items-center">
							<Link
								href={router.asPath
									.split("/")
									.slice(0, -1)
									.join("/")}
								className="dark:bg-white/5 p-0.5 rounded-md group border border-neutral-300 dark:border-neutral-700"
							>
								<ArrowSmallLeftIcon className="h-9 w-9 text-slate-900 dark:text-slate-200" />
							</Link>
							<div className="text-lg leading-8 font-medium">
								Sessions
							</div>
						</div>
						<div className="flex space-x-2 items-center justify-end xl:w-auto w-full">
							<div className="flex-1 flex rounded-md shadow-sm">
								<div className="flex-1 relative flex items-stretch focus-within:z-10">
									<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<MagnifyingGlassIcon
											className="h-5 w-5 text-slate-400 group-focus-within:text-slate-900"
											aria-hidden="true"
										/>
									</div>
									<input
										type="search"
										name="search"
										id="search"
										autoComplete="off"
										className="block md:min-w-40 w-full rounded-md border-0 bg-white/5 py-2 pl-10 pr-3.5 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 rounded-r-none"
										placeholder="Search"
										onChange={e => setQuery(e.target.value)}
									/>
								</div>
								<button
									type="button"
									disabled
									className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 bg-white/5 disabled:cursor-not-allowed"
								>
									<BarsArrowUpIcon
										className="-ml-0.5 h-5 w-5 text-slate-400"
										aria-hidden="true"
									/>
									Sort
								</button>
							</div>
							<button
								className="h-full p-2.5 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 bg-white/5 rounded-md hover:shadow-md"
								onClick={() =>
									setViewMode(prev =>
										prev === "list" ? "grid" : "list"
									)
								}
							>
								{viewMode === "list" ? (
									<Bars3CenterLeftIcon
										className="h-5 w-5 text-slate-400"
										aria-hidden="true"
									/>
								) : (
									<Squares2X2Icon
										className="h-5 w-5 text-slate-400"
										aria-hidden="true"
									/>
								)}
							</button>
						</div>
					</div>
					<div className="@container/session p-4 overflow-y-scroll scrollbar">
						{filteredSessions && filteredSessions.length ? (
							<div className="gap-4 grid @5xl/session:grid-cols-5 @4xl/session:grid-cols-4 @md/session:grid-cols-3 @sm/session:grid-cols-2 grid-cols-1">
								<Sessions sessions={filteredSessions} />
							</div>
						) : (
							<div className="col-span-full flex items-center justify-center text-center py-8 capitalize">
								No Sessions found
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}

const CohortInfoWrapper = ({ children }) => {
	const currentHierarchy = useStore(store => store.currentHierarchy)

	const { isFetching } = useGetOneCohort({
		disabled: currentHierarchy !== null,
	})

	if (isFetching) return <div>Loading...</div>
	return children
}

const CohortDataWrapper = () => {
	const router = useRouter()
	const currentHierarchy = useStore(store => store.currentHierarchy)

	const hierarchy = useMemo(() => {
		return hierarchyTypes[currentHierarchy][
			router.query.slug ? router.query.slug?.length + 1 : 1
		]
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentHierarchy])

	return hierarchy ? (
		hierarchy !== "session" ? (
			<Curriculum hierarchy={hierarchy} />
		) : hierarchy === "session" ? (
			<Session />
		) : null
	) : null
}

const CohortId = () => (
	<CohortInfoWrapper>
		<CohortDataWrapper />
	</CohortInfoWrapper>
)

export default CohortId
