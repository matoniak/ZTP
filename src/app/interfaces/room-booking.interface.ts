import { PricingPlans } from '../enums/pricing-plans.enum';

export interface RoomBookingItem {
  name: string;
  surname: string;
  startDate: string;
  endDate: string;
  pricingPlans: PricingPlans | undefined;
}
