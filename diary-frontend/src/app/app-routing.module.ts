import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditPostComponent} from './posts/edit-post/edit-post.component';
import {BrowsePostsComponent} from './posts/browse-posts/browse-posts.component';
import {RemoveComponent} from './posts/remove/remove.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';


const routes: Routes = [
  {path: 'new', component: EditPostComponent},
  {path: 'edit/:postId', component: EditPostComponent},
  {path: 'browse', component: BrowsePostsComponent},
  {path: 'remove/:postId', component: RemoveComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
