import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowsePostsComponent} from './browse-posts/browse-posts.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {RemoveComponent} from './remove/remove.component';
import {RouterModule} from '@angular/router';
import {MyCommonModule} from '../common/common.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';



@NgModule({
  declarations: [
    BrowsePostsComponent,
    EditPostComponent,
    RemoveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyCommonModule,
    CKEditorModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
})
export class PostsModule { }
