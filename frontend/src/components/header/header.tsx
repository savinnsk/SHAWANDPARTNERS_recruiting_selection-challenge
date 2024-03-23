import s from "./header.module.css"
import useStore from "../../hook/store";
import logo from "../../../public/logo.png"
import { useState } from "react";
import {  sendFileService } from "../../services/api";
import { Search } from "../search/search";

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

      const response = await sendFileService(formData)

      if(response.status > 399){
        store?.toSetNotification(response.data.message)
        store?.toSetError()
        return
      }

      store?.toSetNotification(response.data.message)
   
  };




    return (
      <header className={s.header}>
        <img src={logo} className="logo" alt="logo" width={50} height={50} /> <p>CSV MANAGER</p>

        <div className={s.headerContent}>
      
          <Search/>

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
  