import mongoose from "mongoose"


let Schema = mongoose.Schema;
export default class Cart {
    constructor(data){
        this.data = data;
    }
    //Funcion a la cual podemos acceder como una propiedad!
    static get model(){
        return 'Carts';
    }
    static get schema(){
        return {
            products:{
                type:[{
                    type:Schema.Types.ObjectId,
                    ref:'Products'
                }],
                default:[]
            }
        }
    }
}