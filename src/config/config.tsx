export const url =
  import.meta.env.MODE === 'development'
    ? import.meta.env.REACT_APP_API_URL_LOCAL
    : import.meta.env.REACT_APP_API_URL_VERCEL;