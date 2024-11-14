import { Route, Routes } from "react-router-dom"
import { ProductPage } from "@/pages/product"
import { StorePage } from "@/pages/store"

export function Router() {
  return (
    <Routes>
      <Route path="/store" element={<StorePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  )
}