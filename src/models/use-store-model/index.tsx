import { useCallback, useEffect, useState } from "react"
import { IProduct } from "../use-product-model"
import { ListStoreService } from "@/services/list-store/list-store-service"

export type IStore = {
  storeId: string
  name: string
  category: string
  location: {
    address: string
    number: string
    zipCode: string
  }
  products: IProduct[]
  createdAt: Date
  updatedAt: Date
}

type IStoreModel = {
  listStoreService: ListStoreService
}

export function useStoreModel({ listStoreService }: IStoreModel) {
  const [stores, setStores] = useState<IStore[]>([])

  const fetchStores = useCallback(async () => {
    try {
      const stores = await listStoreService.exec()
      setStores(stores)
    } catch (error) {
      setStores([])
    }
  }, [listStoreService])

  useEffect(() => {
    fetchStores()
  }, [fetchStores])
  
  return {
    stores
  }
}