import { IProduct } from "@/models/use-product-model"
import { ListProductServiceInterface } from "./list-product-service"
import { IHttpClient } from "@/infra/http/http-contracts"

export class ListProductServiceMock implements ListProductServiceInterface {
  products: IProduct[] = []

  constructor(private httpClient: IHttpClient){}

  async exec(): Promise<IProduct[]> {
    return new Promise(resolve => {
      return resolve(this.products)
    })
  }
}

export class ListProductServiceErrorMock implements ListProductServiceInterface {
  async exec(): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      return reject()
    })
  }
}