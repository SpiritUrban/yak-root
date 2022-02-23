import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.sass']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post = {
    title: '...',
    description: '...',
    body: '...',
    author: '...',
    date_posted: '...'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
