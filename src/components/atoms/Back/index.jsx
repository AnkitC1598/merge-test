import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"

const Back = () => {
	const router = useRouter()

	return (
		<>
			<Link
				href={router.asPath.split("/").slice(0, -1).join("/")}
				className="p-0.5 rounded-md group border border-transparent hover:border-neutral-300 hover:dark:border-neutral-700 transition-all duration-500 ease-in-out"
			>
				<ArrowSmallLeftIcon className="h-6 w-6 text-slate-900 dark:text-slate-200" />
			</Link>
		</>
	)
}

export default Back
