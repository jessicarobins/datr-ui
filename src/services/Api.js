import axios from 'axios'

export default async function callApi(url, { method = 'get', data, params } = {}) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  try {
    const response = await axios({
      baseURL: 'http://localhost:3001', // process.env.API_URL,
      headers,
      method,
      url,
      data,
      params
    })

    return response.data
  } catch (err) {
    if (err.response) {
      return Promise.reject(err.response.data)
    }

    return Promise.reject(err.message)
  }
}
