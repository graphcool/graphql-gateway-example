import { ITypes } from '../generated/resolvers'

import { QueryRoot } from './Query'
import { MutationRoot } from './Mutation'
import { SubscriptionRoot } from './Subscription'
import { ViewerRoot } from './Viewer'
import { AuthPayloadRoot } from './AuthPayload'
import { MutationResultRoot } from './MutationResult'
import { ExperiencesByCityRoot } from './ExperiencesByCity'
import { HomeRoot } from './Home'
import { ReservationRoot } from './Reservation'
import { ExperienceRoot } from './Experience'
import { ReviewRoot } from './Review'
import { NeighbourhoodRoot } from './Neighbourhood'
import { LocationRoot } from './Location'
import { PictureRoot } from './Picture'
import { CityRoot } from './City'
import { ExperienceCategoryRoot } from './ExperienceCategory'
import { UserRoot } from './User'
import { PaymentAccountRoot } from './PaymentAccount'
import { PlaceRoot } from './Place'
import { BookingRoot } from './Booking'
import { NotificationRoot } from './Notification'
import { PaymentRoot } from './Payment'
import { PaypalInformationRoot } from './PaypalInformation'
import { CreditCardInformationRoot } from './CreditCardInformation'
import { MessageRoot } from './Message'
import { PricingRoot } from './Pricing'
import { PlaceViewsRoot } from './PlaceViews'
import { GuestRequirementsRoot } from './GuestRequirements'
import { PoliciesRoot } from './Policies'
import { HouseRulesRoot } from './HouseRules'
import { AmenitiesRoot } from './Amenities'
import { CitySubscriptionPayloadRoot } from './CitySubscriptionPayload'
import { CityPreviousValuesRoot } from './CityPreviousValues'

import { Context } from './Context'

export interface Types extends ITypes {
  Context: Context
  QueryRoot: QueryRoot
  MutationRoot: MutationRoot
  SubscriptionRoot: SubscriptionRoot
  ViewerRoot: ViewerRoot
  AuthPayloadRoot: AuthPayloadRoot
  MutationResultRoot: MutationResultRoot
  ExperiencesByCityRoot: ExperiencesByCityRoot
  HomeRoot: HomeRoot
  ReservationRoot: ReservationRoot
  ExperienceRoot: ExperienceRoot
  ReviewRoot: ReviewRoot
  NeighbourhoodRoot: NeighbourhoodRoot
  LocationRoot: LocationRoot
  PictureRoot: PictureRoot
  CityRoot: CityRoot
  ExperienceCategoryRoot: ExperienceCategoryRoot
  UserRoot: UserRoot
  PaymentAccountRoot: PaymentAccountRoot
  PlaceRoot: PlaceRoot
  BookingRoot: BookingRoot
  NotificationRoot: NotificationRoot
  PaymentRoot: PaymentRoot
  PaypalInformationRoot: PaypalInformationRoot
  CreditCardInformationRoot: CreditCardInformationRoot
  MessageRoot: MessageRoot
  PricingRoot: PricingRoot
  PlaceViewsRoot: PlaceViewsRoot
  GuestRequirementsRoot: GuestRequirementsRoot
  PoliciesRoot: PoliciesRoot
  HouseRulesRoot: HouseRulesRoot
  AmenitiesRoot: AmenitiesRoot
  CitySubscriptionPayloadRoot: CitySubscriptionPayloadRoot
  CityPreviousValuesRoot: CityPreviousValuesRoot
}
