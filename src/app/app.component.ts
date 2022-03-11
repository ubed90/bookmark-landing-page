import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmark-landing-page';

  scrollToSection(section: string): void {
    let sectionToScroll = <HTMLElement>document.querySelector(section);
    sectionToScroll.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    // console.log(sectionToScroll);
  }
}
