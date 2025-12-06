import BannerSlider from '@/components/pages/home/Banner'
import SectionEvents from '@/components/pages/home/SectionEvents'
import SectionNews from '@/components/pages/home/SectionNews'
import SectionOne from '@/components/pages/home/SectionOne'
import SectionTwo from '@/components/pages/home/SectionTwo'

import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <div className=' '>
      <BannerSlider />

      <div className='mt-24 px-4 flex flex-col gap-3'>
        <SectionOne />
        <SectionTwo />
      </div>
      <SectionEvents />
      <SectionNews />
    </div>
  )
}
