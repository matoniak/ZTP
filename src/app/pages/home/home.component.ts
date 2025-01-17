import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutUsComponent } from '@components/about-us/about-us.component';
import { FaqComponent } from '@components/faq/faq.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeroComponent } from '@components/hero/hero.component';
import { JoinUsComponent } from '@components/join-us/join-us.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { OfferComponent } from '@components/offer/offer.component';
import { PricingComponent } from '@components/pricing/pricing.component';

const components = [
  NavBarComponent,
  AboutUsComponent,
  HeroComponent,
  JoinUsComponent,
  FaqComponent,
  OfferComponent,
  PricingComponent,
  FooterComponent,
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
    </main>
    <page-footer />`,
})
export class HomeComponent {}
