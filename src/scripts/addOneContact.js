
import fs from "node:fs"

import { PATH_DB } from "../constants/contacts.js";

import { createFakeContact } from "../utils/createFakeContact.js";



export const addOneContact = async () => {

    let contacts = [];


    if (fs.existsSync(PATH_DB)) {

        const data = fs.readFileSync(PATH_DB, "utf-8")

        contacts = JSON.parse(data);

    }

    contacts.push(createFakeContact());


    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), "utf-8");

 };


addOneContact();