import type { Context } from "hono";
import { getPrisma } from "../configs/database";
import { createBlogInput, updateBlogInput } from "@ynubhav/medium";

const createBlog=async(c:Context)=>{
try
{
    const {title,content,published,image}=await c.req.json();
    const BlogBody=await c.req.json();
    const authorId=await c.get('userid');
    const prisma = getPrisma(c.env);
    // create a post
    const { success }=createBlogInput.safeParse({title,content,published});

    if(!success){
        c.status(411);
        return c.json({
            success:success,
            message:'Invalid Input'
        });
    }
    
    const MadePost=await prisma.posts.create({data:{
        authorId,
        title,
        content,
        published,
        image
    }})
    if(!MadePost){
        c.status(411);
        return c.json({
            success:false,
            message:'Erorr Post Not Created'
        })
    }
    c.status(200);
    return c.json({
        success:true,
        message:`Post ${published?'Published':'Saved'} Successfully`,
        blog_id: MadePost.id
    })
    }
    catch(error){
        c.status(500);
        return c.json({
            success:false,
            message:'Server Error'
        });
    }
}

const updateBlog=async(c:Context)=>{
    try
    {
        const {title,content,published}=await c.req.json();
        const postId=c.req.param('id');
        const authorId=await c.get('userid');
        const prisma = getPrisma(c.env);
        const {success}=updateBlogInput.safeParse({title,content,published});
        if(!success){
            c.status(411);
            return c.json({
                success,
                message:'Invalid Input'
            })
        }
    // update a post

    const FindPost=await prisma.posts.findFirst({
            where:{
            authorId,
            id:postId
        }
    });

    if(!FindPost){
        c.status(404);
        return c.json({
            success:false,
            message:'Post Not Found'
        })
    }
    const UpdatedPost=await prisma.posts.update({
        where:{
            id:postId,
            authorId
        },
        data:{
            title,
            content,
            published
        }
    });
    return c.json({
        success:true,
        message:'Post updated Successfully'
    })}
    catch(error){
        c.status(500);
        return c.json({
            success:false,
            message:'Server Error'
        })
    }
}

const getblog=async(c:Context)=>{
try{const blogId=c.req.param('id');
    // find blog by id
    const prisma = getPrisma(c.env);
    const blogData=await prisma.posts.findUnique({
        where:{
            id:blogId
        }
    });
    if(!blogData)
    {
        c.status(404);
        return c.json({
            success:false,
            message:'Blog Not Found'
        })
    }
    return c.json({
        success:true,
        blog:blogData
    })}
    catch(error){
        c.status(500);
        return c.json({
            success:false,
            message:'Server Error'
        })
    }
}

const getFeed=async(c:Context)=>{

    const prisma = getPrisma(c.env);

    const {limit}=c.req.query();

    const take = limit ? parseInt(limit, 10) : 10;

    const blogFeed=await prisma.posts.findMany({
        take
    });
    return c.json({
        success:true,
        blogs:blogFeed,
        timestamp:Date.now()// to tell last reload
    })
}

export {
    createBlog,
    updateBlog,
    getblog,
    getFeed,
}