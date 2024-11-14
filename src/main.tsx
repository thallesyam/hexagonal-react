import App from './App'
import { makeServer } from "@/server/server"
import { createRoot } from 'react-dom/client';


if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(<App />);
