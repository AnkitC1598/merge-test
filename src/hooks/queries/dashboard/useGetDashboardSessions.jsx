import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import DashboardQueries from "~/queries/dashboard"
import { useStore } from "~/store"

const useGetDashboardSessions = ({ type }) => {
	const dispatch = useStore(store => store.dispatch)

	const { data, isFetching } = useQuery(
		["cohorts", { type }],
		DashboardQueries.getSessions,
		{
			retry: 0,
			enabled: !!type,
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
				console.debug(`🚀 ~ useGetDashboardSessions ~ errMsg:`, errMsg)
				toast.error(errMsg)
			},
		}
	)
	return { data, isFetching }
}

export default useGetDashboardSessions
