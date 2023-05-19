import { fetchWithToken } from "@/web-core/src/services/axios"

const DashboardQueries = {
	getSessions: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { type } = data
		const resp = await fetchWithToken.get(`/v1/dashboard/sessions/${type}`)
		return resp.data.results.data
	},
}

export default DashboardQueries
