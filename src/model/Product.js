import mongoose from "mongoose";

let Schema= mongoose.Schema;

export default class Product{
    constructor(data){
        this.data =data;
    }
    static get model(){
        return 'products';
    }
    static get schema(){
        return{
            title:String,
            description:String,
            price:String,
            stock:String,
            thumbnail:String,
        }
    }
}