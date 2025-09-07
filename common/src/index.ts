import z from "zod";

export const signUpInput=z.object({
    email:z.email(),
    name:z.string().min(2).max(100),
    password:z.string().min(6)
});

export const signInInput=z.object({
    email:z.email(),
    password:z.string().min(6)
});

export const createBlogInput=z.object({
    title: z.string().min(3),
    content: z.string().min(5),
    published: z.boolean().optional(),
});

export const updateBlogInput=z.object({
    title: z.string().min(3),
    content: z.string().min(5),
    published: z.boolean().optional(),
});


export type SignUpInput= z.infer<typeof signUpInput>
export type SignInInput= z.infer<typeof signInInput>;
export type CreateBlogInput=z.infer<typeof createBlogInput>;
export type UpdateBlogInput=z.infer<typeof updateBlogInput>;


