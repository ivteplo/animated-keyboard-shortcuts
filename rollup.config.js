// Copyright (c) 2022 Ivan Teplov

import ts from "rollup-plugin-ts"

export default {
  input: "library/index.ts",
  output: {
    dir: "build",
    format: "umd",
    name: "AnimatedKeyboardShortcuts",
    sourcemap: true
  },
  plugins: [
    ts({})
  ]
}
