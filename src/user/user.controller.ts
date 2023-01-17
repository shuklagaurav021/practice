import {Body, Controller ,Post, Get} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./data/user.dto";


@Controller('user')
export class UserController{
  constructor(private userService: UserService) {}

@Get("/findAll")
getAllUsers() : User[] {
  return this.userService.findAllUsers()
}


@Post("/add")
addUser(@Body() user: User):string{
  return this.userService.addUserService(user);
}











}


