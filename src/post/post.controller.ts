import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { checkAbilites } from 'src/ability/abilities.decorator';
import { Action } from 'src/ability/ability.factory';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';
// import { Post } from '@prisma/client';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // @Post()
  // @checkAbilites({action: Action.Create, AppSubjects:Posts})
  // create(@Body() createPostDto: CreatePostDto) {
  //   return this.postService.create(createPostDto);
  // }

  @Get()
  @checkAbilites({action: Action.Read, AppSubjects:'Post'})
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
