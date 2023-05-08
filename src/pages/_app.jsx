import { compMotionConfig } from "@/web-core/src/configs"
import { useDarkMode } from "@/web-core/src/hooks"
import CookieService from "@/web-core/src/services/cookieService"
import queryClient from "@/web-core/src/services/queryClient"
import "@/web-core/src/styles/globals.css"
import { classNames, setDocHeight } from "@/web-core/src/utils"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { AnimatePresence, motion } from "framer-motion"
import { Inter } from "next/font/google"
import Head from "next/head"
import { Router, useRouter } from "next/router"
import nprogress from "nprogress"
import "nprogress/nprogress.css"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useGetUser } from "~/hooks/queries/auth"
import { useGetOrgInfo } from "~/hooks/queries/org"
import { Default, Empty } from "~/layouts"
import { useStore } from "~/store"
import "~/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

const Layouts = {
	default: Default,
	empty: Empty,
}

nprogress.configure({
	minimum: 0.3,
	easing: "ease",
	speed: 800,
	showSpinner: true,
})

Router.events.on("routeChangeStart", () => nprogress.start())
Router.events.on("routeChangeComplete", () => nprogress.done())
Router.events.on("routeChangeError", () => nprogress.done())

const AppWithQuery = ({ Component, pageProps }) => {
	const router = useRouter()
	const { userId, orgId } = useStore(store => ({
		userId: store.user?._id ?? null,
		orgId: store.orgInfo?.orgId ?? null,
	}))
	const Layout = Layouts[Component.layout] ?? Layouts.default

	const [darkModeEnabled] = useDarkMode()

	useGetUser()

	useGetOrgInfo(
		window.location.hostname === "localhost" ||
			window.location.hostname.includes("ngrok") ||
			window.location.hostname.includes("vercel")
			? "afw.lisaapp.in"
			: window.location.hostname
	)

	return (
		<>
			<Head>
				<title>Lisa</title>
				<meta
					name="description"
					content="Lisa"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main
				className={classNames(
					"select-none overflow-hidden relative isolate scrollbar-hide bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
					inter.className
				)}
			>
				<div className="flex justify-start h-screen w-screen">
					{router.isReady && !!userId && !!orgId ? (
						<Layout
							requires={Component.requires}
							{...(Component.layoutProps ?? {})}
						>
							{layoutProps => (
								<AnimatePresence mode="wait">
									<motion.div
										key={router.asPath}
										initial="initialState"
										animate="animateState"
										exit="exitState"
										transition="transitionState"
										variants={compMotionConfig}
										className="sm:py-8 py-4 min-h-full"
									>
										<Component
											{...pageProps}
											{...layoutProps}
										/>
									</motion.div>
								</AnimatePresence>
							)}
						</Layout>
					) : (
						<>
							<div className="w-full px-2 lg:px-16 xl:px-20 bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200 flex items-center justify-center">
								Loading...
							</div>
						</>
					)}
				</div>
			</main>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				limit={2}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={darkModeEnabled ? "dark" : "light"}
			/>
		</>
	)
}

const App = props => {
	const router = useRouter()
	const [ready, setReady] = useState(false)

	useDarkMode()

	useEffect(() => {
		if (router.isReady && window.location.pathname !== "/auth") {
			const launchCode = router.query.launchCode
			if (launchCode) {
				CookieService.updateRefreshToken(launchCode)
				router.replace({
					pathname: router.pathname,
					query: {},
					shallow: true,
				})
				setReady(true)
			} else if (!CookieService.getAccessToken()) {
				if (
					CookieService.getAccessToken() ||
					CookieService.getRefreshToken()
				) {
					if (router.pathname !== "/") router.push("/")
				} else window.location.href = "/auth"
			} else setReady(true)
		}

		setDocHeight()
		window.addEventListener("resize", setDocHeight)

		return () => window.removeEventListener("resize", setDocHeight)
	}, [router])

	return (
		<QueryClientProvider client={queryClient}>
			{ready ? (
				<AppWithQuery {...props} />
			) : (
				<div className="h-screen w-screen flex items-center justify-center bg-white dark:bg-neutral-800 text-slate-900 dark:text-slate-200">
					<span>Loading...</span>
				</div>
			)}
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools
					position="bottom-right"
					initialIsOpen={true}
				/>
			)}
		</QueryClientProvider>
	)
}

export default App
