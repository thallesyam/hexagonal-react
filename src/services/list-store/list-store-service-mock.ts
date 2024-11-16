import { IStore } from "@/models/use-store-model"
import { ListStoreServiceInterface } from "../list-store/list-store-service"

export class ListStoreServiceMock implements ListStoreServiceInterface {
  stores: IStore[] = []

  async exec(): Promise<IStore[]> {
    return new Promise(resolve => {
      return resolve(this.stores)
    })
  }
}