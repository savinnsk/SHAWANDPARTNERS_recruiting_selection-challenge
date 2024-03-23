import { Cards } from "./components/cards/cards"
import { Header } from "./components/header/header"
import { Notification } from "./components/notification/notification"
import { StoreProvider } from "./providers/store-provider"



function App() {


  return (
    <StoreProvider>
      <Notification/>
      <Header/>
      <Cards/>
    </StoreProvider>
  )
}

export default App
