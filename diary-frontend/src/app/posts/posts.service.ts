import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../common/post';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  constructor(private http: HttpClient) {
  }

  get(postId: number): Observable<Post> {
    return this.http.get(environment.serverURI + 'posts/' + postId) as Observable<Post>;
  }

  getAll(): Observable<Post[]> {
    return this.http.get(environment.serverURI + 'posts/all') as Observable<Post[]>;
  }

  remove(id: number) {
    return this.http.delete(environment.serverURI + 'posts/delete/' + id);
  }

  update(post: Post) {
    post = post as Post;
    return this.http.put(environment.serverURI + 'posts/update/' + post.id, Post.decode(post).encode());
  }

  insert(post: Post) {
    post = post as Post;
    post.authorId = 0;
    return this.http.post(environment.serverURI + 'posts/create', Post.decode(post).encode());
  }
}
