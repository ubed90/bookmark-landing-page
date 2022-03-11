import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  viewMobileNav: boolean = false;

  @Output() scrollEvent: EventEmitter<string> = new EventEmitter();

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

  emitScroll(section: string) {
    if (this.viewMobileNav) {
      this.closeMobileNav();
    }
    this.scrollEvent.emit(section);
  }
}
