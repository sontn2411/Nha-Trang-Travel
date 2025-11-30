import { cloud, day, day3, rainy3, rainy4, thunder } from '@/assets'

export type KeyIcon = '04d' | '01d' | '02d' | '03d' | '09d' | '10d' | '11d'

export const dataIcon = {
  '04d': cloud,
  '01d': day,
  '02d': day3,
  '03d': cloud,
  '09d': rainy4,
  '10d': rainy3,
  '11d': thunder,
}
