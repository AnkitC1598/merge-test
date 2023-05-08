import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import OrgQueries from "~/queries/org"
import { useStore } from "~/store"

const useGetOrgInfo = domain => {
	const dispatch = useStore(store => store.dispatch)

	const { data, isLoading } = useQuery(
		[`org-${domain}`, domain],
		OrgQueries.getOrg,
		{
			retry: 0,
			enabled: !!domain,
			onSuccess: resp => {
				resp = resp.data.results.data
				document.title = `${resp.name} - Admin`
				dispatch({
					type: "SET_STATE",
					payload: { orgInfo: resp },
				})
			},
			onError: error => {
				console.debug(`🚀 ~ useGetOrgInfo ~ error:`, error)
				toast.error(error.code)
			},
		}
	)

	return { data, isLoading }
}

export default useGetOrgInfo
