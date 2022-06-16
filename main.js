// Copyright (c) 2022 Ivan Teplov

/**
 * Each key in a
 */
const keys = document.querySelectorAll("kbd > kbd")

/**
 * An object, where each key corersponds to a keyboard key
 * and each value to a boolean
 * (true if the key is pressed, false if it is not)
 * @type {{ [key: string]: boolean }}
 */
const pressedKeys = {}

/**
 * An object, where each key corresponds to a keyboard key
 * and each value to a list of kbd tags that should change
 * their looks when the key is pressed
 * @type {{ [key: string]: HTMLElement[] }}
 */
const observers = {}

// Fill the `observers` object with corresponding `<kbd>` elements
for (const key of keys) {
  const keyName = key.textContent.toLowerCase()

  if (!(keyName in observers)) {
    observers[keyName] = []
  }

  observers[keyName].push(key)
}

/**
 * Save key state to the `pressedKeys` object
 * @param {string} key - value of `event.key`
 * @param {boolean} isPressed - is the key pressed or not
 */
function setIsKeyPressed(key, isPressed) {
  // Convert key name to the lower case
  const lowerCasedKey = key.toLowerCase()

  // Save state of the key
  pressedKeys[lowerCasedKey] = isPressed

  // If there are no observers, then return
  if (!observers[lowerCasedKey]) return

  // Iterate over observers for the key
  for (const observer of observers[lowerCasedKey]) {
    // Toggle classes depending on the key state
    if (isPressed) {
      observer.classList.add("pressed")
    } else {
      observer.classList.remove("pressed")
    }
  }
}

/**
 * Set key states from the event information
 * @param {KeyboardEvent} event - keydown or keyup event information
 * @param {boolean} isKeyDownEvent
 */
function setKeyStates(event, isKeyDownEvent) {
  setIsKeyPressed(event.key, isKeyDownEvent)

  setIsKeyPressed("shift", event.shiftKey)

  setIsKeyPressed("ctrl", event.ctrlKey)
  setIsKeyPressed("control", event.ctrlKey)

  setIsKeyPressed("alt", event.altKey)
  setIsKeyPressed("option", event.altKey)

  setIsKeyPressed("meta", event.metaKey)
  setIsKeyPressed("windows", event.metaKey)
  setIsKeyPressed("win", event.metaKey)
  setIsKeyPressed("⊞", event.metaKey)
  setIsKeyPressed("command", event.metaKey)
  setIsKeyPressed("⌘", event.metaKey)
}

// Add event listeners to the window object
window.addEventListener("keydown", (event) => {
  setKeyStates(event, true)
})

window.addEventListener("keyup", (event) => {
  setKeyStates(event, false)
})
