import { Header } from "./components/Header"
import { StoreProvider } from "./providers/store-provider"



function App() {


  return (
    <StoreProvider>
      <Header/>
    </StoreProvider>
  )
}

export default App
