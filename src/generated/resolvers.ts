import { GraphQLResolveInfo } from 'graphql'

export interface ResolverFn<Root, Args, Ctx, Payload> {
  (root: Root, args: Args, ctx: Ctx, info: GraphQLResolveInfo):
    | Payload
    | Promise<Payload>
}

export interface ITypes {
  Context: any
  PAYMENT_PROVIDER: any
  PLACE_SIZES: any
  NOTIFICATION_TYPE: any
  CURRENCY: any
  MutationType: any

  QueryRoot: any
  MutationRoot: any
  SubscriptionRoot: any
  ViewerRoot: any
  AuthPayloadRoot: any
  MutationResultRoot: any
  ExperiencesByCityRoot: any
  HomeRoot: any
  ReservationRoot: any
  ExperienceRoot: any
  ReviewRoot: any
  NeighbourhoodRoot: any
  LocationRoot: any
  PictureRoot: any
  CityRoot: any
  ExperienceCategoryRoot: any
  UserRoot: any
  PaymentAccountRoot: any
  PlaceRoot: any
  BookingRoot: any
  NotificationRoot: any
  PaymentRoot: any
  PaypalInformationRoot: any
  CreditCardInformationRoot: any
  MessageRoot: any
  PricingRoot: any
  PlaceViewsRoot: any
  GuestRequirementsRoot: any
  PoliciesRoot: any
  HouseRulesRoot: any
  AmenitiesRoot: any
  CitySubscriptionPayloadRoot: any
  CityPreviousValuesRoot: any
}

export namespace IQuery {
  export type TopExperiencesResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    {},
    T['Context'],
    T['ExperienceRoot'][]
  >

  export type TopHomesResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    {},
    T['Context'],
    T['HomeRoot'][]
  >

  export interface ArgsHomesInPriceRange {
    min: number
    max: number
  }

  export type HomesInPriceRangeResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    ArgsHomesInPriceRange,
    T['Context'],
    T['HomeRoot'][]
  >

  export type TopReservationsResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    {},
    T['Context'],
    T['ReservationRoot'][]
  >

  export type FeaturedDestinationsResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    {},
    T['Context'],
    T['NeighbourhoodRoot'][]
  >

  export interface ArgsExperiencesByCity {
    cities: string[]
  }

  export type ExperiencesByCityResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    ArgsExperiencesByCity,
    T['Context'],
    T['ExperiencesByCityRoot'][]
  >

  export type ViewerResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    {},
    T['Context'],
    T['ViewerRoot'] | null
  >

  export type MyLocationResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    {},
    T['Context'],
    T['LocationRoot'] | null
  >

  export interface Resolver<T extends ITypes> {
    topExperiences: TopExperiencesResolver<T>
    topHomes: TopHomesResolver<T>
    homesInPriceRange: HomesInPriceRangeResolver<T>
    topReservations: TopReservationsResolver<T>
    featuredDestinations: FeaturedDestinationsResolver<T>
    experiencesByCity: ExperiencesByCityResolver<T>
    viewer: ViewerResolver<T>
    myLocation: MyLocationResolver<T>
  }
}

export namespace IMutation {
  export interface ArgsSignup {
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string
  }

  export type SignupResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    ArgsSignup,
    T['Context'],
    T['AuthPayloadRoot']
  >

  export interface ArgsLogin {
    email: string
    password: string
  }

  export type LoginResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    ArgsLogin,
    T['Context'],
    T['AuthPayloadRoot']
  >

  export interface ArgsAddPaymentMethod {
    cardNumber: string
    expiresOnMonth: number
    expiresOnYear: number
    securityCode: string
    firstName: string
    lastName: string
    postalCode: string
    country: string
  }

  export type AddPaymentMethodResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    ArgsAddPaymentMethod,
    T['Context'],
    T['MutationResultRoot']
  >

  export interface ArgsBook {
    placeId: string
    checkIn: string
    checkOut: string
    numGuests: number
  }

  export type BookResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    ArgsBook,
    T['Context'],
    T['MutationResultRoot']
  >

  export interface ArgsAddLocationToUser {
    location: T['LocationCreateInputRoot'] | null
  }

  export type AddLocationToUserResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    ArgsAddLocationToUser,
    T['Context'],
    T['MutationResultRoot'] | null
  >

