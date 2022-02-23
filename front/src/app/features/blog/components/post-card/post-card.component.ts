import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.sass']
})
export class PostCardComponent implements OnInit {
  @Input() post: IPost = {
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
