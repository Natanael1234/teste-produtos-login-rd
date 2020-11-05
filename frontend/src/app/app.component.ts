import { Component } from '@angular/core';
import { Router,NavigationEnd, NavigationStart, NavigationError, Event  } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string;

  constructor(private router: Router){
    console.log(router.url);


    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        let tokens = event.urlAfterRedirects.split('/');
        let route = tokens.length ? tokens[tokens.length - 1] : '';
        this.currentRoute = route && route.length ? route.charAt(0).toUpperCase() + route.slice(1) : '';
      }


  });

}

}
