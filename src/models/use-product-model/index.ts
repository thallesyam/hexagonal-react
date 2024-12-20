import { ListProductServiceInterface } from "@/services/list-product/list-product-service"
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

type IProductModel = {
  listProductService: ListProductServiceInterface
}

export function useProductModel({ listProductService }: IProductModel) {
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = useCallback(async () => {
    try {
      const products = await listProductService.exec()
      setProducts(products)
    } catch (error) {
      setProducts([])
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return {
    products
  }
}