import s from "./header.module.css"
import logo from "../../public/logo.png"
import axios from "axios";
import { useState } from "react";

export function Header() {


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
      console.log(file)
   return

    try {
      const response = await axios.post('http://localhost:3000//api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Resposta from backend:', response.data);
    } catch (error) {
      console.error('Erro CSV:', error);

    }
  };



    return (
      <header className={s.header}>
        <img src={logo} className="logo" alt="logo" width={50} height={50} /> <p>CSV MANAGER</p>

        <div>
      
          <input className={s.search} type="text" placeholder="search"/>

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
  