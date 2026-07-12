/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ENDPOINT?: string
  readonly VITE_DEV_TUNNEL_HOST?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.avif' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}
