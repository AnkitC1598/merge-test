import { Disclosure, Transition } from "@headlessui/react"
import {
	Bars3Icon,
	BellIcon,
	BoltIcon,
	BoltSlashIcon,
	XMarkIcon,
} from "@heroicons/react/20/solid"
import Image from "next/image"
import { cloneElement } from "react"

const Default = ({ children }) => {
	return (
		<>
			<div className="flex flex-col lg:w-9/12 md:w-8/12 w-full mr-auto bg-neutral-50 dark:bg-neutral-800 border-r border-neutral-300 dark:border-neutral-700">
				<Disclosure as="nav">
					{({ open }) => (
						<>
							<div className="px-4 sm:px-6 lg:px-8 shadow dark:shadow-slate-700">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<div className="h-12 w-28 aspect-video relative overflow-hidden">
												<Image
													className="block dark:hidden"
													src="https://lucdn.letsupgrade.net/lu_Black_f2328beac0.png"
													alt="Lisa"
													fill
													priority
												/>
												<Image
													className="hidden dark:block"
													src="https://lucdn.letsupgrade.net/lu_White_0f8c91d7a1.png"
													alt="Lisa"
													fill
													priority
												/>
											</div>
										</div>
									</div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex items-center">
											<button
												type="button"
												className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-1 text-slate-700 dark:text-slate-200 hover:text-slate-800 dark:hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 border border-neutral-300 dark:border-neutral-700"
											>
												<span className="sr-only">
													Focus Mode
												</span>
												{true ? (
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
									<div className="-mr-2 flex sm:hidden">
										{/* Mobile menu button */}
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
									</div>
								</div>
							</div>
							<Transition
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Disclosure.Panel className="sm:hidden">
									<div className="border-t border-neutral-300 dark:border-neutral-700 pb-3 pt-4 shadow dark:shadow-slate-700">
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
							</Transition>
						</>
					)}
				</Disclosure>
				<div className="h-navScreen sm:p-8 p-4">
					{typeof children === "function"
						? children()
						: cloneElement(children, {})}
				</div>
			</div>
		</>
	)
}

export default Default
