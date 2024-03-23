import useStore from "../../hook/store";
import { sendFileService } from "../../services/api";
import s from "./send-button.module.css"


interface SendButtonProps {
    eventInput : React.ChangeEvent<HTMLInputElement> | undefined
    setFileName : (value : string) => void
}

export function SendButton({setFileName ,eventInput} : SendButtonProps){


    const store = useStore()

    const handleFileUpload = async (event :React.ChangeEvent<HTMLInputElement> | undefined) => {
        let file  
        const formData = new FormData();
    
        if(event && event.target.files){
          file = event.target.files![0];
          formData.append('csvFile', file);
          }
          setFileName("")
          
          let response;
         
          if(event.target.files[0].name != "test.csv"){
          response = await sendFileService(formData)
          }

          if(response?.status > 399){
            store?.toSetNotification(response.data.message)
            store?.toSetError()
            return
          }
    
          store?.toSetNotification(response.data.message)
       
      };
    
    

   return ( <button className={s.sendButton} onClick={() => handleFileUpload(eventInput)}>SEND</button> )

}