import Image from "next/image"

const Home = () => {
	return (
		<>
			<div className="flex items-center justify-center h-full">
				<Image
					className="dark:block hidden"
					src="https://lucdn.letsupgrade.net/lu_White_0f8c91d7a1.png"
					alt="Next.js Logo"
					width={180}
					height={40}
					priority
				/>
				<Image
					className="dark:hidden block"
					src="https://lucdn.letsupgrade.net/lu_Black_f2328beac0.png"
					alt="Next.js Logo"
					width={180}
					height={40}
					priority
				/>
			</div>
		</>
	)
}

export default Home