  export interface Resolver<T extends ITypes> {
    signup: SignupResolver<T>
    login: LoginResolver<T>
    addPaymentMethod: AddPaymentMethodResolver<T>
    book: BookResolver<T>
    addLocationToUser: AddLocationToUserResolver<T>
  }
}

export namespace ISubscription {
  export type CityResolver<T extends ITypes> = ResolverFn<
    T['SubscriptionRoot'],
    {},
    T['Context'],
    T['CitySubscriptionPayloadRoot'] | null
  >

  export interface Resolver<T extends ITypes> {
    city: CityResolver<T>
  }
}

export namespace IViewer {
  export type MeResolver<T extends ITypes> = ResolverFn<
    T['ViewerRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export type BookingsResolver<T extends ITypes> = ResolverFn<
    T['ViewerRoot'],
    {},
    T['Context'],
    T['BookingRoot'][]
  >

  export interface Resolver<T extends ITypes> {
    me: MeResolver<T>
    bookings: BookingsResolver<T>
  }
}

export namespace IAuthPayload {
  export type TokenResolver<T extends ITypes> = ResolverFn<
    T['AuthPayloadRoot'],
    {},
    T['Context'],
    string
  >

  export type UserResolver<T extends ITypes> = ResolverFn<
    T['AuthPayloadRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export interface Resolver<T extends ITypes> {
    token: TokenResolver<T>
    user: UserResolver<T>
  }
}

export namespace IMutationResult {
  export type SuccessResolver<T extends ITypes> = ResolverFn<
    T['MutationResultRoot'],
    {},
    T['Context'],
    boolean
  >

  export interface Resolver<T extends ITypes> {
    success: SuccessResolver<T>
  }
}

export namespace IExperiencesByCity {
  export type ExperiencesResolver<T extends ITypes> = ResolverFn<
    T['ExperiencesByCityRoot'],
    {},
    T['Context'],
    T['ExperienceRoot'][]
  >

  export type CityResolver<T extends ITypes> = ResolverFn<
    T['ExperiencesByCityRoot'],
    {},
    T['Context'],
    T['CityRoot']
  >

  export interface Resolver<T extends ITypes> {
    experiences: ExperiencesResolver<T>
    city: CityResolver<T>
  }
}

export namespace IHome {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    string
  >

  export type NameResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    string | null
  >

  export type DescriptionResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    string
  >

  export type NumRatingsResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    number
  >

  export type AvgRatingResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    number | null
  >

  export interface ArgsPictures {
    first: number | null
  }

  export type PicturesResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    ArgsPictures,
    T['Context'],
    T['PictureRoot'][]
  >

  export type PerNightResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    name: NameResolver<T>
    description: DescriptionResolver<T>
    numRatings: NumRatingsResolver<T>
    avgRating: AvgRatingResolver<T>
    pictures: PicturesResolver<T>
    perNight: PerNightResolver<T>
  }
}

export namespace IReservation {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    string
  >

  export type TitleResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    string
  >

  export type AvgPricePerPersonResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    number
  >

  export type PicturesResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    T['PictureRoot'][]
  >

  export type LocationResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    T['LocationRoot']
  >

  export type IsCuratedResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    boolean
  >

  export type SlugResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    string
  >

  export type PopularityResolver<T extends ITypes> = ResolverFn<
    T['ReservationRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    title: TitleResolver<T>
    avgPricePerPerson: AvgPricePerPersonResolver<T>
    pictures: PicturesResolver<T>
    location: LocationResolver<T>
    isCurated: IsCuratedResolver<T>
    slug: SlugResolver<T>
    popularity: PopularityResolver<T>
  }
}

export namespace IExperience {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    string
  >

  export type CategoryResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    T['ExperienceCategoryRoot'] | null
  >

  export type TitleResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    string
  >

  export type LocationResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    T['LocationRoot']
  >

  export type PricePerPersonResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    number
  >

  export type ReviewsResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    T['ReviewRoot'][]
  >

  export type PreviewResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    T['PictureRoot']
  >

  export type PopularityResolver<T extends ITypes> = ResolverFn<
    T['ExperienceRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    category: CategoryResolver<T>
    title: TitleResolver<T>
    location: LocationResolver<T>
    pricePerPerson: PricePerPersonResolver<T>
    reviews: ReviewsResolver<T>
    preview: PreviewResolver<T>
    popularity: PopularityResolver<T>
  }
}

