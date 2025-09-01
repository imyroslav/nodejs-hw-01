import fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => { 

    try {
            const data = await fs.readFile(PATH_DB, "utf-8");
            const dataArray = JSON.parse(data);
            await fs.writeFile(PATH_DB, JSON.stringify([]), "utf-8");
            dataArray.splice(-1, 1);
            writeContacts(dataArray)
        
        }   catch (error) {
            console.error("Error occured during romoving data", error.message)
        }

};

removeLastContact();