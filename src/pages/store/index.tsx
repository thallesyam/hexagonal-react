import { StackedStoreList } from "@/components/stacked-store-list"
import { useCallback, useEffect, useState } from "react"
import { IProduct } from "../product"
import { Menu } from "@/components/menu"

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

export function StorePage() {
  const [stores, setStores] = useState<IStore[]>([])

  const fetchStores = useCallback(async () => {
    const response = await fetch('/api/stores')
    const stores = await response.json()
    setStores(stores)
  }, [])

  useEffect(() => {
    fetchStores()
  }, [fetchStores])

  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <div className="max-h-[700px] min-w-[700px] flex gap-4">
        <Menu />
        <StackedStoreList stores={stores} />
      </div>
    </main>
  )
}

