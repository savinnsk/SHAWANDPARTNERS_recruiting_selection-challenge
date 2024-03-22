import {Router , Request , Response} from "express"
import Multer from "multer"
const upload = Multer({ dest: 'uploads/' })


const routes = Router()


routes.post("/files", upload.single('csvFile'),(req : Request ,res : Response)=>{
    return res.status(200).json({message : "files"})
})

routes.get("/users", (req : Request , res : Response)=>{
    return res.status(200).json({message : "users"})
})

export {routes} 