import { fetchWithToken } from "@/web-core/src/services/axios"

const CurriculumQueries = {
	getCohorts: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { orgId } = data
		const resp = await fetchWithToken.get(`/v1/cohort/${orgId}`)
		return resp.data.results.data
	},
	getCohort: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { cohortId, orgId } = data
		const resp = await fetchWithToken.get(`/v1/cohort/${orgId}/${cohortId}`)
		return resp.data.results.data
	},
	getTerms: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { type, id, orgId } = data
		const resp = await fetchWithToken.get(
			`/v1/curriculum/cohort/organization/${orgId}/terms/?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
	getSubjects: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { type, id, orgId } = data
		const resp = await fetchWithToken.get(
			`/v1/curriculum/cohort/organization/${orgId}/subjects/?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
	getChapters: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { type, id, orgId } = data
		const resp = await fetchWithToken.get(
			`/v1/curriculum/cohort/organization/${orgId}/chapters/?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
	getSessions: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { cohortId, orgId, id, type } = data
		const resp = await fetchWithToken.get(
			`/v1/content/${orgId}/content/${cohortId}?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
}

export default CurriculumQueries