export namespace IReview {
  export type AccuracyResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    number
  >

  export type CheckInResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    number
  >

  export type CleanlinessResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    number
  >

  export type CommunicationResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    number
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    string
  >

  export type LocationResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    number
  >

  export type StarsResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    number
  >

  export type TextResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    string
  >

  export type ValueResolver<T extends ITypes> = ResolverFn<
    T['ReviewRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    accuracy: AccuracyResolver<T>
    checkIn: CheckInResolver<T>
    cleanliness: CleanlinessResolver<T>
    communication: CommunicationResolver<T>
    createdAt: CreatedAtResolver<T>
    id: IdResolver<T>
    location: LocationResolver<T>
    stars: StarsResolver<T>
    text: TextResolver<T>
    value: ValueResolver<T>
  }
}

export namespace INeighbourhood {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['NeighbourhoodRoot'],
    {},
    T['Context'],
    string
  >

  export type NameResolver<T extends ITypes> = ResolverFn<
    T['NeighbourhoodRoot'],
    {},
    T['Context'],
    string
  >

  export type SlugResolver<T extends ITypes> = ResolverFn<
    T['NeighbourhoodRoot'],
    {},
    T['Context'],
    string
  >

  export type HomePreviewResolver<T extends ITypes> = ResolverFn<
    T['NeighbourhoodRoot'],
    {},
    T['Context'],
    T['PictureRoot'] | null
  >

  export type CityResolver<T extends ITypes> = ResolverFn<
    T['NeighbourhoodRoot'],
    {},
    T['Context'],
    T['CityRoot']
  >

  export type FeaturedResolver<T extends ITypes> = ResolverFn<
    T['NeighbourhoodRoot'],
    {},
    T['Context'],
    boolean
  >

  export type PopularityResolver<T extends ITypes> = ResolverFn<
    T['NeighbourhoodRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    name: NameResolver<T>
    slug: SlugResolver<T>
    homePreview: HomePreviewResolver<T>
    city: CityResolver<T>
    featured: FeaturedResolver<T>
    popularity: PopularityResolver<T>
  }
}

export namespace ILocation {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['LocationRoot'],
    {},
    T['Context'],
    string
  >

  export type LatResolver<T extends ITypes> = ResolverFn<
    T['LocationRoot'],
    {},
    T['Context'],
    number
  >

  export type LngResolver<T extends ITypes> = ResolverFn<
    T['LocationRoot'],
    {},
    T['Context'],
    number
  >

  export type AddressResolver<T extends ITypes> = ResolverFn<
    T['LocationRoot'],
    {},
    T['Context'],
    string | null
  >

  export type DirectionsResolver<T extends ITypes> = ResolverFn<
    T['LocationRoot'],
    {},
    T['Context'],
    string | null
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    lat: LatResolver<T>
    lng: LngResolver<T>
    address: AddressResolver<T>
    directions: DirectionsResolver<T>
  }
}

export namespace IPicture {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PictureRoot'],
    {},
    T['Context'],
    string
  >

  export type UrlResolver<T extends ITypes> = ResolverFn<
    T['PictureRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    url: UrlResolver<T>
  }
}

export namespace ICity {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['CityRoot'],
    {},
    T['Context'],
    string
  >

  export type NameResolver<T extends ITypes> = ResolverFn<
    T['CityRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    name: NameResolver<T>
  }
}

export namespace IExperienceCategory {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['ExperienceCategoryRoot'],
    {},
    T['Context'],
    string
  >

  export type MainColorResolver<T extends ITypes> = ResolverFn<
    T['ExperienceCategoryRoot'],
    {},
    T['Context'],
    string
  >

  export type NameResolver<T extends ITypes> = ResolverFn<
    T['ExperienceCategoryRoot'],
    {},
    T['Context'],
    string
  >

  export type ExperienceResolver<T extends ITypes> = ResolverFn<
    T['ExperienceCategoryRoot'],
    {},
    T['Context'],
    T['ExperienceRoot'] | null
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    mainColor: MainColorResolver<T>
    name: NameResolver<T>
    experience: ExperienceResolver<T>
  }
}

export namespace IUser {
  export type BookingsResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['BookingRoot'][]
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export type EmailResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export type FirstNameResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export type HostingExperiencesResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['ExperienceRoot'][]
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export type IsSuperHostResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    boolean
  >

