/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto copy';

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    // return { id }; // Initially
    // But with service Instance
    return this.usersService.findOne(id);
  }

  @Post()
  create(
    @Body(ValidationPipe)
    createUserDTO: CreateUserDTO,
  ) {
    // return user; // Initially
    // But with Service Instance
    return this.usersService.create(createUserDTO);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDTO: UpdateUserDTO,
  ) {
    // return { id, ...userUpdate }; // Initially
    this.usersService.update(id, updateUserDTO);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    // return { id }; // Initially
    // But with service Instance
    return this.usersService.delete(id);
  }
}
