import Session from "@/content/src/pages"
import { useContentStore } from "@/content/src/store"
import {
	useHandRaiseEmitter,
	useMeetingEmitter,
} from "@/plugins/src/sockets/emitters"
import { usePluginsSocketStore, usePluginsStore } from "@/plugins/src/store"
import { classNames } from "@/web-core/src/utils"
import {
	Bars3CenterLeftIcon,
	ChevronRightIcon,
	MagnifyingGlassIcon,
	Squares2X2Icon,
} from "@heroicons/react/20/solid"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useMemo, useRef, useState } from "react"
import { Back } from "~/components/atoms"
import Loading from "~/components/atoms/Loading"
import { Breadcrumb } from "~/components/molecules"
import { Sessions } from "~/components/organisms"
import {
	useGetAllChapters,
	useGetAllSessions,
	useGetAllSubjects,
	useGetAllTerms,
	useGetOneCohort,
} from "~/hooks/queries/curriculum"
import { useStore } from "~/store"
import { ChapterIcon, SubjectIcon, TermIcon } from "~/svgs"

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

const CurriculumList = ({ hierarchy }) => {
	const router = useRouter()
	const overflowRef = useRef()
	const [query, setQuery] = useState("")
	const [viewMode, setViewMode] = useState("grid")
	const { currentHierarchy, orgName, cohortTitle } = useStore(store => ({
		currentHierarchy: store.currentHierarchy,
		orgName: store.orgInfo?.name ?? null,
		cohortTitle: store.cohortTitle ?? null,
	}))

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

	const prevTitle = useMemo(() => {
		if (hierarchyData) {
			const hierarchyIdx = hierarchyTypes[currentHierarchy].findIndex(
				h => h === hierarchy
			)
			if (hierarchyIdx === 1) return null
			const prevHierarchy =
				hierarchyTypes[currentHierarchy][hierarchyIdx - 2]
			return hierarchyData[prevHierarchy]?.title
		}
		return null
	}, [currentHierarchy, hierarchy, hierarchyData])

	return (
		<>
			{isFetching ? (
				<div className="flex h-navScreen w-screen items-center justify-center">
					<Loading />
				</div>
			) : (
				<>
					<Head>
						<title>
							{hierarchy ===
								hierarchyTypes[currentHierarchy][1] ?? "cohort"
								? null
								: hierarchyData?.title + " -" ?? ""}{" "}
							{cohortTitle ?? "Cohort"} - {orgName ?? "Lisa"}
						</title>
					</Head>
					<div className="h-full flex-1 flex flex-col relative">
						<div className="p-4 px-4 sm:px-6 lg:px-8 flex sm:flex-nowrap flex-wrap gap-4 justify-between items-center shadow-sm bg-neutral-50 dark:bg-neutral-900 sticky top-0 z-20 border-b-2 border-neutral-200 dark:border-neutral-700">
							<div className="text-lg xl:max-w-1/2 w-full leading-6 font-medium flex space-x-2 items-center">
								<Back />
								<div
									ref={overflowRef}
									className="overflow-hidden w-max"
								>
									<div
										className={classNames(
											"whitespace-nowrap delay-1000",
											overflowRef.current &&
												overflowRef.current
													.scrollWidth >
													overflowRef.current
														.clientWidth
												? "animate-marquee"
												: ""
										)}
									>
										<div className="w-full flex items-center gap-2">
											{prevTitle ? (
												<>
													<Link
														href={router.asPath
															.split("/")
															.slice(0, -1)
															.join("/")}
														className="text-base text-slate-500 dark:text-slate-400"
													>
														{prevTitle}
													</Link>
													<ChevronRightIcon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
												</>
											) : null}
											<span>
												{hierarchyData?.title ?? ""}
											</span>
										</div>
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
											className="block md:min-w-40 w-full rounded-md border-0 bg-white/5 py-2 pl-10 pr-3.5 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
											// rounded-r-none"
											placeholder="Search"
											onChange={e =>
												setQuery(e.target.value)
											}
										/>
									</div>
									{/* <button
										type="button"
										disabled
										className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 bg-white/5 disabled:cursor-not-allowed"
									>
										<BarsArrowUpIcon
											className="-ml-0.5 h-5 w-5 text-slate-400"
											aria-hidden="true"
										/>
										Sort
									</button> */}
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
						<div className="@container/curriculum p-4 px-4 sm:px-6 lg:px-8 h-full overflow-y-scroll scrollbar">
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
												{data.priority + 1}.{" "}
												{data.title}
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
				</>
			)}
		</>
	)
}

