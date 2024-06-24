/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_PREFIX_P4_PLUGIN: string;
  readonly VITE_API_URL_PREFIX_JIRA_PLUGIN: string;
  readonly VITE_API_URL_PREFIX_CONFIG_SERVICES: string;
  readonly VITE_API_URL_PREFIX_USER_SERVICES: string;
  readonly VITE_API_URL_PREFIX_MDS_SERVICES: string;
  readonly VITE_API_URL_PREFIX_IDS_SERVICES: string;
  readonly VITE_API_URL_PREFIX_REQUESTS_SERVICES: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
