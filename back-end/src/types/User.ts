import { Document } from "mongoose";

interface User  extends Document {
    userId?: string;
    username: string;
    email: string;
    password: string;
    profilePicture?: string;
    coverPicture?: string;
    followers? : Array<String>;
    followings? : Array<String>;
    isAdmin? : Boolean;
    desc? : string;
    city? : string;
    from? : string;
    relationship? : Number;

}

export default User;