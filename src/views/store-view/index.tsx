import { StackedStoreList } from "@/components/stacked-store-list"
import { Menu } from "@/components/menu";
import { IStore } from "@/models/use-store-model";

type IStoreView = {
  methods: {
    stores: IStore[];
  }
}

export function StoreView({ methods }: IStoreView) {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="max-h-[700px] min-w-[700px] flex gap-4 overflow-scrolll">
        <Menu />
        <StackedStoreList stores={methods.stores} />
      </div>
    </main>
  )
}

