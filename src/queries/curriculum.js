import { fetchWithToken } from "@/web-core/src/services/axios"

const CurriculumQueries = {
	getCohorts: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { orgId } = data
		const resp = await fetchWithToken.get(`/v1/cohort`)
		return resp.data.results.data
	},
	getCohort: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { cohortId } = data
		const resp = await fetchWithToken.get(`/v1/cohort/${cohortId}`)
		return resp.data.results.data
	},
	getTerms: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { type, id, cohortId } = data
		const resp = await fetchWithToken.get(
			`/v1/cohort/${cohortId}/terms?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
	getSubjects: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { type, id, cohortId } = data
		const resp = await fetchWithToken.get(
			`/v1/cohort/${cohortId}/subjects?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
	getChapters: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { type, id, cohortId } = data
		const resp = await fetchWithToken.get(
			`/v1/cohort/${cohortId}/chapters?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
	getSessions: async ({ queryKey }) => {
		const [_, data] = queryKey
		const { cohortId, id, type } = data
		const resp = await fetchWithToken.get(
			`/v1/cohort/${cohortId}/sessions?id=${id}&idType=${type}`
		)
		return resp.data.results.data
	},
}

export default CurriculumQueries
