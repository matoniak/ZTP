import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'scroll-to-top-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule],
  templateUrl: './scroll-to-top-button.component.html',
})
export class ScrollToTopButtonComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 200) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
