import { HttpMethod, IHttpClient } from "@/infra/http/http-contracts";
import { IStore } from "@/models/use-store-model";

export interface ListStoreServiceInterface {
  exec(): Promise<IStore[]>
}

export class ListStoreService implements ListStoreServiceInterface {
  constructor(private httpClient: IHttpClient){}

  async exec(): Promise<IStore[]> {
    const response = await this.httpClient.request({
      endpoint: '/stores',
      method: HttpMethod.GET
    })

    return response
  }

}