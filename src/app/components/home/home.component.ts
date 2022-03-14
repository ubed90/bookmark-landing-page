import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  scroll: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrolling, true);
  }

  scrollToSection(section: string): void {
    let sectionToScroll = <HTMLElement>document.querySelector(section);
    sectionToScroll.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    // console.log(sectionToScroll);
  }

  scrolling = (event: any) => {
    let sc = event.target.scrollingElement.scrollTop;
    console.log();
    if (sc >= 100) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  };
}
