import { StackedProductList } from "@/components/stacked-product-list"
import { useCallback, useEffect, useState } from "react"
import { Menu } from "@/components/menu";

export type IProduct = {
  productId: string
  storeId: string
  name: string
  category: string
  quantity: number
  price: number
  isAvailable: boolean
}

export function ProductPage() {
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = useCallback(async () => {
    const response = await fetch('/api/products')
    const products = await response.json()
    setProducts(products)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="max-h-[700px] min-w-[700px] flex gap-4 overflow-scrolll">
        <Menu />
        <StackedProductList products={products} />
      </div>
    </main>
  )
}

