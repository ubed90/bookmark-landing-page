import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  viewMobileNav: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  openMobileNav(): void {
    this.viewMobileNav = !this.viewMobileNav;
    document.body.style.overflowY = 'hidden';
  }

  closeMobileNav(): void {
    this.el.nativeElement
      .querySelector('.mobile-nav')
      .classList.remove('active');
    setTimeout(() => {
      this.viewMobileNav = !this.viewMobileNav;
      document.body.style.overflowY = 'initial';
    }, 400);
  }
}
