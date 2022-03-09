import express from 'express';
import { userService } from '../services/services.js';



const router = express.Router();


router.get('/',async (req,res)=>{
   let result = await userService.getAll();
        res.send(result)
        console.log(result)
    })

router.get('/:uid',async (req,res)=>{
    let id= req.params.uid;
    console.log(id)
    let result= await userService.getBy(id)
    console.log(result)
    res.send(result);
    })



export default router;