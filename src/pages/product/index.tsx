import { useProductModel } from "@/models/use-product-model";
import { ListProductService } from "@/services/list-product/list-product-service";
import { ProductView } from "@/views/product-view";

export function ProductViewModel() {
  const listProductService = new ListProductService()
  const methods = useProductModel({ listProductService })
  return  <ProductView methods={methods} />
}

