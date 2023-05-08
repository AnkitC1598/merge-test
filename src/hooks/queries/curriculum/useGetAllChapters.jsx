import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import CurriculumQueries from "~/queries/curriculum"
import { useStore } from "~/store"

const hierarchyTypes = {
	ctsct: ["term", "subject", "chapter", "session"],
	cst: ["subject", "session"],
	ct: ["session"],
}

const genId = (slug, currentHierarchy) => {
	const hierarchy = hierarchyTypes[currentHierarchy]
	const id = {}
	hierarchy.forEach((type, i) => {
		id[type] = slug[i]
	})
	return id
}

const useGetAllChapters = () => {
	const router = useRouter()
	const { currentHierarchy, orgId, dispatch } = useStore(store => ({
		currentHierarchy: store.currentHierarchy,
		orgId: store.orgInfo?.orgId ?? null,
		dispatch: store.dispatch,
	}))
	const type = "subject"
	const id = genId(router.query.slug, currentHierarchy)[type]

	const { data, isFetching } = useQuery(
		["chapters", { type, id, orgId }],
		CurriculumQueries.getChapters,
		{
			retry: 0,
			enabled: !!id && !!type && !!orgId,
			onSuccess: () => {
				dispatch({ type: "SET_LOADING", payload: false })
			},
			onError: error => {
				dispatch({ type: "SET_LOADING", payload: false })
				let errMsg = ""
				if (!error.response) errMsg = error.message
				else if (
					Object.prototype.toString.call(error.response.data) ===
					"[object String]"
				) {
					errMsg = error.code
				} else {
					errMsg = error.response.data.results.data.error
				}
				console.debug(`🚀 ~ useGetAllChapters ~ errMsg:`, errMsg)
				toast.error(errMsg)
			},
		}
	)
	return { data, isFetching }
}

export default useGetAllChapters
