import fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';


export const countContacts = async () => {

     try {
         const data = await fs.readFile(PATH_DB, "utf-8");
         const dataArray = data.split("},");
            const count = dataArray.length
            return count
            
    
        } catch (error) {
            console.error("Error occured during file reading", error.message);
            
        }

 };

console.log(await countContacts());