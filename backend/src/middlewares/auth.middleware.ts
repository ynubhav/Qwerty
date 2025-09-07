import { verify } from "hono/jwt";
import type { Context } from "hono";
import type { Next } from "hono";

const verifyUser = async (c: Context, next: Next) => {

  try {
  const tokenToVerify = c.req.header("authorization");
  const secretKey = c.env.JWT_SECRET;

  if (!tokenToVerify)
    return c.json({
      success: false,
      message: "no token given",
    });
    const token=tokenToVerify.split(" ")[1];
    const decodedPayload = await verify(token, secretKey);
    if (decodedPayload.id) {
      c.set("userid", decodedPayload.id);
      await next();
    }
    else{
      throw new Error('No userid present in the jwt payload');
    }
  }
  catch (err) {
    return c.json({
      success: false,
      message: "invalid token",
    });
  }
};

export default verifyUser;
