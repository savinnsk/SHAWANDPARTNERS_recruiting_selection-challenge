import {Router , Request , Response} from "express"
import { upload } from "./config/multer"
import fs from "fs";
import csvParser from "csv-parser";

const routes = Router()


routes.post("/files", upload.single('csvFile'),(req : Request ,res : Response)=>{
      try {
        return res.status(200).json({ message: "The file was uploaded successfully." });
      } catch (error) {
        console.error("Error uploading file:", error);
        return res.status(500).json({ message: "An error occurred while uploading the file." });
      }
})

routes.get("/users", async (req: Request, res: Response) => {
    try {
      const query = req.query.q?.toString().toLowerCase();
  
      if (!query) {
        return res.status(400).json({ message: "Search query parameter 'q' is required." });
      }
  
      const searchResults: any[] = [];
      const csvFolder = "./uploads";
  
      const files = fs.readdirSync(csvFolder).filter(file => file.endsWith(".csv"));

      for (const file of files) {
        const filePath = `${csvFolder}/${file}`;
        const fileData = await readCSVFile(filePath);
  
        fileData.forEach((row: any) => {
          Object.entries(row).forEach(([columnName, value]) => {
            if (value.toString().toLowerCase().includes(query)) {
              searchResults.push({columnName , value, file: filePath ,other : row});
            }
          });
        });
      }
  
      return res.status(200).json({ data: searchResults }); 
    } catch (error) {
      console.error("Error searching data:", error);
      return res.status(500).json({ message: "Can't find any data to match search." });
    }
  });
  
  async function readCSVFile(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const results: any[] = [];
  
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on("data", (row: any) => {
          results.push(row);
        })
        .on("end", () => {
          resolve(results);
        })
        .on("error", (error: any) => {
          reject(error);
        });
    });
  }
export {routes} 