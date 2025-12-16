import { createStore, useSyncStore } from "."

export const emailStore = createStore({
  email: "",
})

export const useEmailStore = () => {
  return useSyncStore(emailStore, (state) => state.email)
}
