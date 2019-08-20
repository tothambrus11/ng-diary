import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './dtos/updatePostDto';
import { CreatePostDto } from './dtos/createPostDto';
import { PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {
    }

    @Get('all')
    findAll() {
        return this.postService.findAll();
    }

    @Get(':postId')
    findOne(@Param('postId') postId: number) {
        return this.postService.findOne(postId);
    }

    @Put('update/:postId')
    update(@Param('postId') postId: number, @Body() post: UpdatePostDto) {
        post.id = postId;
        return this.postService.update(PostEntity.decode(post));
    }

    @Post('create')
    create(@Body() newPost: CreatePostDto) {
        return this.postService.create(PostEntity.decode(newPost));
    }

    @Delete('delete/:postId')
    delete(@Param('postId') postID: number) {
        this.postService.delete(postID);
    }
}
