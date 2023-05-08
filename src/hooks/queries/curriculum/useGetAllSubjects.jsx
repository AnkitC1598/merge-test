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

const types = {
	ctsct: "term",
	cst: "cohort",
}

const genId = (slug, currentHierarchy) => {
	const hierarchy = hierarchyTypes[currentHierarchy]
	const id = {}
	hierarchy.forEach((type, i) => {
		id[type] = slug[i]
	})
	return id
}

const useGetAllSubjects = () => {
	const router = useRouter()
	const { currentHierarchy, orgId, dispatch } = useStore(store => ({
		currentHierarchy: store.currentHierarchy,
		orgId: store.orgInfo?.orgId ?? null,
		dispatch: store.dispatch,
	}))
	const type = types[currentHierarchy]
	const id =
		type !== "cohort"
			? router.query.slug
				? genId(router.query.slug, currentHierarchy)[type]
				: null
			: router.query.cohortId

	const { data, isFetching } = useQuery(
		["subjects", { type, id, orgId }],
		CurriculumQueries.getSubjects,
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
				console.debug(`🚀 ~ useGetAllSubjects ~ errMsg:`, errMsg)
				toast.error(errMsg)
			},
		}
	)
	return { data, isFetching }
}

export default useGetAllSubjects
