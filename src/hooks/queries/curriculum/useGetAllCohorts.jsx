import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import CurriculumQueries from "~/queries/curriculum"
import { useStore } from "~/store"

const useGetAllCohorts = () => {
	const { orgId, dispatch } = useStore(store => ({
		orgId: store.orgInfo?.orgId ?? null,
		dispatch: store.dispatch,
	}))

	const { data, isFetching } = useQuery(
		["cohorts", { orgId }],
		CurriculumQueries.getCohorts,
		{
			retry: 0,
			enabled: !!orgId,
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
				console.debug(`🚀 ~ useGetAllCohorts ~ errMsg:`, errMsg)
				toast.error(errMsg)
			},
		}
	)
	return { data, isFetching }
}

export default useGetAllCohorts
