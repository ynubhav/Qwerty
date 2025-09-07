import { Hono } from "hono";
import userRouter from "./user.routes";
import blogRouter from "./blog.routes";

const appRouter=new Hono();

appRouter.route('/auth',userRouter);
appRouter.route('/blog',blogRouter);

export default appRouter;