"use client"

import { useCallback, useEffect, useRef, useState } from "react"

interface UseTimerOptions {
  /** Initial time in seconds */
  initialSeconds?: number
  /** Whether to count down (true) or up (false) */
  countDown?: boolean
  /** Callback when timer reaches 0 (for countdown) */
  onComplete?: () => void
  /** Auto-start the timer */
  autoStart?: boolean
}

interface UseTimerReturn {
  /** Current time in seconds */
  seconds: number
  /** Whether the timer is running */
  isRunning: boolean
  /** Start the timer */
  start: () => void
  /** Pause the timer */
  pause: () => void
  /** Stop and reset the timer */
  stop: () => void
  /** Reset the timer to initial value */
  reset: () => void
}

export function useTimer({
  initialSeconds = 0,
  countDown = false,
  onComplete,
  autoStart = false,
}: UseTimerOptions = {}): UseTimerReturn {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(autoStart)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const onCompleteRef = useRef(onComplete)

  // Keep onComplete ref up to date
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Timer logic
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (countDown) {
          const newSeconds = prevSeconds - 1
          if (newSeconds <= 0) {
            setIsRunning(false)
            onCompleteRef.current?.()
            return 0
          }
          return newSeconds
        } else {
          return prevSeconds + 1
        }
      })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning, countDown])

  const start = useCallback(() => {
    setIsRunning(true)
  }, [])

  const pause = useCallback(() => {
    setIsRunning(false)
  }, [])

  const stop = useCallback(() => {
    setIsRunning(false)
    setSeconds(initialSeconds)
  }, [initialSeconds])

  const reset = useCallback(() => {
    setIsRunning(false)
    setSeconds(initialSeconds)
  }, [initialSeconds])

  return {
    seconds,
    isRunning,
    start,
    pause,
    stop,
    reset,
  }
}
