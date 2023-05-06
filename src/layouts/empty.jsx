import { cloneElement } from "react"

const Empty = ({ children }) => {
	return (
		<>
			<div className="flex-1 flex justify-center items-center">
				{typeof children === "function"
					? children()
					: cloneElement(children, {})}
			</div>
		</>
	)
}

export default Empty
