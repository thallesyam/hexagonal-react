export enum HttpMethod {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete'
}

export interface HttpRequest<Tbody> {
  endpoint: string
  method: HttpMethod
  body?: Tbody
  headers?: Record<string, string>
}

export interface IHttpClient {
  request: <TResponse = any, Tbody = unknown> (request: HttpRequest<Tbody>) => Promise<TResponse> 
}