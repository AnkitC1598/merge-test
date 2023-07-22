import { classNames } from "@/web-core/src/utils"

const Loading = ({ className = "" }) => {
	return (
		<div
			style={{
				borderRightColor: "#933ea040",
				borderBottomColor: "#933ea040",
				borderLeftColor: "#933ea040",
			}}
			className={classNames(
				"w-16 h-16 border-4 border-solid rounded-full animate-spin border-purple-600",
				className
			)}
		/>
	)
}

export default Loading
