/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_USE_REDUX_LOGGING: string,
    readonly VITE_API_BASE_URL: string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ImportMeta {
    readonly env: ImportMetaEnv
}