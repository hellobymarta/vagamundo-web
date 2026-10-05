/// <reference types="vite/client" />

// Las variables de entorno que usa la web, declaradas para que TypeScript
// sepa qué hay dentro de import.meta.env.
interface ImportMetaEnv {
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
