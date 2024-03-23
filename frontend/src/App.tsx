import { Header } from "./components/header/header"
import { Notification } from "./components/notification/notification"
import { StoreProvider } from "./providers/store-provider"



function App() {


  return (
    <StoreProvider>
      <Notification/>
      <Header/>
    </StoreProvider>
  )
}

export default App
