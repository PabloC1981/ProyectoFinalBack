import express from 'express';
import { productService } from '../services/services.js';
import upload from '../utils/uploader.js';


const router = express.Router();

router.get('/',async(req,res)=>{
    let result = await productService.getAll()
    res.send(result)
})

router.get("/:pid",async(req,res)=>{
    let id = req.params.pid
    let result = await productService.getBy({_id:id})
    res.send(result)
})
router.post('/',upload.single('image'),async (req,res)=>{
    let product = req.body;
    //let file = req.file
    console.log(product)
    //producto.thumbnail = req.protocol+"://"+req.hostname+":8080"+'/images/'+file.filename;
    let result = await productService.save(product)
    res.send(result)
    if(result.status==="success"){
        product.getAll().then(result=>{
            console.log(result);
            io.emit('updateProd',result);
        })
    }
})


export default router;