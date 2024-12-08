import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
        username:{type:String,required: true},
        email:{type:String,required: true,unique:true,lowercase:true},
        password:{type:String,required: true},

    },
    {
        timestamps: true,
        versionKey: false,
    })

const UserModel = mongoose.model('users', DataSchema);
export default UserModel;