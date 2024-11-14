import { StackedProductList } from "@/components/stacked-product-list"
import { Menu } from "@/components/menu";
import { useProductModel } from "@/models/use-product-model";
import { ListProductService } from "@/services/list-product";


export function ProductPage() {
  const listProductService = new ListProductService()
  const { products } = useProductModel({ listProductService })

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="max-h-[700px] min-w-[700px] flex gap-4 overflow-scrolll">
        <Menu />
        <StackedProductList products={products} />
      </div>
    </main>
  )
}

