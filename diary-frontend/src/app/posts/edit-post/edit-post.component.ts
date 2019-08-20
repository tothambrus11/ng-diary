import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {NgForm} from '@angular/forms';
import {Post} from '../../common/post';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  Editor = ClassicEditor;

  isNewPost: boolean = true;
  private post: Post;

  public CKEditorConfig = {
    language: 'hu',
    placeholder: 'Kezdd el írni a bejegyzést...',
    width: 'auto',
  };

  constructor(
    private route: ActivatedRoute,
    private service: PostsService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.isNewPost = paramMap.get('postId') === null;

      if (this.isNewPost) {
        this.post = new Post();
      } else {
        this.service.get(Number(paramMap.get('postId')))
          .subscribe((post: Post) => {
            this.post = post;
          });
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.isNewPost) {
        this.service.insert(this.post).subscribe(() => {
          // alert('Sikeres bejegyzés!');
          this.router.navigateByUrl('browse');
        });
      } else {
        this.service.update(this.post).subscribe(() => {
          // alert('Sikeres mentés!');
          this.router.navigateByUrl('browse');
        });

      }
    } else {
      alert('Érvénytelen adatok!');
    }
  }
}
