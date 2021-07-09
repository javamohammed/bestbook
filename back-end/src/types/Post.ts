import { Document } from "mongoose";

interface Post  extends Document {
    userId: string;
    desc? : string;
    img? : string;
    likes? : Array<String>;

}

export default Post;