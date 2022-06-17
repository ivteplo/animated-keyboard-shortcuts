// Copyright (c) 2022 Ivan Teplov

import { RegistrationError } from "./errors"
import { setKeyStates } from "./keyStates"
import { addObserver } from "./observers"

/**
 * Indicates whether keydown and keyup event listeners are added to the window
 */
let isListening: boolean = false

/**
 * Add an element that should change it's look when a key is pressed.
 * If the element has a `data-key-name` attribute, then its value will be used.
 * Else the function will try to get text content of the element.
 * If neither of those two is specified, then an error will be thrown.
 * @throws {RegistrationError}
 */
export function registerElement(element: HTMLElement) {
  addEventListeners()

  const keyName = element.dataset.keyName
    ?? element.textContent?.trim().toLowerCase()
    ?? ""

  if (!keyName) {
    throw new RegistrationError(
      "Could not register an event listener for the element. " +
        "Please, specify `data-key-name` attribute or set inner text of the element",
      element
    )
  }

  addObserver(keyName, element)
}

function onKeyDown(event: KeyboardEvent) {
  setKeyStates(event, true)
}

function onKeyUp(event: KeyboardEvent) {
  setKeyStates(event, false)
}

/**
 * Register event listeners for keydown and keyup events
 */
export function addEventListeners(): void {
  if (isListening) return

  // Add event listeners to the window object
  window.addEventListener("keydown", onKeyDown)
  window.addEventListener("keyup", onKeyUp)

  isListening = true
}

/**
 * Unregister event listeners for keydown and keyup events
 */
export function removeEventListeners(): void {
  if (!isListening) return

  // Remove event listeners from the window object
  window.removeEventListener("keydown", onKeyDown)
  window.removeEventListener("keyup", onKeyUp)

  isListening = false
}
