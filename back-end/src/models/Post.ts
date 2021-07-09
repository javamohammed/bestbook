import { Schema, model } from "mongoose";
import PostInterface from "../types/Post";


const postSchema = new Schema<PostInterface>({
    userId: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes : {
        type: Array,
        default: []
    },
},{
    timestamps: true
})


export default model<PostInterface>('Post', postSchema)