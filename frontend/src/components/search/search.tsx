import useStore from "../../hook/store"
import { searchColumnsService } from "../../services/api"
import s from "./search.module.css"

export function Search() {

const store = useStore()

const handleSearchColumns = async (e: string)=> {

    const columnValues = await searchColumnsService(e)
    
    if(columnValues?.response?.status > 399){
      store?.toSetNotification(columnValues.response.data.message)
      store?.toSetError()
      return
    }

    if(columnValues?.data?.data?.length == 0){
      store?.toSetNotification("No columns find")
      store?.toSetError()
      return
    }

    store?.setValueCsv(columnValues?.data?.data)

}


  return (

       <input className={s.search} type="text" placeholder="search all columns here" onChange={async (e)=> await handleSearchColumns(e.target.value)}/>
   
  )
}