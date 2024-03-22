import Express from "express"
import { routes } from "./routes";



const app = Express()

app.use(Express.json());

app.use("/api",routes)

app.listen(3000,()=>{
    console.log("🚀 application stated at port:3000")
})