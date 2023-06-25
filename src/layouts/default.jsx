import SidebarView from "@/plugins/src/pages"
import { usePluginsStore } from "@/plugins/src/store"
import { classNames } from "@/web-core/src/utils"
import { Disclosure } from "@headlessui/react"
import { BoltIcon, BoltSlashIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Resizable } from "re-resizable"
import { cloneElement, useEffect, useMemo, useState } from "react"
import { useStore } from "~/store"
import packageJson from "../../package.json"

const tabVisibility = {
	default: ["chat", "profile", "settings"],
	cohort: ["chat", "drive", "users", "profile", "settings"],
	term: ["chat", "drive", "users", "profile", "settings"],
	subject: [
		"chat",
		"discussions",
		"drive",
		"quiz",
		"users",
		"profile",
		"settings",
	],
	chapter: [
		"chat",
		"discussions",
		"drive",
		"quiz",
		"users",
		"profile",
		"settings",
	],
	session: [
		"topics",
		"chat",
		"discussions",
		"pastebin",
		"drive",
		"quiz",
		"users",
		"profile",
		"settings",
	],
}

const hierarchyRestrictions = {
	ctsct: ["cohort", "term", "subject", "chapter", "session"],
	cst: ["cohort", "subject", "session"],
	ct: ["cohort", "session"],
}

const getCurrentLevel = (currentHierarchy, query) => {
	let currentHierarchyArray = hierarchyRestrictions[currentHierarchy]
	if (!currentHierarchyArray) return null
	let currentLevel = null
	if (
		currentHierarchyArray &&
		currentHierarchyArray.length > 0 &&
		query.slug
	) {
		currentLevel = currentHierarchyArray[query.slug.length]
	} else currentLevel = currentHierarchyArray[0]
	return currentLevel
}

