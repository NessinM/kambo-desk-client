
import  axios from 'axios';

export const base = axios.create({
  baseURL        : import.meta.env.VITE_API_ROUTE,
  withCredentials: true,
  headers        : {
    'Accept'      : 'application/json',
    'Content-Type': 'application/json',
  },
})

base.interceptors.response.use((response) => {
  return response
}, async (error) => {
  return Promise.reject(error.response ? error.response.data : error)
})

export const apiGet = async (URL,  payload = {}) =>  {
  try {
    const { data } = await base.get(`${URL}`, { params: payload })
    return data
  } catch (error) {
    return Promise.reject(error.message)
  }
}

export const apiPost = async (URL,  payload = {}) =>  {
  try {
    const { data } = await base.post(`${URL}`, payload)
    console.log('data', data)
    return data
  } catch (error) {
    return Promise.reject(error.message)
  }
}
