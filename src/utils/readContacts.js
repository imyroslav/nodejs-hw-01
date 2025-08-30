import fs from "node:fs/promises";
// const path = require("path")

import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const contacts = JSON.parse(data);
        return contacts;

    } catch (error) {
        console.error("Error occured during file reading", error.message);
        
    }
};