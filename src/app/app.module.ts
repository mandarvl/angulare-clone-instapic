import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListePostsComponent } from './liste-posts/liste-posts.component';
import { PostComponent } from './post/post.component';
import { InstagramComponent } from './instagram/instagram.component';
import { DetailPostComponent } from './detail-post/detail-post.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListePostsComponent,
    PostComponent,
    InstagramComponent,
    DetailPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
