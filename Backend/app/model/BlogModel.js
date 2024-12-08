import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({

        title: { type: String },


        description: { type: String },

        image: { type: String },

    },

    {

        versionKey: false,

        timestamps: true,

    })

const BlogModel = mongoose.model('blogs', DataSchema);
export default BlogModel;