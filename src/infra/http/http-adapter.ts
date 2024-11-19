import { HttpRequest, IHttpClient } from "./http-contracts";

interface ApiFunction {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

export class HttpClient implements IHttpClient {
  constructor(
    private api: ApiFunction = fetch,
    private baseUrl = 'http://localhost:5173/api'
  ){}

  static create() {
    return new HttpClient()
  }

  async request<TResponse, Tbody>(props: HttpRequest<Tbody>) {
    const { endpoint, method, body, headers } = props

    const response = await this.api(`${this.baseUrl}/${endpoint}`, {
      body: body as any,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    })
    const data: TResponse = await response.json()
    return data
  }
}