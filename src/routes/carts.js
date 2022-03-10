import express from "express";
import { cartService } from "../services/services.js";
import upload from "../utils/uploader.js";

const router =express.Router();


router.get('/',async(req,res)=>{
    let result = await cartService.getAll();
    res.send(result)
})

router.post('/',upload.none(),async(req,res)=>{
    try {
        let newIdProduct = req.body
        console.log(newIdProduct._id)
        let result = await cartService.save({products:newIdProduct._id});
        res.send({message:'new carts', payload:result})
    } catch (error) {
        console.log(error)
    }
});

router.get('/:cid',async(req, res)=>{
    try {
        let cid = req.params.cid;
        let result = await cartService.getBy({_id:cid})
        res.send(result) 
        
    } catch (error) {
        console.log(error)
    }
})

router.post('/:cid',async(req, res)=>{
    try {
        let cid = req.params.cid;
        let newIdProduct = req.body;
        let result = await cartService.updateCart(cid,{products:newIdProduct._id})
        res.send({message:"new Cart", payload:result}) 
        
    } catch (error) {
        console.log(error)
    }
})
export default router;