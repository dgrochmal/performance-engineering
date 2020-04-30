import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    {
      titleKey: 'app_nav_about',
      path: '/'
    },
    {
      titleKey: 'app_nav_pe',
      path: '/pe'
    },
    {
      titleKey: 'app_nav_pts',
      path: '/pts'
    },
    {
      titleKey: 'app_nav_contact',
      path: '/contact-us'
    }
  ];

  public screenHeight = 0;
  public screenWidth = 0;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event?: undefined) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
     console.log(this.screenHeight, this.screenWidth);
  }

  public myFunction() {
    let x = document.getElementById('items');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  public isNavBar() {
    return this.screenWidth > 660;
  }
}
