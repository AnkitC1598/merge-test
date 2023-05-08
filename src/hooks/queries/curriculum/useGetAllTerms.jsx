import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import CurriculumQueries from "~/queries/curriculum"
import { useStore } from "~/store"

const useGetAllTerms = () => {
	const router = useRouter()
	const { orgId, dispatch } = useStore(store => ({
		orgId: store.orgInfo?.orgId ?? null,
		dispatch: store.dispatch,
	}))
	const type = "cohort"
	const id = router.query.cohortId

	const { data, isFetching } = useQuery(
		["terms", { type, id, orgId }],
		CurriculumQueries.getTerms,
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
				console.debug(`🚀 ~ useGetAllTerms ~ errMsg:`, errMsg)
				toast.error(errMsg)
			},
		}
	)

	return { data, isFetching }
}

export default useGetAllTerms
