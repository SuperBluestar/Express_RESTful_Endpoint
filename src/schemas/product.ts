import { Document, Schema, Model, model} from 'mongoose';
import { IProduct } from '../interfaces/iproduct';

export interface IProductModel extends IProduct, Document {
    passed_days(): Number;
}
  
export var ProductSchema: Schema = new Schema({
    name: { 
        type: String, required: true 
    },
    description: { 
        type: String, required: true 
    },
    price: { 
        type: Number, required: true 
    },
    rating: { 
        type: Number, required: true 
    },
    last_purchase: { 
        type: Date, required: true 
    },
}, { timestamps: true });


ProductSchema.methods.passed_days = function(): Number {
    return ((new Date()).getTime() - (new Date(this.last_purchase)).getTime()) / (1000*60*60*24);
};

export const Product: Model<IProductModel> = model<IProductModel>('Product', ProductSchema);

Product.remove({}, (result: any): void => {
    if ("err") {
        console.log("err");
    } else {
        result.json(result);
    }
})
const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];
for (let i = 0; i < 50; i ++) {
    let randomProduct = dummy(ProductSchema, {
        ignore: ignoredFields,
        returnDate: true
    })
    let productInstance = new Product(randomProduct);
    productInstance.save((err) => {
        if (err) {
            console.log(err);
        }
    });
}