  export type LastNameResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export type LocationResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['LocationRoot'] | null
  >

  export type NotificationsResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['NotificationRoot'][]
  >

  export type OwnedPlacesResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['PlaceRoot'][]
  >

  export type PaymentAccountResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['PaymentAccountRoot'][] | null
  >

  export type PhoneResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export type ProfilePictureResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['PictureRoot'] | null
  >

  export type ReceivedMessagesResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['MessageRoot'][]
  >

  export type ResponseRateResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    number | null
  >

  export type ResponseTimeResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    number | null
  >

  export type SentMessagesResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    T['MessageRoot'][]
  >

  export type UpdatedAtResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export type TokenResolver<T extends ITypes> = ResolverFn<
    T['UserRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    bookings: BookingsResolver<T>
    createdAt: CreatedAtResolver<T>
    email: EmailResolver<T>
    firstName: FirstNameResolver<T>
    hostingExperiences: HostingExperiencesResolver<T>
    id: IdResolver<T>
    isSuperHost: IsSuperHostResolver<T>
    lastName: LastNameResolver<T>
    location: LocationResolver<T>
    notifications: NotificationsResolver<T>
    ownedPlaces: OwnedPlacesResolver<T>
    paymentAccount: PaymentAccountResolver<T>
    phone: PhoneResolver<T>
    profilePicture: ProfilePictureResolver<T>
    receivedMessages: ReceivedMessagesResolver<T>
    responseRate: ResponseRateResolver<T>
    responseTime: ResponseTimeResolver<T>
    sentMessages: SentMessagesResolver<T>
    updatedAt: UpdatedAtResolver<T>
    token: TokenResolver<T>
  }
}

export namespace IPaymentAccount {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PaymentAccountRoot'],
    {},
    T['Context'],
    string
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['PaymentAccountRoot'],
    {},
    T['Context'],
    string
  >

  export type TypeResolver<T extends ITypes> = ResolverFn<
    T['PaymentAccountRoot'],
    {},
    T['Context'],
    T['PAYMENT_PROVIDER'] | null
  >

  export type UserResolver<T extends ITypes> = ResolverFn<
    T['PaymentAccountRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export type PaymentsResolver<T extends ITypes> = ResolverFn<
    T['PaymentAccountRoot'],
    {},
    T['Context'],
    T['PaymentRoot'][]
  >

  export type PaypalResolver<T extends ITypes> = ResolverFn<
    T['PaymentAccountRoot'],
    {},
    T['Context'],
    T['PaypalInformationRoot'] | null
  >

  export type CreditcardResolver<T extends ITypes> = ResolverFn<
    T['PaymentAccountRoot'],
    {},
    T['Context'],
    T['CreditCardInformationRoot'] | null
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    createdAt: CreatedAtResolver<T>
    type: TypeResolver<T>
    user: UserResolver<T>
    payments: PaymentsResolver<T>
    paypal: PaypalResolver<T>
    creditcard: CreditcardResolver<T>
  }
}

export namespace IPlace {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    string
  >

  export type NameResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    string | null
  >

  export type SizeResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['PLACE_SIZES'] | null
  >

  export type ShortDescriptionResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    string
  >

  export type DescriptionResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    string
  >

  export type SlugResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    string
  >

  export type MaxGuestsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    number
  >

  export type NumBedroomsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    number
  >

  export type NumBedsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    number
  >

  export type NumBathsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    number
  >

  export type ReviewsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['ReviewRoot'][]
  >

  export type AmenitiesResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['AmenitiesRoot']
  >

  export type HostResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export type PricingResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['PricingRoot']
  >

  export type LocationResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['LocationRoot']
  >

  export type ViewsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['PlaceViewsRoot']
  >

  export type GuestRequirementsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['GuestRequirementsRoot'] | null
  >

  export type PoliciesResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['PoliciesRoot'] | null
  >

  export type HouseRulesResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['HouseRulesRoot'] | null
  >

  export type BookingsResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['BookingRoot'][]
  >

  export type PicturesResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    T['PictureRoot'][]
  >

