import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutUsComponent } from '@components-ui/about-us/about-us.component';
import { FaqComponent } from '@components-ui/faq/faq.component';
import { FooterComponent } from '@components-ui/footer/footer.component';
import { HeroComponent } from '@components-ui/hero/hero.component';
import { JoinUsComponent } from '@components-ui/join-us/join-us.component';
import { NavBarComponent } from '@components-feat/nav-bar/nav-bar.component';
import { OfferComponent } from '@components-ui/offer/offer.component';
import { PricingComponent } from '@components-ui/pricing/pricing.component';
import { ScrollToTopButtonComponent } from '@components-feat/scroll-to-top-button/scroll-to-top-button.component';

const components = [
  NavBarComponent,
  AboutUsComponent,
  HeroComponent,
  JoinUsComponent,
  FaqComponent,
  OfferComponent,
  PricingComponent,
  FooterComponent,
  ScrollToTopButtonComponent,
];

@Component({
  selector: 'home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...components],
  template: `<nav-bar />
    <main>
      <hero />
      <about-us />
      <join-us />
      <offer />
      <pricing />
      <faq />
      <scroll-to-top-button />
    </main>
    <page-footer />`,
})
export class HomePageComponent {}
