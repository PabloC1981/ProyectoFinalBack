import Product from "../model/Product.js";
import GenericQueries from "./genericQueries.js";


export default class ProductsService extends GenericQueries{
    constructor(dao){
        super(dao,Product.model);
    }
}