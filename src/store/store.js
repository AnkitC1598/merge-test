import { create } from "zustand"
import { devtools, redux } from "zustand/middleware"
import { reducer } from "./reducer"

const useStore = create(
	devtools(
		redux(reducer, {
			loading: false,
			sideBarOpen: false,
			toastId: null,
			user: null,
			orgInfo: null,
			breadCrumbs: [],
			currentHierarchy: null,
			pageHierarchy: null,
		})
	),
	{ name: "useStore" }
)

export default useStore
