import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { BreadcrumbItem } from "../../atoms"

const Breadcrumb = ({ breadcrumbs = [] }) => {
	if (Object.prototype.toString.call(breadcrumbs) !== "[object Array]")
		throw new Error("Breadcrumb: breadcrumbs must be an array")

	return (
		<>
			{/* <nav
				className="flex"
				aria-label="Breadcrumb"
			>
				<ol
					role="list"
					className="flex items-center space-x-4 overflow-x-auto"
				>
					<Link
						href="/"
						className="text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300"
					>
						<>
							<HomeIcon
								className="h-5 w-5 flex-shrink-0"
								aria-hidden="true"
							/>
							<span className="sr-only">Home</span>
						</>
					</Link>
					<span className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide">
						{breadcrumbs?.map(breadcrumb => (
							<BreadcrumbItem
								key={breadcrumb.name}
								label={breadcrumb.label}
								name={breadcrumb.name}
								to={breadcrumb.to}
							/>
						))}
					</span>
				</ol>
			</nav> */}
			<nav
				className="flex border-b border-neutral-200 dark:border-neutral-700 overflow-hidden"
				aria-label="Breadcrumb"
			>
				<ol
					role="list"
					className="flex items-center w-full min-h-11 space-x-4 overflow-x-scroll scrollbar-hide px-4 sm:px-6 lg:px-8"
				>
					<li>
						<Link
							href="/"
							className="text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-300"
						>
							<>
								<HomeIcon
									className="h-5 w-5 flex-shrink-0"
									aria-hidden="true"
								/>
								<span className="sr-only">Home</span>
							</>
						</Link>
					</li>
					{breadcrumbs?.map(breadCrumb =>
						breadCrumb.label ? (
							<li
								key={breadCrumb.label}
								className="flex"
							>
								<div className="flex items-center">
									<svg
										className="h-full w-6 flex-shrink-0 text-neutral-200 dark:text-neutral-700"
										viewBox="0 0 24 44"
										preserveAspectRatio="none"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
									</svg>
									{breadCrumb.to ? (
										<Link
											href={breadCrumb.to}
											className="ml-4 text-sm font-medium whitespace-nowrap"
										>
											{breadCrumb.label}
										</Link>
									) : (
										<div className="ml-4 text-sm font-semibold text-purple-500 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-400 whitespace-nowrap">
											{breadCrumb.label}
										</div>
									)}
								</div>
							</li>
						) : null
					)}
				</ol>
			</nav>
		</>
	)
}

export default Breadcrumb
