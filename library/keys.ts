// Copyright (c) 2022 Ivan Teplov

export function normalizeKeyName(originalName: string) {
  const lowerCased = originalName.toLowerCase()

  switch (lowerCased) {
    case "control":
      return "ctrl"
    case "option":
      return "alt"
    case "windows":
    case "win":
    case "⊞":
    case "command":
    case "⌘":
      return "meta"
    default:
      return lowerCased
  }
}
