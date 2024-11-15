import { StackedProductList } from "@/components/stacked-product-list"
import { Menu } from "@/components/menu";
import { IProduct } from "@/models/use-product-model";

type IProductView = {
  methods: {
    products: IProduct  [];
  }
}

export function ProductView({ methods }: IProductView) {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="max-h-[700px] min-w-[700px] flex gap-4 overflow-scrolll">
        <Menu />
        <StackedProductList products={methods.products} />
      </div>
    </main>
  )
}

