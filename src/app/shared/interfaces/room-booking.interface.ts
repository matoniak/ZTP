import { PricingPlans } from '../enums/pricing-plans.enum';

export interface RoomBookingItem {
  name: string;
  surname: string;
  email: string;
  startDate: string;
  endDate: string;
  pricingPlans: PricingPlans | undefined;
}
