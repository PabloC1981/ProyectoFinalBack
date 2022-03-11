import express from "express";
import { cartService , userService } from "../services/services.js";
import upload from "../utils/uploader.js";
import { passportCall , checkAuthorization } from "../utils/middlewares.js";

const router =express.Router();


router.get('/', passportCall('jwt'),checkAuthorization(["ADMIN","USER"]), async(req,res)=>{
    let user = req.user;
    let userS = await userService.getBy({_id:user._id})
    console.log(userS.carts)
    let carts = userS.carts
    if (carts.length === 0) {
        return res.send({message:"not cart", payload:user.carts})
    }else{
        return res.send(carts)
    }
});
    

router.post('/',passportCall('jwt'),checkAuthorization(["ADMIN","USER"]),upload.none(), async(req,res)=>{
    try {
        let newIdProduct = req.body
        let user = req.user;
        console.log(newIdProduct._id)
        let result = await cartService.save({products:newIdProduct._id});
        try {
            await userService.addCart(user._id,{carts:result._id})
            res.send({message:' new cart', payload:result})
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
});
router.get('/:cid',passportCall('jwt'),checkAuthorization(["ADMIN","USER"]),async(req, res)=>{
    try {
        let cid = req.params.cid;
        console.log(cid)
        let result = await cartService.getBy({_id:cid})
        res.send(result) 
        
    } catch (error) {
        console.log(error)
    }
});
router.post('/:cid',passportCall('jwt'),checkAuthorization(["ADMIN","USER"]),upload.none(),async(req, res)=>{
    try {
        let cid = req.params.cid;
        let newIdProduct = req.body;
        let result = await cartService.updateCart(cid,{products:newIdProduct._id})
        res.send({message:"new product in Cart", payload:result}) 
        
    } catch (error) {
        console.log(error)
    }
});
router.delete('/:cid',passportCall('jwt'),checkAuthorization(["ADMIN","USER"]),async(req, res)=>{
    try {
        let cid = req.params.cid
        let result = await cartService.delete({_id:cid})
        res.send({message:'drop cart', payload:result})
    } catch (error) {
        console.log(error)
    }
})
export default router;