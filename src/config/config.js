import dotenv from 'dotenv';
dotenv.config();
export default {
    mongo:{
        url:process.env.MONGO_URL||'mongodb://localhost:27017/adoptme'
    },
    session:{
        ADMIN:process.env.ADMIN,
        PASSWORD:process.env.PASSWORD
    },
    jwt:{
        SECRET:process.env.JWT_SECRET
    },
    env:{
        NODE_ENV:process.env.NODE_ENV||'PROD'
    },
    mns:{
        app:process.env.app||"L4V0R0ss",
        CORREOEMPRESA:process.env.CORREO||'pablocourroux@gmail.com'
    }
}