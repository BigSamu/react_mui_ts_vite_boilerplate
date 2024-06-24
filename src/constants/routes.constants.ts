export const ROUTES = {
  HOME: '/',
  REQUESTS: '/requests',
  REQUESTS_NEW: '/requests/new',
  REQUESTS_STATUS: '/requests/status',
  STREAMS: '/streams',
  STREAMS_NEW: '/streams/new',
  STREAMS_ALL: '/streams/all',
  ABOUT: '/about',
  USER_PROFILE: '/users/:userId',
  NOT_FOUND: '*',
} as const;
