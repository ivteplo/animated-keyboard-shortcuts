// Copyright (c) 2022 Ivan Teplov

/**
 * An object, where each key corresponds to a keyboard key
 * and each value to a list of kbd tags that should change
 * their looks when the key is pressed
 */
const observers: Record<string, HTMLElement[]> = {}

const toggledClassName = "pressed"

export function addObserver(keyName: string, element: HTMLElement): void {
  if (!(keyName in observers)) {
    observers[keyName] = []
  }

  observers[keyName].push(element)
}

export function updateObserverState(keyName: string, isKeyPressed: boolean) {
  // Iterate over observers for the key
  for (const observer of observers[keyName]) {
    // Toggle classes depending on the key state
    if (isKeyPressed) {
      observer.classList.add(toggledClassName)
    } else {
      observer.classList.remove(toggledClassName)
    }
  }
}