const Default = ({ children }) => {
	const router = useRouter()
	const { orgInfo, user, currentHierarchy, dispatch } = useStore(store => ({
		orgInfo: store.orgInfo,
		user: store.user,
		currentHierarchy: store.currentHierarchy,
		dispatch: store.dispatch,
	}))
	const { sideBarOpen, dispatchToPlugins } = usePluginsStore(store => ({
		sideBarOpen: store.sideBarOpen,
		dispatchToPlugins: store.dispatch,
	}))
	const idType = getCurrentLevel(currentHierarchy, router.query)

	const [viewWidth, setViewWidth] = useState("70%")

	const enableFocusMode = () => {
		dispatchToPlugins({
			type: "SET_STATE",
			payload: { sideBarOpen: !sideBarOpen, focusMode: true },
		})
	}

	const enabledSections = useMemo(() => {
		let currentHierarchyArray = hierarchyRestrictions[currentHierarchy]
		if (currentHierarchyArray === undefined) return tabVisibility["default"]

		currentHierarchyArray = currentHierarchyArray.slice(1)
		let ids = {}
		if (router.query.cohortId) ids["cohort"] = router.query.cohortId
		if (currentHierarchyArray.length > 0 && router.query.slug) {
			currentHierarchyArray.forEach((h, idx) => {
				ids = {
					...ids,
					[h]: router.query.slug[idx] ?? null,
				}
			})
		}
		Object.keys(ids).forEach(key => ids[key] === null && delete ids[key])

		return tabVisibility[Object.keys(ids).at(-1) ?? "default"]
	}, [currentHierarchy, router])

	const handleResize = () => {
		setViewWidth(
			document.getElementById("mainContainer")?.clientWidth ?? 0 + "px"
		)
	}

	useEffect(() => {
		handleResize()
		if (document.getElementById("mainContainer"))
			new ResizeObserver(handleResize).observe(
				document.getElementById("mainContainer")
			)
	}, [])

	return (
		<>
			<Resizable
				defaultSize={{
					width: "70%",
				}}
				maxWidth="75%"
				minWidth="65%"
				enable={{
					top: false,
					right: true,
					bottom: false,
					left: false,
					topRight: false,
					bottomRight: false,
					bottomLeft: false,
					topLeft: false,
				}}
				className="flex flex-col h-full"
				handleClasses={{
					right: "hover:bg-neutral-800 active:bg-neutral-800 w-2 right-2 transition-all duration-500 ease-in-out after:content-[''] after:absolute after:top-[calc(50%_-_20px)] after:left-1/2 after:h-5 after:w-1 hover:after:visible active:after:visible after:invisible after:col-resize after:bg-neutral-300 after:rounded after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:shadow after:dark:bg-neutral-700 after:dark:shadow-neutral-700 after:active:bg-neutral-400 after:active:dark:bg-neutral-600 after:active:shadow-neutral-600 after:active:dark:shadow-neutral-600 after:transition-all after:duration-500 after:ease-in-out",
				}}
				handleStyles={{
					right: {
						right: "0px",
					},
				}}
				onResize={handleResize}
			>
				<div
					id="mainContainer"
					className={classNames(
						"mainSection @container w-full h-full flex flex-col bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-300 dark:border-neutral-700 transition-all duration-500 ease-in-out",
						!sideBarOpen && "sm:w-excludeSidebarIcon"
					)}
				>
					<Disclosure
						as="nav"
						className="relative"
					>
						{({ open }) => (
							<>
								<div className="px-4 sm:px-6 lg:px-8 shadow dark:shadow-neutral-700 relative z-30">
									<div className="flex h-16 items-center justify-between">
										<div className="flex items-center">
											<Link
												href="/"
												className="flex-shrink-0"
											>
												<div className="h-12 w-28 aspect-video relative overflow-hidden">
													<Image
														className="block dark:hidden object-contain object-left"
														src={orgInfo?.logo}
														alt={orgInfo?.name}
														fill
														priority
													/>
													<Image
														className="hidden dark:block object-contain object-left"
														src={orgInfo?.logo}
														alt={orgInfo?.name}
														fill
														priority
													/>
												</div>
											</Link>
										</div>
										<div className="flex items-center gap-2">
											{idType === "session" ? (
												<>
													<div className="hidden sm:ml-6 sm:block">
														<div className="flex items-center">
															<button
																type="button"
																className="rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 p-1 text-yellow-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 border border-neutral-300 dark:border-neutral-700"
																onClick={
																	enableFocusMode
																}
															>
																<span className="sr-only">
																	Focus Mode
																</span>
																{sideBarOpen ? (
																	<BoltIcon
																		className="h-6 w-6"
																		aria-hidden="true"
																	/>
																) : (
																	<BoltSlashIcon
																		className="h-6 w-6"
																		aria-hidden="true"
																	/>
																)}
															</button>
														</div>
													</div>
													<button
														type="button"
														className="sm:hidden rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 p-1 text-yellow-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 border border-neutral-300 dark:border-neutral-700"
														onClick={
															enableFocusMode
														}
													>
														<span className="sr-only">
															Focus Mode
														</span>
														{sideBarOpen ? (
															<BoltIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														) : (
															<BoltSlashIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														)}
													</button>
												</>
											) : null}
											<span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30">
												Beta
											</span>
										</div>
										{/* <div className="-mr-2 flex sm:hidden">
										<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
											<span className="sr-only">
												Open main menu
											</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div> */}
									</div>
								</div>
								{/* <Transition
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Disclosure.Panel className="sm:hidden">
									<div className="border-t border-neutral-300 dark:border-neutral-700 pb-3 pt-4 shadow dark:shadow-neutral-700">
										<div className="flex items-center px-5">
											<div className="flex-shrink-0">
												<div className="h-10 w-10 rounded-full relative overflow-hidden">
													<Image
														src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
														alt=""
														fill
														priority
													/>
												</div>
											</div>
											<div className="ml-3">
												<div className="text-base font-medium text-white">
													Tom Cook
												</div>
												<div className="text-sm font-medium text-slate-400">
													tom@example.com
												</div>
											</div>
											<button
												type="button"
												className="ml-auto flex-shrink-0 rounded-full bg-neutral-50 dark:bg-neutral-800 p-1 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800"
											>
												<span className="sr-only">
													View notifications
												</span>
												<BellIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</button>
										</div>
										<div className="mt-3 space-y-1 px-2">
											<Disclosure.Button
												as="a"
												href="#"
												className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 hover:bg-neutral-700 hover:text-white"
											>
												Your Profile
											</Disclosure.Button>
											<Disclosure.Button
												as="a"
												href="#"
												className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 hover:bg-neutral-700 hover:text-white"
											>
												Settings
											</Disclosure.Button>
											<Disclosure.Button
												as="a"
												href="#"
												className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 hover:bg-neutral-700 hover:text-white"
											>
												Sign out
											</Disclosure.Button>
										</div>
									</div>
								</Disclosure.Panel>
							</Transition> */}
							</>
						)}
					</Disclosure>
					<div className="flex-1 h-navScreen overflow-x-hidden overflow-y-scroll scrollbar">
						{typeof children === "function"
							? children()
							: cloneElement(children, {})}
					</div>
				</div>
			</Resizable>
			<SidebarView
				dispatchToApp={dispatch}
				version={packageJson?.version}
				userData={user}
				orgInfo={orgInfo}
				instance="student"
				enabledSections={enabledSections}
				defaultSection={enabledSections[0]}
				currentHierarchy={currentHierarchy}
				viewWidth={viewWidth}
			/>
		</>
	)
}

export default Default
