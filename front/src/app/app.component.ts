import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
}
