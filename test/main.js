// Copyright (c) 2022 Ivan Teplov

import "./main.css"
import { registerElement } from "../library"

/**
 * Each key in a shortcut hint
 */
const keys = document.querySelectorAll("kbd > kbd")

// Fill the `observers` object with corresponding `<kbd>` elements
for (const key of keys) {
  registerElement(key)
}
