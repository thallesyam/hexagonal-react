import { Route, Routes } from "react-router-dom"
import { ProductViewModel } from "@/pages/product"
import { StoreViewModel } from "@/pages/store"

export function Router() {
  return (
    <Routes>
      <Route path="/store" element={<StoreViewModel />} />
      <Route path="/product" element={<ProductViewModel />} />
    </Routes>
  )
}