import axios from 'axios';

export const sendFileService = async (formData : FormData)=>{
    try {
      const response = await axios.post('http://localhost:3000/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})

    return response.status

  } catch(error : any){
    return error.data
  }
}