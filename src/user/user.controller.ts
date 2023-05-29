import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Action } from 'src/ability/ability.factory';
import { checkAbilites } from 'src/ability/abilities.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @checkAbilites({action: Action.Create, AppSubjects:'User'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @checkAbilites({action: Action.Read, AppSubjects:'User'})
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @checkAbilites({action: Action.Read, AppSubjects:'User'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @checkAbilites({action: Action.Update, AppSubjects:'User'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @checkAbilites({action: Action.Delete, AppSubjects:'User'})
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
