import { createStore, useStoreValue } from "."

export const emailStore = createStore({
  email: "",
  submitted: false,
})

export const useEmail = () => {
  return useStoreValue(emailStore, "email")
}

export const useSubmitted = () => {
  return useStoreValue(emailStore, "submitted")
}
