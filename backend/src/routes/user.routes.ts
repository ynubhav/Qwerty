import { Hono } from "hono";
import { returnUserInfo, signinUser, signUpUser } from "../controllers/user.controller";
import verifyUser from "../middlewares/auth.middleware";

const userRouter=new Hono();

userRouter.post('/signup', signUpUser)  // signup route
userRouter.post('/signin', signinUser) // signin route
userRouter.get('/me',verifyUser,returnUserInfo) //get user data

export default userRouter;