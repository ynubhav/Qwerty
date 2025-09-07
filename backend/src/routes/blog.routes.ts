import { Hono } from "hono";
import { createBlog, getblog, getFeed, updateBlog } from "../controllers/blogs.controller";
import verifyUser from "../middlewares/auth.middleware";

const blogRouter=new Hono();

blogRouter.post('/',verifyUser,createBlog)       // auth to create a blog post
blogRouter.patch('/:id',verifyUser,updateBlog)  // auth to edit / update a blog
blogRouter.get('/feed',getFeed)                // return blogs as feed 
blogRouter.get('/:id',getblog)                // to open a certain blog        

export default blogRouter;