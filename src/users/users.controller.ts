/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // /users
export class UsersController {
  // Add Instance of User Service Here
  constructor(private readonly usersService: UsersService) {}

  /**
   * GET /users
   * POST /users
   * GET /users/:id
   * PATCH /users/:id
   * DELETE /users/:id
   */
  @Get()
  findAll(@Query('role') role?: 'intern' | 'engineer' | 'admin') {
    // return []; //initially
    // But with Service Instance
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return { id }; // Initially
    // But with service Instance
    return this.usersService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'intern' | 'engineer' | 'admin';
    },
  ) {
    // return user; // Initially
    // But with Service Instance
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'intern' | 'engineer' | 'admin';
    },
  ) {
    // return { id, ...userUpdate }; // Initially
    this.usersService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    // return { id }; // Initially
    // But with service Instance
    return this.usersService.delete(+id);
  }
}
