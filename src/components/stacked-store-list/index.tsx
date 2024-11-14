import { IStore } from "@/App";

type IStackedStoreList = {
  stores: IStore[]
}

export default function StackedStoreList({ stores }: IStackedStoreList) {
  return (
    <ul role="list" className="divide-y divide-gray-300 w-full max-w-[700px] ">
      {stores?.map((store) => (
        <li key={store.storeId} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-zinc-500">
                {store.name}
              </p>
              <div className="flex items-center gap-2">
                {store.category && <p className="mt-1 truncate text-xs/5 text-zinc-600">{store.category}</p>}
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-pink-500 font-bold">
              Essa loja possui: {store.products.length} no estoque
            </p>

          </div>
        </li>
      ))}
    </ul>
  )
}
