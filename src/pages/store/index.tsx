import { StackedStoreList } from "@/components/stacked-store-list"
import { Menu } from "@/components/menu"
import { useStoreModel } from "@/models/use-store-model"
import { ListStoreService } from "@/services/list-store"

export function StorePage() {
  const listStoreService = new ListStoreService()
  const { stores } = useStoreModel({ listStoreService })

  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <div className="max-h-[700px] min-w-[700px] flex gap-4">
        <Menu />
        <StackedStoreList stores={stores} />
      </div>
    </main>
  )
}

