import axios, { isAxiosError } from 'axios'
import qs from 'qs'
import { ZodType } from 'zod'

// axios config
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
}

type ApiConfig<TResponseData> = {
  request: {
    method: string
    url: string
    query: unknown
  }
  response: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    schema: ZodType<TResponseData, any, any>
  }
}

export async function requestApi<TResponseData>(config: ApiConfig<TResponseData>) {
  const {
    request: { method, url, query },
    response: { schema },
  } = config
  try {
    const response = await axios.request({ method, url, params: query })
    const result = schema.safeParse(response.data)
    if (result.success) {
      return result.data!
    }
    console.error(`API 응답 파싱 실패:`, result.error.format())
    return Promise.reject({
      code: null,
      message: 'API 응답 파싱 실패',
    })
  } catch (error) {
    const unknownError = {
      code: null,
      message: 'Unknown api error',
    }
    if (isAxiosError(error)) {
      const errorData = error.response?.data.errors ?? unknownError
      return Promise.reject(errorData)
    }
    return Promise.reject(unknownError)
  }
}
