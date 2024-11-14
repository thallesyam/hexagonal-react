import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Store, CircleDollarSignIcon } from "lucide-react"

export type IProduct = {
  productId: string
  storeId: string
  name: string
  category: string
  quantity: number
  price: number
  isAvailable: boolean
}

export type IStore = {
  storeId: string
  name: string
  category: string
  location: {
    address: string
    number: string
    zipCode: string
  }
  products: IProduct[]
  createdAt: Date
  updatedAt: Date
}

function App() {

  return (
    <main>
      <Sidebar>
        <SidebarContent className="bg-zinc-900">
          <SidebarGroup>
            <SidebarGroupLabel className="text-zinc-100">Aplicação</SidebarGroupLabel>
            <SidebarGroupContent className="text-zinc-100 mt-6">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href={'/stores'}>
                      <Store />
                      <span>Lojas marketplace</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href={'/products'}>
                      <CircleDollarSignIcon />
                      <span>Produtos</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </main>
  )
}

export default App
