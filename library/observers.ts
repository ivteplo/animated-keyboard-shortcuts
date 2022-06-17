// Copyright (c) 2022 Ivan Teplov

import { normalizeKeyName } from "./keys"

/**
 * An object, where each key corresponds to a keyboard key
 * and each value to a list of kbd tags that should change
 * their looks when the key is pressed
 */
const observers: Record<string, HTMLElement[]> = {}

const toggledClassName = "pressed"

export function addObserver(keyName: string, element: HTMLElement): void {
  const normalizedKey = normalizeKeyName(keyName)

  if (!(normalizedKey in observers)) {
    observers[normalizedKey] = []
  }

  observers[normalizedKey].push(element)
}

export function updateObserverState(keyName: string, isKeyPressed: boolean) {
  const normalizedKey = normalizeKeyName(keyName)

  // Iterate over observers for the key
  for (const observer of observers[normalizedKey]) {
    // Toggle classes depending on the key state
    if (isKeyPressed) {
      observer.classList.add(toggledClassName)
    } else {
      observer.classList.remove(toggledClassName)
    }
  }
}
