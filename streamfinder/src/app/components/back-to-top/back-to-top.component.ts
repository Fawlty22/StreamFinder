import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {
  isButtonVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Check scroll position and toggle button visibility
    this.isButtonVisible = window.pageYOffset > 100;
    console.log(window.pageYOffset > 100)
  }

  scrollToTop(): void {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
