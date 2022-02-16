import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.sass']
})
export class DevComponent implements OnInit {
  title = 'yak-root-front';

  links = [
    {link: 'http://localhost:3000/doge/1.jpg', title: 'Pic from public of backend: public/doge/1.jpg'},
    {link: 'http://localhost:3000/doge/2.jpg', title: 'Pic from public of backend: public/doge/2.jpg'},
    {link: 'http://localhost:3000/doge/3.jpg', title: 'Pic from public of backend: public/doge/3.jpg'},
  ];

  pages = [
    {path: '', title: '/localhost'},
    {path: '/x', title: '/localhost/x'},
    {path: '/no-page', title: '/localhost/ololololololo'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
