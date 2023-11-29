import { config } from "../config/config.js";
let contactsDao;
let productsDao;
let cartsDao;
const persistence = config.server.persistence;

switch(persistence){
    case "memory":{
        const {ContactsMemory} = await import("./managers/memory/usuarios.memoria.js");
        contactsDao = new ContactsMemory();
        break;
    }

    case "mongo":{
        const {connectDB} = await import("../config/connectionDB.js");
        connectDB();
        const {ContactsMongo} = await import("./managers/mongo/contacts.mongo.js");
        contactsDao = new ContactsMongo();
        break;
    }
}

import { JuegosMemory } from "./managers/memory/videojuegos.memoria.js";
import { UsuariosMemory } from "./managers/memory/usuarios.memoria.js";

export const videojuegosDao = new JuegosMemory;
export const UsuariosDao = new UsuariosMemory;