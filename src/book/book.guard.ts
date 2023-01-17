import { CanActivate, Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
@Injectable()
export class BookGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean {
        console.log("this is the book guard");
        return true ;
    }



}