import { IStore } from "@/models/use-store-model"
import { ListStoreServiceInterface } from "../list-store/list-store-service"
import { IHttpClient } from "@/infra/http/http-contracts"

export class ListStoreServiceMock implements ListStoreServiceInterface {
  stores: IStore[] = []

  constructor(private httpClient: IHttpClient){}

  async exec(): Promise<IStore[]> {
    return new Promise(resolve => {
      return resolve(this.stores)
    })
  }
}

export class ListStoreServiceErrorMock implements ListStoreServiceInterface {
  stores: IStore[] = []

  constructor(private httpClient: IHttpClient){}

  async exec(): Promise<IStore[]> {
    return new Promise((resolve, reject) => {
      return reject()
    })
  }
}
