// Copyright (c) 2022 Ivan Teplov

import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: path.resolve(projectRoot, "example"),
  build: {
    outDir: "build"
  }
})
