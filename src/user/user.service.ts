import { Injectable } from '@nestjs/common';
import { User } from './data/user.dto';
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class UserService {
 public users: User[] = []; 

  findAllUsers(): User[] {
    return  this.users;
  }


  addUserService(user: User): string{
    // id auto genrate
    user.id = uuidv4();
    this.users.push(user);
    return 'user has been succesfully add';
  }
}
