import {
  Component,
  OnInit
 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'frontend-challenge';

  constructor(private router: Router
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
          gtag('config', 'G-XKJKZE45NM', {'optimize_id' : 'OPT-553NDPM'},
                {
                  'page_path': event.urlAfterRedirects
                }
               );
       }
    }
 )
  }

  ngOnInit(){
  }
}
