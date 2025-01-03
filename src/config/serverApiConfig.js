const VITE_BACKEND_SERVER = import.meta.env.VITE_BACKEND_SERVER;
export const API_BASE_URL = VITE_BACKEND_SERVER + 'api/v1/';
// import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
//   ? import.meta.env.VITE_BACKEND_SERVER + 'api/v1/'
//   : 'http://localhost:8000/api/v1/';
export const BASE_URL = VITE_BACKEND_SERVER + 'api/v1/';
// import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
//   ? import.meta.env.VITE_BACKEND_SERVER
//   : 'http://localhost:8000/';

export const WEBSITE_URL = import.meta.env.PROD
  ? 'http://cloud.idurarapp.com/'
  : 'http://localhost:8000/';
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
    : 'http://localhost:8000/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';

export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;

//  console.log(
//    '🚀 Welcome to IDURAR ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@idurarapp.com for more information.'
//  );
