import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AboutComponent,
    HomeComponent,
    SidemenuComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
