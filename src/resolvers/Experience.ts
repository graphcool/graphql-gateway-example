import { IExperience } from '../generated/resolvers'
import { Types } from './types'
import { ExperienceCategoryRoot } from './ExperienceCategory'
import { LocationRoot } from './Location'
import { ReviewRoot } from './Review'
import { PictureRoot } from './Picture'

export interface ExperienceRoot {
  id: string
  category?: ExperienceCategoryRoot
  title: string
  location: LocationRoot
  pricePerPerson: number
  reviews: ReviewRoot[]
  preview: PictureRoot
  popularity: number
}

export const Experience: IExperience.Resolver<Types> = {
  id: root => root.id,
  category: (root, args, ctx) => ctx.db.experience({ id: root.id }).category(),
  title: root => root.title,
  location: (root, args, ctx) => ctx.db.experience({ id: root.id }).location(),
  pricePerPerson: root => root.pricePerPerson,
  reviews: (root, args, ctx) => ctx.db.experience({ id: root.id }).reviews(),
  preview: (root, args, ctx) => ctx.db.experience({ id: root.id }).preview(),
  popularity: root => root.popularity,
}
