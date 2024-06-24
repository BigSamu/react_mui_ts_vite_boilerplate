export const ENDPOINTS = {
  P4_PLUGIN: import.meta.env.VITE_API_URL_PREFIX_P4_PLUGIN,
  JIRA_PLUGIN: import.meta.env.VITE_API_URL_PREFIX_JIRA_PLUGIN,
  CONFIG_SERVICES: import.meta.env.VITE_API_URL_PREFIX_CONFIG_SERVICES,
  USER_SERVICES: import.meta.env.VITE_API_URL_PREFIX_USER_SERVICES,
  MDS_SERVICES: import.meta.env.VITE_API_URL_PREFIX_MDS_SERVICES,
  IDS_SERVICES: import.meta.env.VITE_API_URL_PREFIX_IDS_SERVICES,
  REQUESTS_SERVICES: import.meta.env.VITE_API_URL_PREFIX_REQUESTS_SERVICES,
} as const;