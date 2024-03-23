import s from "./header.module.css"
import logo from "../../../public/logo.png"
import { useState } from "react";
import { Search } from "../search/search";
import { SendButton } from "../send-button/send-button";

export function Header() {

  

  const [eventInput , setEventInput] = useState<React.ChangeEvent<HTMLInputElement>>()
  const [fileName , setFileName] = useState<string>("")


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
          

          <SendButton setFileName={setFileName} eventInput={eventInput}/>
        </div>
      </header>
    )
  }
  