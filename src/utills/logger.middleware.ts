import { NextFunction, Request, Response } from 'express';





export function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
    let protocol = req.protocol;  //http https
   let host = req.get('host');  //local host
   let url = req.originalUrl;   //  /users
   let method = req.method;  //get post
   let date = new Date().toDateString();  //date
   console.log(protocol + "://" + host + url + "  " + method + "  " + date);
   next();
 }
 