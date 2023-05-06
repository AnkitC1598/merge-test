import { ExclamationCircleIcon } from "@heroicons/react/24/solid"

const Error = ({ statusCode }) => {
	return (
		<>
			<div className="flex flex-col gap-4 items-center justify-center text-center text-white">
				<ExclamationCircleIcon className="text-red-400 h-20 w-20" />
				{statusCode ? (
					<>
						<div className="flex items-center justify-center text-center text-white">
							<h1 className="inline-block mr-5 pr-6 text-2xl leading-tight border-r">
								{statusCode}
							</h1>
							<div className="inline-block text-left">
								<h2 className="text-sm">
									This page could not be found
								</h2>
							</div>
						</div>
					</>
				) : (
					<h1 className="inline-block text-2xl leading-tight">
						An error occurred on client
					</h1>
				)}
			</div>
		</>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
