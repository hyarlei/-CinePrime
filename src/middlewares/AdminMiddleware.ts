import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
  isAdmin: Boolean;
}

export async function AdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token is missing" });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = verify(token, "secret");

    const { isAdmin } = decoded as TokenPayload;

    if (!isAdmin) {
      throw new Error("Unauthorized");
    }
  return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
}
