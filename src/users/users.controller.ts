import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }

  findUser(id: number) {
    this.usersService.findOne(id);
  }

  findAllUsers(email: string) {
    this.usersService.find(email);
  }

  updateUser(id: number) {
    this.usersService.update(id);
  }

  removeUser(id: number) {
    this.usersService.remove(id);
  }
}
