import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type: String,
        default:'https://th.bing.com/th/id/OIP.a2fq2iecNWRLsNY2x51vXgAAAA?rs=1&pid=ImgDetMain',
    },
    category: {
        type: String,
        default: 'Uncategorized',
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
},{timestamps:true}
);

const Post = mongoose.model('Post',postSchema);
export default Post;