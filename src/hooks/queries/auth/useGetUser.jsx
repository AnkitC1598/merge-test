import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import AuthQueries from "~/queries/auth"
import { useStore } from "~/store"

const useGetUser = () => {
	const dispatch = useStore(store => store.dispatch)

	const { data, isLoading } = useQuery(["user"], AuthQueries.profile, {
		retry: 0,
		onSuccess: resp => {
			resp = resp.data.results.data
			dispatch({
				type: "SET_STATE",
				payload: { user: resp },
			})
		},
		onError: error => {
			console.debug(`🚀 ~ useGetUser ~ error:`, error)
			toast.error(error.code)
		},
	})

	return { data, isLoading }
}

export default useGetUser
