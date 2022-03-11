import { createTransport } from "nodemailer";
import config from "../config/config.js"



const transporter = createTransport({
    service:"gmail",
    port: 587,
    auth: {
        user: config.mns.CORREO,
        pass: config.mns.app
    }
});

function sendMail(email,cart){

    const mail = {
        from:"Congratulations!",
        to:email,
        subject:"Hi!, Thank you for your trust ",
        html:`
            <h1>Buys:</h1>
            <p>number de tk: ${cart}</p>
           `
    };

    try {
        const result = await transporter.sendMail(mail)
        console.log(result)
        return {messages:'Check your e mail please'}
    } catch (error) {
        console.log(error)
        return error
    }
}


export default sendMail;