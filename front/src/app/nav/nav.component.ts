import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.demo(); // Just Demo Features!
  }

  // Just Demo Features!
  demo(){
    setInterval(() => {
      console.log('Demo:', window.screen.width, window.innerWidth, '💋');
    }, 1000);

    this.route
      .queryParams
      .subscribe(params => {
        let code = params['code'];
        let userEmail = params['email'];
        console.log('Route: ', code, userEmail)
      });
  }

  goTo(path: string, drawer: any) {
    console.log(path)
    this.router.navigate([path]);
    // ,{queryParams: {email: 'loginEmail', code: 'userCode'}} // can put it in to router
    if (window.innerWidth < 600) drawer.toggle();
  }

}
