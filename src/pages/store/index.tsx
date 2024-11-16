import { useStoreModel } from "@/models/use-store-model"
import { ListStoreService } from "@/services/list-store/list-store-service"
import { StoreView } from "@/views/store-view"

export function StoreViewModel() {
  const listStoreService = new ListStoreService()
  const methods = useStoreModel({ listStoreService })
  return <StoreView methods={methods} />
}

