import {Router , Request , Response} from "express"
import { upload } from "./config/multer"


const routes = Router()


routes.post("/files", upload.single('csvFile'),(req : Request ,res : Response)=>{
    return res.status(200)
})

routes.get("/users", (req : Request , res : Response)=>{
    return res.status(200).json({message : "users"})
})

export {routes} 