import { IProduct } from "@/models/use-product-model";

export interface ListProductServiceInterface {
  exec(): Promise<IProduct[]>
}

export class ListProductService implements ListProductServiceInterface {
  async exec(): Promise<IProduct[]> {
    const response = await fetch('/api/product')
    const products = await response.json()
    return products
  }
}