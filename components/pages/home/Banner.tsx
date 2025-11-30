'use client'

import { useEffect, useState } from 'react'
import { banner1, banner2, banner3, banner4 } from '@/assets'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'

const data = [banner1, banner2, banner3, banner4]

const BannerSlider = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='absolute inset-0'
        >
          <motion.div
            key={index}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5, ease: 'easeOut' }}
            className='absolute inset-0'
          >
            <Image
              src={data[index].src}
              alt={`banner-${index}`}
              fill
              className='object-cover'
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className=' absolute bottom-0 left-0 right-0 w-full '>
        <div className=' flex  '>
          <p className=' bg-color-1 text-white text-base font-bold uppercase py-3 px-8 '>
            News
          </p>
          <div className='flex justify-between gap-4 w-full bg-color-2 px-8 items-center'>
            <p className=''>
              <span>a</span>
            </p>
            <button className='flex gap-2 items-center bg-color-1 rounded-full text-white px-5 py-1.5 text-xs font-bold uppercase transition-transform duration-300 ease-in-out  cursor-pointer border border-color-1 scale-[1.1] hover:bg-color-2 hover:text-color-1 hover:scale-[1.0]'>
              <span className='font-extrabold'>More</span>
              <span>
                <FaArrowRightLong strokeWidth={4} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSlider
