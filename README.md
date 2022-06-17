# Animated keyboard shortcuts
Make keyboard shortcut keys look pressed when a user presses a corresponding key.

![Preview of the result](preview.gif)

## Installation

```bash
npm install animated-keyboard-shortcuts --save
# or:
yarn add animated-keyboard-shortcuts
```

## Usage

### Basic example

```html
<kbd>
  <kbd>Ctrl</kbd>
  +
  <kbd>Shift</kbd>
  +
  <kbd>F</kbd>
</kbd>
```

```javascript
import { registerElement } from "animated-keyboard-shortcuts"

const keys = document.querySelectorAll("kbd > kbd")

for (const key of keys) {
  registerElement(key)
}
```

```css
/* Styles for a pressed key */
kbd > kbd.pressed {
  /* ... */
}
```

## API

- `registerElement(element: HTMLElement): void`

  Specify that the element should get a CSS class `pressed` when a certain key is pressed.

  If the passed element has an attribute `data-key-name`, then its value will be used as the key name.

  Else if the element has some text inside, then that text will be used as a key name.

  Else `RegistrationError` will be thrown.

- `RegistrationError extends Error`

  This is the error, thrown by `registerElement`.

  Properties:
  - same properties as in the `Error` class
  - `element: HTMLElement` - the element that caused the error

- `addEventListeners(): void`

  This is a function that sets up event listeners for `keydown` and `keyup` events.

  You don't have to call it manually, because `registerElement` calls it when needed.

- `removeEventListeners(): void`

  This is a function to remove event listeners for `keydown` and `keyup` events.

## Development

### Prerequisites

This project works directly in the browser without any additional build steps.

### Setup

1. Clone the repository

```bash
git clone https://github.com/ivteplo/animated-keyboard-shortcuts
```

2. Navigate into the cloned folder

```bash
cd animated-keyboard-shortcuts
```

3. Open `index.html` in the browser

4. Happy hacking! 🎉
