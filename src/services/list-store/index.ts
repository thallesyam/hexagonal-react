import { IStore } from "@/models/use-store-model";

export interface ListStoreServiceInterface {
  exec(): Promise<IStore[]>
}

export class ListStoreService implements ListStoreServiceInterface {

  async exec(): Promise<IStore[]> {
    const response = await fetch('/api/stores')
    const stores = await response.json()
    return stores
  }

}