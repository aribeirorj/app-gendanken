import axios, { AxiosResponse } from 'axios'

type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

type HttpResponse<R = any> = {
  statusCode: HttpStatusCode
  body?: HttpResponseBody<R>
}

type HttpResponseBody<R> = {
  data?: R
  errors?: any
}

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  formError = 421,
  unprocessableEntity = 422,
  serverError = 500
}

const AxiosHttpClient = async ({
  method,
  url,
  body,
  headers
}: HttpRequest): Promise<HttpResponse> => {
  let axiosResponse: AxiosResponse

  const extraHeaders = {
    ...headers,
    'x-app': 'next-app'
  }

  try {
    axiosResponse = await axios.request({
      url,
      data: body,
      headers: extraHeaders,
      method
    })
  } catch (error) {
    axiosResponse = error.response
  }

  return {
    statusCode: axiosResponse?.status,
    body: axiosResponse?.data?.body
  }
}
