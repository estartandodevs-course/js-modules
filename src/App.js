import { Header } from "./components/Header"
import estartandodevs from "./assets/estartandodevs.png"

export function App({ profiles }) {
  const header = Header({ class: "dark", imgSrc: estartandodevs })

  return header 
}