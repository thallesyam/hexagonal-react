import { IProduct } from "@/models/use-product-model"

type IStackedProductList = {
  products: IProduct[]
}

export function StackedProductList({ products }: IStackedProductList) {
  return (
    <ul role="list" className="divide-y divide-gray-500 w-full max-w-[700px] h-full max-h-[700px] overflow-y-scroll px-5">
      {products?.map((product) => (
        <li key={product.productId} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-zinc-400">
                <span className="text-zinc-400">{product.storeId && `[${product.storeId}] - `}</span>
                {product.name}
              </p>
              <div className="flex items-center gap-2">
                {product.category && <p className="mt-1 truncate text-xs/5 text-zinc-500">{product.category}</p>}
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-pink-500 font-bold">
              R$ {new Intl.NumberFormat('pt-BR', { currency: 'BRL' }).format(product.price)}
            </p>
            <div className="mt-1 flex items-center gap-x-1.5">
              <p className="text-xs/5 text-gray-400">Restam <b>{product.quantity}</b></p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
