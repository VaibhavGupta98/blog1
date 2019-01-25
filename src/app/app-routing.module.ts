import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:"posts",component: PostsComponent,
    children:[
      {
        path: '', outlet: 'sidemenu' ,component: SidemenuComponent 
      }
    ]

  },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