  export type PopularityResolver<T extends ITypes> = ResolverFn<
    T['PlaceRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    name: NameResolver<T>
    size: SizeResolver<T>
    shortDescription: ShortDescriptionResolver<T>
    description: DescriptionResolver<T>
    slug: SlugResolver<T>
    maxGuests: MaxGuestsResolver<T>
    numBedrooms: NumBedroomsResolver<T>
    numBeds: NumBedsResolver<T>
    numBaths: NumBathsResolver<T>
    reviews: ReviewsResolver<T>
    amenities: AmenitiesResolver<T>
    host: HostResolver<T>
    pricing: PricingResolver<T>
    location: LocationResolver<T>
    views: ViewsResolver<T>
    guestRequirements: GuestRequirementsResolver<T>
    policies: PoliciesResolver<T>
    houseRules: HouseRulesResolver<T>
    bookings: BookingsResolver<T>
    pictures: PicturesResolver<T>
    popularity: PopularityResolver<T>
  }
}

export namespace IBooking {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['BookingRoot'],
    {},
    T['Context'],
    string
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['BookingRoot'],
    {},
    T['Context'],
    string
  >

  export type BookeeResolver<T extends ITypes> = ResolverFn<
    T['BookingRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export type PlaceResolver<T extends ITypes> = ResolverFn<
    T['BookingRoot'],
    {},
    T['Context'],
    T['PlaceRoot']
  >

  export type StartDateResolver<T extends ITypes> = ResolverFn<
    T['BookingRoot'],
    {},
    T['Context'],
    string
  >

  export type EndDateResolver<T extends ITypes> = ResolverFn<
    T['BookingRoot'],
    {},
    T['Context'],
    string
  >

  export type PaymentResolver<T extends ITypes> = ResolverFn<
    T['BookingRoot'],
    {},
    T['Context'],
    T['PaymentRoot']
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    createdAt: CreatedAtResolver<T>
    bookee: BookeeResolver<T>
    place: PlaceResolver<T>
    startDate: StartDateResolver<T>
    endDate: EndDateResolver<T>
    payment: PaymentResolver<T>
  }
}

export namespace INotification {
  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['NotificationRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['NotificationRoot'],
    {},
    T['Context'],
    string
  >

  export type LinkResolver<T extends ITypes> = ResolverFn<
    T['NotificationRoot'],
    {},
    T['Context'],
    string
  >

  export type ReadDateResolver<T extends ITypes> = ResolverFn<
    T['NotificationRoot'],
    {},
    T['Context'],
    string
  >

  export type TypeResolver<T extends ITypes> = ResolverFn<
    T['NotificationRoot'],
    {},
    T['Context'],
    T['NOTIFICATION_TYPE'] | null
  >

  export type UserResolver<T extends ITypes> = ResolverFn<
    T['NotificationRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export interface Resolver<T extends ITypes> {
    createdAt: CreatedAtResolver<T>
    id: IdResolver<T>
    link: LinkResolver<T>
    readDate: ReadDateResolver<T>
    type: TypeResolver<T>
    user: UserResolver<T>
  }
}

export namespace IPayment {
  export type BookingResolver<T extends ITypes> = ResolverFn<
    T['PaymentRoot'],
    {},
    T['Context'],
    T['BookingRoot']
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['PaymentRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PaymentRoot'],
    {},
    T['Context'],
    string
  >

  export type PaymentMethodResolver<T extends ITypes> = ResolverFn<
    T['PaymentRoot'],
    {},
    T['Context'],
    T['PaymentAccountRoot']
  >

