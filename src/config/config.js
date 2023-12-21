import dotenv from "dotenv"; //Para poder leer las variables de .env
dotenv.config();

export const config = {
    server:{
        secretSession: process.env.SECRETKEY_SESSION,
        env: process.env.NODE_ENVIROMENT || "development"
    },
    mongo:{
        url: process.env.MONGO_URL//Se selecciona la variable de .env - Propiedad:Variable secreta

    },
    github:{
        callbackGithub: process.env.GITHUB_CALLBACK,
        clientIDGithub: process.env.GITHUB_CLIENT_ID,
        clientSecretGithub: process.env.GITHUB_CLIENT_SECRET
    },
    email:{
        account: process.env.GMAIL_ACCOUNT,
       password: process.env.GMAIL_PASSWORD,
       secretToken: process.env.TOKEN_EMAIL 
    }

}
