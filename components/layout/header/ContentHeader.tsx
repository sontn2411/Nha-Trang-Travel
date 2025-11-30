'use client'

import { bgHeader, logo } from '@/assets'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import MenuHamburger from './MenuHamburger'
import { dataIcon, KeyIcon } from '@/utils/weather'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContentHeaderProps {
  dateStr: string
  iconWeather: string
}

const ContentHeader = ({ dateStr, iconWeather }: ContentHeaderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const t = useTranslations('Header')

  const icon = dataIcon[iconWeather as KeyIcon]

  const handleMenu = () => setIsOpenMenu(!isOpenMenu)

  return (
    <>
      {/* HEADER */}
      <div
        className='fixed w-full min-w-[980px] h-[138px] bg-center bg-no-repeat bg-size-[100%_100%] z-200'
        style={{ backgroundImage: `url(${bgHeader.src})` }}
      >
        <div className='text-white px-10 pt-4 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <span className='font-bold text-[15px] uppercase'>{dateStr}</span>
            <Image alt='icon-weather' src={icon.src} height={57} width={57} />
          </div>

          <div className='flex gap-3 items-center'>
            <Image src={logo} height={47} alt='logo' />
            <div>
              <p className='font-bold text-base'>{t('title')}</p>
              <p className='text-xs text-gray-200'>{t('desc')}</p>
            </div>
          </div>

          <MenuHamburger isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
        </div>
      </div>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            key='menu'
            initial={{ y: '-100%', opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className='fixed inset-0 bg-color-1 z-100'
            style={{ transformOrigin: 'top' }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ContentHeader
