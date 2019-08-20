import {Component, OnInit} from '@angular/core';
import {Post} from '../../common/post';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-browse-posts',
  templateUrl: './browse-posts.component.html',
  styleUrls: ['./browse-posts.component.css'],
})
export class BrowsePostsComponent implements OnInit {

  posts: Post[];

  constructor(private service: PostsService) {

  }

  ngOnInit() {
    this.service.getAll().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
