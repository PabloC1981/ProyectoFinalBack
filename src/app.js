import express from 'express';
import passport from 'passport';
import initializePassport from './config/passport-config.js';
import sessionRouter from  './routes/session.js';
import usersRouter from './routes/users.js';
import productRouter from './routes/products.js'
import cartRouter from './routes/carts.js'
import cookieParser from 'cookie-parser';
import { __dirname } from './utils/utils.js';
import { createLogger } from './utils/utils.js';
import config from './config/config.js';

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));
const logger = createLogger(config.env.NODE_ENV)

app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.use('/session',sessionRouter)
app.use('/api/users',usersRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

//PARA TEST//
app.get('/test',(req,res)=>{
    res.send("Test")
})


// /*renderizo front! */
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/page/login.html')
})

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/public/page/register.html')
})



 /*Configuro Winston como logger*/
app.use((req,res,next)=>{
    logger.log('info',`${req.method} at ${req.path}`)
    next()
});

app.on('error',(error)=>{
    logger.warn("warning, check please")
    console.log("Danger: "+error)
})
app.get('/*',(req,res)=>{
    logger.warn("Endpoint invalido")
    res.status(404).send({error:'Invalid endpoint'})
})