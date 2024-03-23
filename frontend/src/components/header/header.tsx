import s from "./header.module.css"
import useStore from "../../hook/store";
import logo from "../../../public/logo.png"
import { useState } from "react";
import { searchColumnsService, sendFileService } from "../../services/api";

export function Header() {

  const store = useStore()
  

  const [eventInput , setEventInput] = useState<React.ChangeEvent<HTMLInputElement>>()
  const [fileName , setFileName] = useState<string>("")

  const handleFileUpload = async (event :React.ChangeEvent<HTMLInputElement> | undefined) => {
    let file  
    const formData = new FormData();

    if(event && event.target.files){
      file = event.target.files![0];
      formData.append('csvFile', file);
      }
      setFileName("")

    try {
      const response = await sendFileService(formData)
      console.log('Resposta from backend:', response);
    } catch (error) {
      console.error('Erro CSV:', error);

    }
  };

  const handleSearchColumns = async (e: string)=> {

      const columnValues = await searchColumnsService(e)
      
      if(columnValues.response.status > 399){
        store?.toSetNotification(columnValues.response.data.message)
        store?.toSetError()
      }
      store?.setValueCsv(columnValues)
  
  }


    return (
      <header className={s.header}>
        <img src={logo} className="logo" alt="logo" width={50} height={50} /> <p>CSV MANAGER</p>

        <div className={s.headerContent}>
      
          <input className={s.search} type="text" placeholder="search" onChange={async (e)=> await handleSearchColumns(e.target.value)}/>

          {fileName ? (
            <p>{fileName}</p>
          ):(
            <input className={s.upload} type="file" onChange={(e)=>{ 
              setEventInput(e)
              setFileName(e.target.files![0].name)
            }}>

            </input>
          )}
          

          <button className={s.sendButton} onClick={() => handleFileUpload(eventInput)}>SEND</button>
        </div>
      </header>
    )
  }
  