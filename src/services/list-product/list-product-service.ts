import { HttpMethod, IHttpClient } from "@/infra/http/http-contracts";
import { IProduct } from "@/models/use-product-model";

export interface ListProductServiceInterface {
  exec(): Promise<IProduct[]>
}

export class ListProductService implements ListProductServiceInterface {
  constructor(private httpClient: IHttpClient){}

  async exec(): Promise<IProduct[]> {
    const response = await this.httpClient.request({
      endpoint: '/product',
      method: HttpMethod.GET,
    })
    const products = await response.json()
    console.log(products)
    return products
  }
}