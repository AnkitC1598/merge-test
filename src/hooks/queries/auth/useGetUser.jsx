import CookieService from "@/web-core/src/services/cookieService"
import { useQuery } from "@tanstack/react-query"
import jwt_decode from "jwt-decode"
import { toast } from "react-toastify"
import AuthQueries from "~/queries/auth"
import { useStore } from "~/store"

const RolePriority = {
	admin: 0,
	trainer: 1,
	student: 2,
}

const useGetUser = () => {
	const dispatch = useStore(store => store.dispatch)

	const { data, isLoading } = useQuery(["user"], AuthQueries.profile, {
		retry: 0,
		onSuccess: resp => {
			resp = resp.data.results.data
			const accessToken = CookieService.getAccessToken()
			let min = 2
			let { roles } = jwt_decode(accessToken)
			roles = roles.map(r => ({
				roleId: r.type,
				subRoleId: r.id,
			}))

			roles.forEach(({ roleId: role }) => {
				if (RolePriority[role] < min) min = RolePriority[role]
			})
			const role = Object.keys(RolePriority).find(
				key => RolePriority[key] === min
			)
			dispatch({
				type: "SET_STATE",
				payload: {
					user: {
						...resp,
						roles: {
							default: roles.find(r => r.roleId === role),
							roles,
						},
					},
				},
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
