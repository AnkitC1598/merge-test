import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import CurriculumQueries from "~/queries/curriculum"
import { useStore } from "~/store"

const useGetOneCohort = ({ disabled }) => {
	const { query } = useRouter()
	const cohortId = query.cohortId
	const { orgId, dispatch } = useStore(store => ({
		orgId: store.orgInfo?.orgId ?? null,
		dispatch: store.dispatch,
	}))

	const { data, isFetching } = useQuery(
		["cohort", { cohortId, orgId }],
		CurriculumQueries.getCohort,
		{
			retry: 0,
			enabled: disabled === false && !!cohortId && !!orgId,
			onSuccess: resp => {
				dispatch({ type: "SET_LOADING", payload: false })
				dispatch({
					type: "SET_STATE",
					payload: {
						currentHierarchy: resp.type.map(t => t[0]).join(""),
					},
				})
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
				console.debug(`🚀 ~ useGetOneCohort ~ errMsg:`, errMsg)
				toast.error(errMsg)
			},
		}
	)
	return { data, isFetching }
}

export default useGetOneCohort
