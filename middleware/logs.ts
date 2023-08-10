import { Request, Response, NextFunction } from "express";

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(`A request occurred on PATH: ${req.path}`);
  next();
};
