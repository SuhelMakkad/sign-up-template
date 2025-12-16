/**
 * Simple Global Store using JavaScript Proxy
 * !! For production, use a more robust state management solution like Zustand or Tanstack store
 */

import { useEffect, useState, useSyncExternalStore } from "react"

/** Listener callback type for store changes */
type StoreListener<T> = (
  store: T,
  property: keyof T,
  newValue: T[keyof T],
  oldValue: T[keyof T]
) => void

class ProxyStore<T extends Record<string, unknown>> {
  private state: T
  private listeners: Set<StoreListener<T>>
  private store: T

  constructor(initialState: T) {
    this.state = initialState
    this.listeners = new Set()

    // Create a proxy to intercept state changes
    this.store = new Proxy(this.state, {
      set: (target, property: string | symbol, value: unknown) => {
        const key = property as keyof T
        const oldValue = target[key]

        // Only notify if value actually changed
        if (oldValue !== value) {
          target[key] = value as T[keyof T]
          this.notify(key, value as T[keyof T], oldValue)
        }

        return true
      },

      get: (target, property: string | symbol) => {
        return target[property as keyof T]
      },
    })
  }

  // Subscribe to store changes
  subscribe(listener: StoreListener<T>): () => void {
    this.listeners.add(listener)

    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener)
    }
  }

  // Notify all listeners about state changes
  private notify(
    property: keyof T,
    newValue: T[keyof T],
    oldValue: T[keyof T]
  ): void {
    this.listeners.forEach((listener) => {
      listener(this.store, property, newValue, oldValue)
    })
  }

  // Get current state
  getState(): T {
    return this.store
  }

  // Set multiple properties at once
  setState(updates: Partial<T>): void {
    ;(Object.keys(updates) as Array<keyof T>).forEach((key) => {
      const value = updates[key]
      if (value !== undefined) {
        this.store[key] = value
      }
    })
  }

  // Reset store to initial state
  reset(newState: T): void {
    ;(Object.keys(this.state) as Array<keyof T>).forEach((key) => {
      delete this.store[key]
    })
    ;(Object.keys(newState) as Array<keyof T>).forEach((key) => {
      this.store[key] = newState[key]
    })
  }
}

// Create and export store instance
export const createStore = <T extends Record<string, unknown>>(
  initialState: T
): ProxyStore<T> => {
  return new ProxyStore(initialState)
}

export default ProxyStore

export const useSyncStore = <T extends Record<string, unknown>>(
  store: ProxyStore<T>,
  selector: (state: T) => T[keyof T]
) => {
  const subscribe = (callback: StoreListener<T>) => {
    return store.subscribe(callback)
  }

  const getSnapshot = () => {
    return selector(store.getState())
  }

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

export const useStoreValue = <
  T extends Record<string, unknown>,
  TKey extends keyof T,
>(
  store: ProxyStore<T>,
  key: TKey
) => {
  const [value, setValue] = useState(store.getState()[key])

  useEffect(() => {
    const unsubscribe = store.subscribe((state, property) => {
      if (property === key) {
        setValue(state[key])
      }
    })

    return unsubscribe
  }, [store, key])

  return value
}
