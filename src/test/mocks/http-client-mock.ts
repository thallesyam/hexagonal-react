import { IHttpClient, HttpRequest } from "@/infra/http/http-contracts";

export class HttpClientMock implements IHttpClient {
  private mockResponses: Map<string, any> = new Map();

  setMockResponse<TResponse>(endpoint: string, method: string, response: TResponse): void {
    const key = this.getKey(endpoint, method);
    this.mockResponses.set(key, response);
  }

  async request<TResponse = any, Tbody = unknown>(request: HttpRequest<Tbody>): Promise<TResponse> {
    const key = this.getKey(request.endpoint, request.method);

    if (!this.mockResponses.has(key)) {
      throw new Error(`No mock response defined for ${request.method} ${request.endpoint}`);
    }

    return this.mockResponses.get(key) as TResponse;
  }

  private getKey(endpoint: string, method: string): string {
    return `${method.toUpperCase()}::${endpoint}`;
  }
}
