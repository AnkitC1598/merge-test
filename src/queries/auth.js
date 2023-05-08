import { fetchWithToken } from "@/web-core/src/services/axios"

const AuthQueries = {
	profile: () => {
		return fetchWithToken.get("https://dev-api.lisaapp.net/v1/user/profile")
	},
}

export default AuthQueries
