// export const fetchApi = async (endpoint: string, init: object = {}) => {
//     const fullUrl = `${getBaseUrl()}/api/${endpoint}`
  
//     if (init === null) {
//       return fetch(fullUrl)
//     } else {
//       return fetch(fullUrl, { ...init })
//     }
//   }
  
  
  
//   const getBaseUrl = () => {
//     if (typeof window !== "undefined") {
//       return window.origin
//     } // browser should use relative url
//     return "http://localhost:3000"
//     // return 'http://ui:3000' // dev SSR should use localhost
//   }