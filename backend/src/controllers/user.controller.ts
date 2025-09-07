import type { Context } from "hono";
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";
import { getPrisma } from "../configs/database";
import { signInInput, signUpInput } from "@ynubhav/medium";

const signUpUser = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { success } = signUpInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        success,
        message: "Invalid Input",
      });
    }
    const prisma = getPrisma(c.env);
    const emailTaken = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (emailTaken) {
      c.status(411);
      return c.json({
        success: false,
        message: "Email Already Taken",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const EncryptedPass = await bcrypt.hash(body.password, salt);

    const MakeUser = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: EncryptedPass,
      },
    });

    // return jwt
    const jwtpayload = {
      id: MakeUser.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 5,
    };

    const Jwt = await sign(jwtpayload, c.env.JWT_SECRET);

    return c.json({
      success: true,
      message: "successfuly created account",
      token: "Bearer " + Jwt,
    });
  } catch (error) {
    c.status(500);
    return c.json({
      success: false,
      error: "Server Error",
    });
  }
};

const signinUser = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { success } = signInInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        success,
        message: "Invalid Input",
      });
    }
    const prisma = getPrisma(c.env);
    // check for email
    const userExists = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!userExists) {
      c.status(404);
      return c.json({
        success: false,
        message: "Email Address not Found",
      });
    }
    // verify password
    const EncryptedPass = userExists?.password || "";
    const PasswordMatch = await bcrypt.compare(body.password, EncryptedPass);
    // return jwt token in the body
    if (!PasswordMatch) {
      c.status(403);
      return c.json({
        success: false,
        message: "Wrong Password",
      });
    }
    const token = await sign(
      { id: userExists?.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 5 },
      c.env.JWT_SECRET
    );
    return c.json({
      success: true,
      message: "login successfull",
      token: "Bearer " + token,
    });
  } catch (err) {
    c.status(500);
    return c.json({
      success: false,
      message: "Server Error",
    });
  }
};

const returnUserInfo = async (c: Context) => {
  try {
    const userid = await c.get("userid");
    const prisma = getPrisma(c.env);
    //find user with the id
    const UserInfo = await prisma.user.findUnique({
      where: {
        id: userid,
      },
      include:{
        posts:{
          select:{
            id:true
          }
        }
      }
    });
    if (UserInfo) {
      c.status(200);
      return c.json({
        success: true,
        userinfo: {
          id: UserInfo.id,
          name: UserInfo.name,
          avatar: UserInfo.avatar,
          email: UserInfo.email,
          posts: UserInfo.posts,
        },
      });
    } else {
      c.status(404);
      return c.json({
        success: false,
        message: "User Not Found",
      });
    }
  } catch (err) {
    c.status(500);
    return c.json({
      success: false,
      message: "Server Error",
    });
  }
};

export { signUpUser, signinUser, returnUserInfo };
