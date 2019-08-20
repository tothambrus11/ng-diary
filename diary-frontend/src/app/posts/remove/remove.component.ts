import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (confirm('Valóban törölni szeretnéd a bejegyzést?')) {
        this.postsService.remove(Number(paramMap.get('postId'))).subscribe(() => {
          this.router.navigateByUrl('/browse');
        });
      } else {
        this.router.navigateByUrl('/browse');
      }
    });
  }

}
