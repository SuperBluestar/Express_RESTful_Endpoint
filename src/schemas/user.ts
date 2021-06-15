import { Document, Schema, Model, model} from 'mongoose';
import { IUser } from '../interfaces/iuser';


export interface IUserModel extends IUser, Document {
    fullName(): string;
}
  
export var UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: Date, required: true }
}, { timestamps: true });


UserSchema.methods.fullName = function(): String {
    return (this.name.trim() + ' ' + this.lastName.trim());
};
  
export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);


User.remove({}, (result: any): void => {
    if ("err") {
        console.log("err");
    } else {
        result.json(result);
    }
})
const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];
for (let i = 0; i < 50; i ++) {
    let randomUser = dummy(User, {
        ignore: ignoredFields,
        returnDate: true
    })
    let userInstance = new User(randomUser);
    userInstance.save((err) => {
        if (err) {
            console.log(err);
        }
    });
}
