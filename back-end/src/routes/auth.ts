import { Router, Request, Response } from "express";
import { hash, genSalt, compare } from "bcrypt";
import User from "../models/User";
import IUser from "../types/User";
import { SALT_ROUNDS } from "../config/config";
const routes = Router();


//Register
routes.post('/register', async (req: Request, res: Response): Promise<Response> =>{
    const body:IUser = req.body
    const salt = await genSalt(SALT_ROUNDS);
    const hashedPassword = await hash(body.password, salt);

    const userObj: IUser = await User.create({
        username: body.username,
        email: body.email,
        password: hashedPassword
      });

      /*
    const userObj: IUser = {
        username: body.username,
        email: body.email,
        password: hashedPassword
    };
 
    //const user = new User(userObj);
    await user.save();*/
    return res.status(200).send({
        message: "user is Registered "
    })
})

//Login
routes.post('/login', async (req: Request, res: Response): Promise<Response> => {
    const body:IUser = req.body;
    let user  = null
    try {
        user  = await User.findOne({email: body.email})
        if(!user)
            return res.status(400).send({'message': 'user Not found'})
        const IsCorrectPassword: Boolean = await compare(body.password, (user as IUser).password);
        if(!IsCorrectPassword)
            return res.status(400).send({'message': 'Invalid Password'})
    } catch (error) {
        return res.status(400).json("Login.USER.0.Error Network!!")
    }

    return res.status(200).json(user)
})
export default routes;