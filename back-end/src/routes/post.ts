import { Router, Request, Response } from "express";
import IPost from "../types/Post";
import IUser from "../types/User";
import Post from "../models/Post";
import User from "../models/User";
const routes: Router = Router();



//get timeline posts
routes.get('/timeline', async (req: Request, res: Response): Promise<Response> => {
    const currentUser:IUser|null = await User.findById(req.body.userId)
    let currentUserPosts:Array<IPost> = await Post.find({userId: req.body.userId })
    const friendsPosts:Array<IPost> = [] ;
    if(currentUser && currentUser.followings){
        for (let i = 0; i < currentUser.followings.length; i++) {
            let friend = String(currentUser.followings[i]);
            let posts:Array<IPost> = await Post.find({userId: friend})
            currentUserPosts.push(...posts)
          }
    }
  
    
    return res.status(200).json(currentUserPosts)
})


//create a post
routes.post('/', async (req: Request, res: Response): Promise<Response> =>{
    const body:IPost = req.body
    if(!body.userId || body.userId === '' ||  !body.desc || body.desc === ''  )
        return res.status(403).send({
            message: "Please enter some text "
        }) 
    const postObj: IPost = await Post.create({
        userId: body.userId,
        desc: body?.desc,
        img: body?.img
      });
    return res.status(200).send({
        message: "post has been created "
    })
})
//update a post
routes.put('/:id', async (req: Request, res: Response): Promise<Response> =>{
    const body:IPost = req.body
    if(!body.userId || body.userId === ''  || body.desc === ''  )
        return res.status(403).send({
            message: "Please enter some text "
        }) 
    const post: IPost|null = await  Post.findById(req.params.id);
    if(post?.userId !==  body.userId)
        return res.status(403).send({
            message: "you can update only your posts "
        }) 
    await post.updateOne({$set:body})
    
    await post.save();
    return res.status(200).send({
        message: "post has been updated "
    })
})
//delete a post
routes.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    const body:IPost = req.body;
    const post: IPost|null = await  Post.findById(req.params.id);
    if(post?.userId !==  body.userId)
        return res.status(403).send({
            message: "you can delete only your posts "
        }) 
    await post.deleteOne()
    return res.status(200).json("Your account is deleted")
})
//like  a post
routes.put('/like/:id', async (req: Request, res: Response): Promise<Response> => {
    const body:IPost = req.body;
    const post: IPost|null = await  Post.findById(req.params.id);
    if(!post?.likes?.includes(body.userId)){
        await post?.updateOne( { $push:{ likes: body.userId } })
         return res.status(403).send({
            message: "The post has been liked"
        }) 
    }
    await post.updateOne({ $pull:{ likes: body.userId } })
    return res.status(403).send({
       message: "The post has been disliked"
   }) 

       
    
})
//get a post
routes.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    const post: IPost|null = await  Post.findById(req.params.id);
    if(!post)
        return res.status(403).send({
            message: "The post not found "
        }) 
    return res.status(200).json(post)
})

export default routes;