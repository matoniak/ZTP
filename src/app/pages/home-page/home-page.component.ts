import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { JoinUsComponent } from 'src/app/components/join-us/join-us.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { OfferComponent } from 'src/app/components/offer/offer.component';
import { PricingComponent } from 'src/app/components/pricing/pricing.component';

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
  selector: 'home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...components],
  template: `<nav-bar></nav-bar>
    <main>
      <hero></hero>
      <about-us></about-us>
      <join-us></join-us>
      <offer></offer>
      <pricing></pricing>
      <faq></faq>
    </main>
    <page-footer></page-footer> `,
})
export class HomePageComponent {}
