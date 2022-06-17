// Copyright (c) 2022 Ivan Teplov

import { updateObserverState } from "./observers"
import { normalizeKeyName } from "./keys"

/**
 * An object, where each key corersponds to a keyboard key
 * and each value to a boolean
 * (true if the key is pressed, false if it is not)
 */
const pressedKeys: Record<string, boolean> = {}

/**
 * Save key state to the `pressedKeys` object
 * @param key - value of `event.key`
 * @param isPressed - is the key pressed or not
 */
export function setIsKeyPressed(key: string, isPressed: boolean) {
  // Convert key name to the lower case
  const normalizedKey = normalizeKeyName(key)

  // Keydown event gets called many times if a user holds a key,
  // so we don't want to go through each element again and again,
  // especially if there are too many elements
  if (pressedKeys[normalizedKey] === isPressed) return

  // Save state of the key
  pressedKeys[normalizedKey] = isPressed
  updateObserverState(normalizedKey, isPressed)
}

/**
 * Set key states from the event information
 * @param event - keydown or keyup event information
 * @param isKeyDownEvent
 */
export function setKeyStates(event: KeyboardEvent, isKeyDownEvent: boolean) {
  setIsKeyPressed(event.key, isKeyDownEvent)
  setIsKeyPressed("shift", event.shiftKey)
  setIsKeyPressed("ctrl", event.ctrlKey)
  setIsKeyPressed("alt", event.altKey)
  setIsKeyPressed("meta", event.metaKey)
}
