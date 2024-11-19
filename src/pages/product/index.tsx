import { HttpClient } from "@/infra/http/http-adapter";
import { useProductModel } from "@/models/use-product-model";
import { ListProductService } from "@/services/list-product/list-product-service";
import { ProductView } from "@/views/product-view";

export function ProductViewModel() {
  const httpClient = new HttpClient()
  const listProductService = new ListProductService(httpClient)
  const methods = useProductModel({ listProductService })
  return  <ProductView methods={methods} />
}

