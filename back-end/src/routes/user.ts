import { Router, Request, Response } from "express";
import { hash, genSalt } from "bcrypt";
import { SALT_ROUNDS } from "../config/config";
import User from "../models/User";
import IUser from "../types/User";

const routes: Router = Router();

//update
routes.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    const body:IUser = req.body;
    if(body.userId == req.params.id || body.isAdmin){
        try {
            if(body.password){
                const salt = await genSalt(SALT_ROUNDS);
                const hashedPassword = await hash(body.password, salt);
                body.password = hashedPassword;
            }
            await User.findByIdAndUpdate(req.params.id, {
                $set: body
            })
            return res.status(200).json("Your account is updated")

        } catch (error) {
            return res.status(400).json("update.USER.0.Error Network!!")
        }
    }
    return res.status(500).json("You can only update your account")
})
//delete
routes.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    const body:IUser = req.body;
    if(body.userId == req.params.id || body.isAdmin){
        try {
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json("Your account is deleted")

        } catch (error) {
            return res.status(400).json("delete.USER.0.Error Network!!")
        }
    }
    return res.status(500).json("You can only delete your account")
})

//Get User
routes.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await User.findById(req.params.id)
        if(user)
            return res.status(200).json(user)

    } catch (error) {
        return res.status(400).json("GET.USER.0.Error Network!!")
    }
    return res.status(500).json("User Not Found")
})

//Follow
routes.put('/:id/follow', async (req: Request, res: Response): Promise<Response> => {
    const body:IUser = req.body;
    if( body.userId !== req.params.id ){
        try {      
            const userToFollow = await User.findById(body.userId)
            if(!userToFollow)
                return res.status(500).json("User not found")
            const user = await User.findById(req.params.id)
            if(userToFollow?.followers?.includes(req.params.id)){
                return res.status(403).json("You are already follow this user")
            }
            await user?.updateOne({ $push: { followings: body.userId } })
            await userToFollow?.updateOne({ $push: { followers: req.params.id } })
            return res.status(403).json("user has been followed")

        } catch (error) {
            return res.status(400).json("Follow.USER.0.Error Network!!")
        }
    }
    return res.status(403).json("You cant follow yourself")
})

//Unfollow
routes.put('/:id/unfollow', async (req: Request, res: Response): Promise<Response> => {
    const body:IUser = req.body;
    if( body.userId !== req.params.id ){
        try {      
            const userToUnFollow = await User.findById(body.userId)
            if(!userToUnFollow)
                return res.status(500).json("User not found")
            const user = await User.findById(req.params.id)
            if(!userToUnFollow?.followers?.includes(req.params.id)){
                return res.status(403).json("You don't unfollow this user")
            }
            await user?.updateOne({ $pull: { followings: body.userId } })
            await userToUnFollow?.updateOne({ $pull: { followers: req.params.id } })
            return res.status(403).json("user has been unfollow")

        } catch (error) {
            return res.status(400).json("Follow.USER.0.Error Network!!")
        }
    }
    return res.status(403).json("You cant unfollow yourself")
})

routes.get('/', async (req:Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: "Home User"
    });
})



export default routes;