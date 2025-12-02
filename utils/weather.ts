import { cloud, day, day3, rainy3, rainy4, thunder } from '@/assets'

export type KeyIcon =
  | '04d'
  | '04n'
  | '01n'
  | '01d'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'

export const dataIcon = {
  '04d': cloud,
  '04n': cloud,
  '01d': day,
  '01n': day,
  '02d': day3,
  '02n': day3,
  '03d': cloud,
  '03n': cloud,
  '09d': rainy4,
  '09n': rainy4,
  '10d': rainy3,
  '10n': rainy3,
  '11d': thunder,
  '11n': thunder,
}
