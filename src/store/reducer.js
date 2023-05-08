import { produce } from "immer"

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case "TOGGLE_LOADING":
			return produce(state, draft => {
				draft.loading = !draft.loading
			})
		case "SET_LOADING":
			return produce(state, draft => {
				draft.loading = payload
			})
		case "SET_TOAST_ID":
			return produce(state, draft => {
				draft.toastId = payload
			})
		case "UNSET_TOAST_ID":
			return produce(state, draft => {
				draft.toastId = null
			})
		case "SET_BREADCRUMB":
			return produce(state, draft => {
				draft.breadCrumbs = payload
			})
		case "APPEND_BREADCRUMB":
			return produce(state, draft => {
				const last = draft.breadCrumbs.pop()
				draft.breadCrumbs.push(...payload)
			})
		case "POP_BREADCRUMB":
			return produce(state, draft => {
				draft.breadCrumbs.pop()
			})
		case "SET_STATE":
			return produce(state, draft => {
				for (let i in payload) draft[i] = payload[i]
			})
		default:
			return state
	}
}
