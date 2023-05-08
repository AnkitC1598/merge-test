import { fetchWithoutToken } from "@/web-core/src/services/axios"

const OrgQueries = {
	getOrg: ({ queryKey }) => {
		const [_, domain] = queryKey
		return fetchWithoutToken.get(
			`https://dev-api.lisaapp.net/v1/organization/subdomain/details?domain=${domain}`
		)
	},
}

export default OrgQueries
