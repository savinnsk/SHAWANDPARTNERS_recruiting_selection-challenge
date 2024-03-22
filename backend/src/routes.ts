import {Router , Request , Response} from "express"

const routes = Router()


routes.post("/files", (req : Request ,res : Response)=>{
    return res.status(200).json({message : "files"})
})

routes.get("/users", (req : Request , res : Response)=>{
    return res.status(200).json({message : "users"})
})

export {routes} 