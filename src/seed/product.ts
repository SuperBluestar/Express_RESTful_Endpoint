const mongoose = require('mongoose');
const dummy = require('mongoose-dummy');
const Product = mongoose.model('Product');

// const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];
// for (let i = 0; i < 50; i ++) {
//     let randomProduct = dummy(ProductSchema, {
//         ignore: ignoredFields,
//         returnDate: true
//     })
//     let productInstance = new Product(randomProduct);
//     productInstance.save((err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// }



// Product.remove({}, (result: any): void => {
//     if ("err") {
//         console.log("err");
//     } else {
//         result.json(result);
//     }
// })