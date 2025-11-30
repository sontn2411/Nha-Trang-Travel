import BannerSlider from '@/components/pages/home/Banner'
import SectionOne from '@/components/pages/home/SectionOne'

import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <div className=' '>
      <BannerSlider />

      <SectionOne />
    </div>
  )
}
