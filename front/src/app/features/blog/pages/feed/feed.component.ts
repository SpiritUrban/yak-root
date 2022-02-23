import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    public blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => (this.posts = posts))
  }

}
