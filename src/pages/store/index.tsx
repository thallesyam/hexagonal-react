import { HttpClient } from "@/infra/http/http-adapter"
import { useStoreModel } from "@/models/use-store-model"
import { ListStoreService } from "@/services/list-store/list-store-service"
import { StoreView } from "@/views/store-view"

export function StoreViewModel() {
  const httpClient = HttpClient.create()
  const listStoreService = new ListStoreService(httpClient)
  const methods = useStoreModel({ listStoreService })
  return <StoreView methods={methods} />
}

