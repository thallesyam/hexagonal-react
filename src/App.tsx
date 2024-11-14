import StackedProductList from "@/components/stacked-product-list"
import { useCallback, useEffect, useState } from "react"

export type IProduct = {
  productId: string
  storeId: string
  name: string
  category: string
  quantity: number
  price: number
  isAvailable: boolean
}

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

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = useCallback(async () => {
    const response = await fetch('/api/products')
    const products = await response.json()
    setProducts(products.products)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <StackedProductList products={products} />
    </main>
  )
}

export default App
