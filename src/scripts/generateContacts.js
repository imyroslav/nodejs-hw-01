import fs from "node:fs"
import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";



const generateContacts = async (number) => { 
    
    let contacts = [];

    if (fs.existsSync(PATH_DB)) {
        const data = fs.readFileSync(PATH_DB, "utf-8")
        contacts = JSON.parse(data);
    }

    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }

    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), "utf-8");

};

generateContacts(3);