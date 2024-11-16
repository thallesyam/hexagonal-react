import { IProduct } from "@/models/use-product-model"
import { ListProductServiceInterface } from "./list-product-service"

export class ListProductServiceMock implements ListProductServiceInterface {
  products: IProduct[] = []

  async exec(): Promise<IProduct[]> {
    return new Promise(resolve => {
      return resolve(this.products)
    })
  }
}