  export type ServiceFeeResolver<T extends ITypes> = ResolverFn<
    T['PaymentRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    booking: BookingResolver<T>
    createdAt: CreatedAtResolver<T>
    id: IdResolver<T>
    paymentMethod: PaymentMethodResolver<T>
    serviceFee: ServiceFeeResolver<T>
  }
}

export namespace IPaypalInformation {
  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['PaypalInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type EmailResolver<T extends ITypes> = ResolverFn<
    T['PaypalInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PaypalInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type PaymentAccountResolver<T extends ITypes> = ResolverFn<
    T['PaypalInformationRoot'],
    {},
    T['Context'],
    T['PaymentAccountRoot']
  >

  export interface Resolver<T extends ITypes> {
    createdAt: CreatedAtResolver<T>
    email: EmailResolver<T>
    id: IdResolver<T>
    paymentAccount: PaymentAccountResolver<T>
  }
}

export namespace ICreditCardInformation {
  export type CardNumberResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type CountryResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type ExpiresOnMonthResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    number
  >

  export type ExpiresOnYearResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    number
  >

  export type FirstNameResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type LastNameResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type PaymentAccountResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    T['PaymentAccountRoot'] | null
  >

  export type PostalCodeResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export type SecurityCodeResolver<T extends ITypes> = ResolverFn<
    T['CreditCardInformationRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    cardNumber: CardNumberResolver<T>
    country: CountryResolver<T>
    createdAt: CreatedAtResolver<T>
    expiresOnMonth: ExpiresOnMonthResolver<T>
    expiresOnYear: ExpiresOnYearResolver<T>
    firstName: FirstNameResolver<T>
    id: IdResolver<T>
    lastName: LastNameResolver<T>
    paymentAccount: PaymentAccountResolver<T>
    postalCode: PostalCodeResolver<T>
    securityCode: SecurityCodeResolver<T>
  }
}

export namespace IMessage {
  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['MessageRoot'],
    {},
    T['Context'],
    string
  >

  export type DeliveredAtResolver<T extends ITypes> = ResolverFn<
    T['MessageRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['MessageRoot'],
    {},
    T['Context'],
    string
  >

  export type ReadAtResolver<T extends ITypes> = ResolverFn<
    T['MessageRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    createdAt: CreatedAtResolver<T>
    deliveredAt: DeliveredAtResolver<T>
    id: IdResolver<T>
    readAt: ReadAtResolver<T>
  }
}

export namespace IPricing {
  export type AverageMonthlyResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number
  >

  export type AverageWeeklyResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number
  >

  export type BasePriceResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number
  >

  export type CleaningFeeResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number | null
  >

  export type CurrencyResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    T['CURRENCY'] | null
  >

  export type ExtraGuestsResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number | null
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    string
  >

  export type MonthlyDiscountResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number | null
  >

  export type PerNightResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number
  >

  export type SecurityDepositResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number | null
  >

  export type SmartPricingResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    boolean
  >

  export type WeekendPricingResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number | null
  >

  export type WeeklyDiscountResolver<T extends ITypes> = ResolverFn<
    T['PricingRoot'],
    {},
    T['Context'],
    number | null
  >

  export interface Resolver<T extends ITypes> {
    averageMonthly: AverageMonthlyResolver<T>
    averageWeekly: AverageWeeklyResolver<T>
    basePrice: BasePriceResolver<T>
    cleaningFee: CleaningFeeResolver<T>
    currency: CurrencyResolver<T>
    extraGuests: ExtraGuestsResolver<T>
    id: IdResolver<T>
    monthlyDiscount: MonthlyDiscountResolver<T>
    perNight: PerNightResolver<T>
    securityDeposit: SecurityDepositResolver<T>
    smartPricing: SmartPricingResolver<T>
    weekendPricing: WeekendPricingResolver<T>
    weeklyDiscount: WeeklyDiscountResolver<T>
  }
}

export namespace IPlaceViews {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PlaceViewsRoot'],
    {},
    T['Context'],
    string
  >

  export type LastWeekResolver<T extends ITypes> = ResolverFn<
    T['PlaceViewsRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    lastWeek: LastWeekResolver<T>
  }
}

export namespace IGuestRequirements {
  export type GovIssuedIdResolver<T extends ITypes> = ResolverFn<
    T['GuestRequirementsRoot'],
    {},
    T['Context'],
    boolean
  >

  export type GuestTripInformationResolver<T extends ITypes> = ResolverFn<
    T['GuestRequirementsRoot'],
    {},
    T['Context'],
    boolean
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['GuestRequirementsRoot'],
    {},
    T['Context'],
    string
  >

  export type RecommendationsFromOtherHostsResolver<
    T extends ITypes
  > = ResolverFn<T['GuestRequirementsRoot'], {}, T['Context'], boolean>

  export interface Resolver<T extends ITypes> {
    govIssuedId: GovIssuedIdResolver<T>
    guestTripInformation: GuestTripInformationResolver<T>
    id: IdResolver<T>
    recommendationsFromOtherHosts: RecommendationsFromOtherHostsResolver<T>
  }
}

export namespace IPolicies {
  export type CheckInEndTimeResolver<T extends ITypes> = ResolverFn<
    T['PoliciesRoot'],
    {},
    T['Context'],
    number
  >

  export type CheckInStartTimeResolver<T extends ITypes> = ResolverFn<
    T['PoliciesRoot'],
    {},
    T['Context'],
    number
  >

  export type CheckoutTimeResolver<T extends ITypes> = ResolverFn<
    T['PoliciesRoot'],
    {},
    T['Context'],
    number
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['PoliciesRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['PoliciesRoot'],
    {},
    T['Context'],
    string
  >

  export type UpdatedAtResolver<T extends ITypes> = ResolverFn<
    T['PoliciesRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    checkInEndTime: CheckInEndTimeResolver<T>
    checkInStartTime: CheckInStartTimeResolver<T>
    checkoutTime: CheckoutTimeResolver<T>
    createdAt: CreatedAtResolver<T>
    id: IdResolver<T>
    updatedAt: UpdatedAtResolver<T>
  }
}

export namespace IHouseRules {
  export type AdditionalRulesResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    string | null
  >

  export type CreatedAtResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    string
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    string
  >

  export type PartiesAndEventsAllowedResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    boolean | null
  >

  export type PetsAllowedResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    boolean | null
  >

  export type SmokingAllowedResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    boolean | null
  >

  export type SuitableForChildrenResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    boolean | null
  >

  export type SuitableForInfantsResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    boolean | null
  >

  export type UpdatedAtResolver<T extends ITypes> = ResolverFn<
    T['HouseRulesRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    additionalRules: AdditionalRulesResolver<T>
    createdAt: CreatedAtResolver<T>
    id: IdResolver<T>
    partiesAndEventsAllowed: PartiesAndEventsAllowedResolver<T>
    petsAllowed: PetsAllowedResolver<T>
    smokingAllowed: SmokingAllowedResolver<T>
    suitableForChildren: SuitableForChildrenResolver<T>
    suitableForInfants: SuitableForInfantsResolver<T>
    updatedAt: UpdatedAtResolver<T>
  }
}

export namespace IAmenities {
  export type AirConditioningResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type BabyBathResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type BabyMonitorResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type BabysitterRecommendationsResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type BathtubResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type BreakfastResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type BuzzerWirelessIntercomResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type CableTvResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type ChangingTableResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type ChildrensBooksAndToysResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type ChildrensDinnerwareResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type CribResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type DoormanResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type DryerResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type ElevatorResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type EssentialsResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type FamilyKidFriendlyResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type FreeParkingOnPremisesResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type FreeParkingOnStreetResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type GymResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type HairDryerResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type HangersResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type HeatingResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type HotTubResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    string
  >

  export type IndoorFireplaceResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type InternetResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type IronResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type KitchenResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type LaptopFriendlyWorkspaceResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type PaidParkingOffPremisesResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type PetsAllowedResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type PoolResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type PrivateEntranceResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type ShampooResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type SmokingAllowedResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type SuitableForEventsResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type TvResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type WasherResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type WheelchairAccessibleResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export type WirelessInternetResolver<T extends ITypes> = ResolverFn<
    T['AmenitiesRoot'],
    {},
    T['Context'],
    boolean
  >

  export interface Resolver<T extends ITypes> {
    airConditioning: AirConditioningResolver<T>
    babyBath: BabyBathResolver<T>
    babyMonitor: BabyMonitorResolver<T>
    babysitterRecommendations: BabysitterRecommendationsResolver<T>
    bathtub: BathtubResolver<T>
    breakfast: BreakfastResolver<T>
    buzzerWirelessIntercom: BuzzerWirelessIntercomResolver<T>
    cableTv: CableTvResolver<T>
    changingTable: ChangingTableResolver<T>
    childrensBooksAndToys: ChildrensBooksAndToysResolver<T>
    childrensDinnerware: ChildrensDinnerwareResolver<T>
    crib: CribResolver<T>
    doorman: DoormanResolver<T>
    dryer: DryerResolver<T>
    elevator: ElevatorResolver<T>
    essentials: EssentialsResolver<T>
    familyKidFriendly: FamilyKidFriendlyResolver<T>
    freeParkingOnPremises: FreeParkingOnPremisesResolver<T>
    freeParkingOnStreet: FreeParkingOnStreetResolver<T>
    gym: GymResolver<T>
    hairDryer: HairDryerResolver<T>
    hangers: HangersResolver<T>
    heating: HeatingResolver<T>
    hotTub: HotTubResolver<T>
    id: IdResolver<T>
    indoorFireplace: IndoorFireplaceResolver<T>
    internet: InternetResolver<T>
    iron: IronResolver<T>
    kitchen: KitchenResolver<T>
    laptopFriendlyWorkspace: LaptopFriendlyWorkspaceResolver<T>
    paidParkingOffPremises: PaidParkingOffPremisesResolver<T>
    petsAllowed: PetsAllowedResolver<T>
    pool: PoolResolver<T>
    privateEntrance: PrivateEntranceResolver<T>
    shampoo: ShampooResolver<T>
    smokingAllowed: SmokingAllowedResolver<T>
    suitableForEvents: SuitableForEventsResolver<T>
    tv: TvResolver<T>
    washer: WasherResolver<T>
    wheelchairAccessible: WheelchairAccessibleResolver<T>
    wirelessInternet: WirelessInternetResolver<T>
  }
}

export namespace ICitySubscriptionPayload {
  export type MutationResolver<T extends ITypes> = ResolverFn<
    T['CitySubscriptionPayloadRoot'],
    {},
    T['Context'],
    T['MutationType']
  >

  export type NodeResolver<T extends ITypes> = ResolverFn<
    T['CitySubscriptionPayloadRoot'],
    {},
    T['Context'],
    T['CityRoot'] | null
  >

  export type UpdatedFieldsResolver<T extends ITypes> = ResolverFn<
    T['CitySubscriptionPayloadRoot'],
    {},
    T['Context'],
    string[]
  >

  export type PreviousValuesResolver<T extends ITypes> = ResolverFn<
    T['CitySubscriptionPayloadRoot'],
    {},
    T['Context'],
    T['CityPreviousValuesRoot'] | null
  >

  export interface Resolver<T extends ITypes> {
    mutation: MutationResolver<T>
    node: NodeResolver<T>
    updatedFields: UpdatedFieldsResolver<T>
    previousValues: PreviousValuesResolver<T>
  }
}

export namespace ICityPreviousValues {
  export type IdResolver<T extends ITypes> = ResolverFn<
    T['CityPreviousValuesRoot'],
    {},
    T['Context'],
    string
  >

  export type NameResolver<T extends ITypes> = ResolverFn<
    T['CityPreviousValuesRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    name: NameResolver<T>
  }
}

export interface IResolvers<T extends ITypes> {
  Query: IQuery.Resolver<T>
  Mutation: IMutation.Resolver<T>
  Subscription: ISubscription.Resolver<T>
  Viewer: IViewer.Resolver<T>
  AuthPayload: IAuthPayload.Resolver<T>
  MutationResult: IMutationResult.Resolver<T>
  ExperiencesByCity: IExperiencesByCity.Resolver<T>
  Home: IHome.Resolver<T>
  Reservation: IReservation.Resolver<T>
  Experience: IExperience.Resolver<T>
  Review: IReview.Resolver<T>
  Neighbourhood: INeighbourhood.Resolver<T>
  Location: ILocation.Resolver<T>
  Picture: IPicture.Resolver<T>
  City: ICity.Resolver<T>
  ExperienceCategory: IExperienceCategory.Resolver<T>
  User: IUser.Resolver<T>
  PaymentAccount: IPaymentAccount.Resolver<T>
  Place: IPlace.Resolver<T>
  Booking: IBooking.Resolver<T>
  Notification: INotification.Resolver<T>
  Payment: IPayment.Resolver<T>
  PaypalInformation: IPaypalInformation.Resolver<T>
  CreditCardInformation: ICreditCardInformation.Resolver<T>
  Message: IMessage.Resolver<T>
  Pricing: IPricing.Resolver<T>
  PlaceViews: IPlaceViews.Resolver<T>
  GuestRequirements: IGuestRequirements.Resolver<T>
  Policies: IPolicies.Resolver<T>
  HouseRules: IHouseRules.Resolver<T>
  Amenities: IAmenities.Resolver<T>
  CitySubscriptionPayload: ICitySubscriptionPayload.Resolver<T>
  CityPreviousValues: ICityPreviousValues.Resolver<T>
}
