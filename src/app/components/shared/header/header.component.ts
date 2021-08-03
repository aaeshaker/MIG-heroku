import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, location: Location) {

    // Styling navbar corresponding to routing
    router.events.subscribe(() => {

      const nav = document.querySelector('.Nav');

      // If we're in any route except Home
      if (location.path() === '') {

        nav?.classList.add('white');
        nav?.classList.remove('scrolled');
        window.addEventListener('scroll', () => {
          nav?.classList.toggle('scrolled', window.scrollY > 0);
          nav?.classList.toggle('nav-shadow', window.scrollY > 0);
        });

      }

    });


  }

  ngOnInit(): void {
  }

  //To close the menu after clicking
  closeMenu() {
    let closeIcon: HTMLElement = document.querySelector('.uk-offcanvas-close') as HTMLElement;
    closeIcon.click();
  }

}
