import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
},
    {

        versionKey: false,

        timestamps: true,

    }

)

const ServiceModel = mongoose.model('service', DataSchema);
export default ServiceModel;