import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PostEntity} from './post.entity';
import {Repository} from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
    ) {
    }

    findAll() {
        return this.postRepository.find();
    }

    findOne(postId: number) {
        return this.postRepository.findOne(postId);
    }

    update(post: PostEntity) {
        return this.postRepository.update(post.id, post);
    }

    create(newPost: PostEntity) {
        newPost.id = undefined;
        return this.postRepository.insert(newPost);
    }

    delete(postID: number) {
        return this.postRepository.delete(postID);
    }
}
