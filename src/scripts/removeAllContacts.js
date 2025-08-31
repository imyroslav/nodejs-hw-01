import fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {

    try {
            await fs.writeFile(PATH_DB, JSON.stringify([]), "utf-8");
            console.log("Data is succesfully removed")
    
        } catch (error) {
            console.error("Error occured during romoving data", error.message)
        }
};

removeAllContacts();
