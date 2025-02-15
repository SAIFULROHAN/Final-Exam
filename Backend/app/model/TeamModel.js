import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    name: String,
    role: String,
    image: String,
},
    {

        versionKey: false,

        timestamps: true,

    })

const TeamModel = mongoose.model('team', DataSchema);
export default TeamModel;