const SessionList = () => {
	const router = useRouter()
	const [query, setQuery] = useState("")
	const overflowRef = useRef()
	const { currentHierarchy, cohortTitle, orgName } = useStore(store => ({
		currentHierarchy: store.currentHierarchy,
		cohortTitle: store.cohortTitle ?? null,
		orgName: store.orgInfo?.name ?? null,
	}))
	const dispatch = usePluginsStore(store => store.dispatch)

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

	const prevTitle = useMemo(() => {
		if (sessions) {
			const hierarchyIdx = hierarchyTypes[currentHierarchy].findIndex(
				h => h === "session"
			)
			if (hierarchyIdx === 1) return null
			return sessions?.title
		}
		return null
	}, [currentHierarchy, sessions])

	useEffect(() => {
		dispatch({
			type: "SET_DRIVE_NAV",
			payload: "auto",
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.asPath])

	return (
		<>
			{isFetching ? (
				<div className="flex h-navScreen w-screen items-center justify-center">
					<Loading />
				</div>
			) : (
				<>
					<Head>
						<title>
							{prevTitle ?? ""} - {cohortTitle ?? "Cohort"} -{" "}
							{orgName ?? "Lisa"}
						</title>
					</Head>
					<div className="h-full flex-1 flex flex-col relative">
						<div className="p-4 px-4 sm:px-6 lg:px-8 flex sm:flex-nowrap flex-wrap gap-4 justify-between items-center shadow-sm bg-neutral-50 dark:bg-neutral-900 sticky top-0 z-20 border-b-2 border-neutral-200 dark:border-neutral-700">
							<div className="text-lg xl:max-w-1/2 w-full leading-6 font-medium flex space-x-2 items-center">
								<Back />
								<div
									ref={overflowRef}
									className="overflow-hidden w-max"
								>
									<div
										className={classNames(
											"whitespace-nowrap delay-1000",
											overflowRef.current &&
												overflowRef.current
													.scrollWidth >
													overflowRef.current
														.clientWidth
												? "animate-marquee"
												: ""
										)}
									>
										<div className="w-full flex items-center gap-2">
											{prevTitle ? (
												<>
													<Link
														href={router.asPath
															.split("/")
															.slice(0, -1)
															.join("/")}
														className="text-base text-slate-500 dark:text-slate-400"
													>
														{prevTitle}
													</Link>
													<ChevronRightIcon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
												</>
											) : null}
											<span>Sessions</span>
										</div>
									</div>
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
											className="block md:min-w-40 w-full rounded-md border-0 bg-white/5 py-2 pl-10 pr-3.5 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
											// rounded-r-none"
											placeholder="Search"
											onChange={e =>
												setQuery(e.target.value)
											}
										/>
									</div>
									{/* <button
										type="button"
										disabled
										className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 bg-white/5 disabled:cursor-not-allowed"
									>
										<BarsArrowUpIcon
											className="-ml-0.5 h-5 w-5 text-slate-400"
											aria-hidden="true"
										/>
										Sort
									</button> */}
								</div>
							</div>
						</div>
						<div className="@container/session p-4 px-4 sm:px-6 lg:px-8 overflow-y-scroll scrollbar">
							{filteredSessions && filteredSessions.length ? (
								<div className="gap-4 grid @4xl/session:grid-cols-4 @md/session:grid-cols-3 @sm/session:grid-cols-2 grid-cols-1">
									<Sessions sessions={filteredSessions} />
								</div>
							) : (
								<div className="col-span-full flex items-center justify-center text-center py-8 capitalize">
									No Sessions found
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	)
}

const CohortInfoWrapper = ({ children }) => {
	const currentHierarchy = useStore(store => store.currentHierarchy)

	const { isFetching } = useGetOneCohort({
		disabled: currentHierarchy !== null,
	})

	if (isFetching)
		return (
			<div className="w-full h-navScreen flex items-center justify-center">
				<Loading />
			</div>
		)
	return children
}

const CohortDataWrapper = () => {
	const router = useRouter()
	const { currentHierarchy, cohortTitle, orgName, dispatch } = useStore(
		store => ({
			currentHierarchy: store.currentHierarchy,
			cohortTitle: store.cohortTitle,
			orgName: store.orgInfo?.name ?? null,
			dispatch: store.dispatch,
		})
	)

	const hierarchy = useMemo(() => {
		const hierarchyArr = hierarchyTypes[currentHierarchy]
		if (!hierarchyArr) return null
		return (
			hierarchyArr[
				router.query.slug ? router.query.slug?.length + 1 : 1
			] ?? null
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentHierarchy])

	useEffect(() => {
		dispatch({
			type: "SET_STATE",
			payload: { pageHierarchy: hierarchy ?? "inSession" },
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hierarchy])

	return (
		<>
			<Head>
				<title>
					{hierarchy ? null : "Session - "}
					{cohortTitle ?? "Cohort"} - {orgName + "" ?? "Lisa"}
				</title>
			</Head>
			<Breadcrumb
				breadcrumbs={[
					{ label: "Cohorts", to: "/cohorts" },
					{ label: cohortTitle },
				]}
				className="border-t bg-neutral-50 dark:bg-neutral-900 z-50 sticky top-0"
			/>
			<div className="flex flex-1">
				{hierarchy ? (
					hierarchy !== "session" ? (
						<CurriculumList hierarchy={hierarchy} />
					) : (
						<SessionList />
					)
				) : (
					<SessionView />
				)}
			</div>
		</>
	)
}

const SessionView = () => {
	const { user, orgInfo, currentHierarchy } = useStore(store => ({
		user: store.user,
		orgInfo: store.orgInfo,
		currentHierarchy: store.currentHierarchy,
	}))
	const {
		meetingSocketConnected,
		meetingSocket,
		meetingSocketRoomId,
		handRaiseSocketConnected,
		handRaiseSocket,
		handRaiseSocketRoomId,
	} = usePluginsSocketStore(store => ({
		meetingSocketConnected: store.meetingSocket.connected,
		meetingSocket: store.meetingSocket.socket,
		meetingSocketRoomId: store.meetingSocket.roomId,
		handRaiseSocketConnected: store.handRaiseSocket.connected,
		handRaiseSocket: store.handRaiseSocket.socket,
		handRaiseSocketRoomId: store.handRaiseSocket.roomId,
	}))
	const hasEnded = useContentStore(store => store.session?.config?.hasEnded)

	const { joinMeetingSocket, leave: leaveMeetingSocket } = useMeetingEmitter()
	const { joinHandRaiseSocket, leave: leaveHandRaiseSocket } =
		useHandRaiseEmitter()

	useEffect(() => {
		if (
			meetingSocketRoomId === null &&
			meetingSocketConnected &&
			meetingSocket
		)
			joinMeetingSocket({ currentHierarchy })

		return () => {
			if (meetingSocketRoomId)
				leaveMeetingSocket({ roomId: meetingSocketRoomId })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [meetingSocketRoomId, meetingSocketConnected, meetingSocket])

	useEffect(() => {
		if (
			handRaiseSocketRoomId === null &&
			handRaiseSocketConnected &&
			handRaiseSocket
		)
			joinHandRaiseSocket({ currentHierarchy })

		return () => {
			if (handRaiseSocketRoomId)
				leaveHandRaiseSocket({ roomId: handRaiseSocketRoomId })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handRaiseSocketRoomId, handRaiseSocketConnected, handRaiseSocket])

	return (
		<div
			className={classNames(
				"relative sm:pt-8 pt-4 flex-1 flex",
				hasEnded ? "sm:pb-8 pb-4" : ""
			)}
		>
			<div className="gridLockBlueBeams -z-20 absolute inset-x-0 top-0 h-full bg-no-repeat dark:mix-blend-color bg-center" />
			<Session
				userData={user}
				orgInfo={orgInfo}
				currentHierarchy={currentHierarchy}
			/>
		</div>
	)
}

const CohortId = () => (
	<CohortInfoWrapper>
		<CohortDataWrapper />
	</CohortInfoWrapper>
)

export default CohortId
