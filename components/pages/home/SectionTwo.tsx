import { bgSectionOne, logoMuseum } from '@/assets'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

const SectionTwo = () => {
  return (
    <div className='grid grid-cols-6 grid-rows-2 gap-3'>
      <div
        className='col-span-4 h-[445px] bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://ik.imagekit.io/tvlk/blog/2022/12/vien-hai-duong-hoc-nha-trang-10.jpg")',
        }}
      ></div>
      <div className='col-span-2 col-start-5 h-[445px] rounded-xl relative overflow-hidden'>
        <div
          className=' absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 '
          style={{ backgroundImage: `url(${bgSectionOne.src})` }}
        ></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center'>
          <Image
            src={logoMuseum.src}
            alt='logo-museum'
            width={150}
            height={150}
          />

          <p className='uppercase text-color-1 font-bold text-lg tracking-wide mb-1'>
            Viện Hải Dương Học
          </p>

          <button className='flex items-center justify-between w-full max-w-[200px] h-12 bg-white cursor-pointer border-2 border-white rounded-full px-4 py-2 shrink min-w-0  text-color-1 scale-[1.1] hover:scale-100 hover:border-white hover:bg-color-1  hover:text-white'>
            <span className='w-full text-center truncate font-bold'>More</span>
            <FaArrowRightLong strokeWidth={4} size={22} />
          </button>
        </div>
      </div>
      <div
        className='col-span-2 row-start-2 h-[445px] bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://ik.imagekit.io/tvlk/blog/2022/12/vien-hai-duong-hoc-nha-trang-cover.jpg")',
        }}
      ></div>
      <div
        className='col-span-2 col-start-3 row-start-2 h-[445px] bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://ik.imagekit.io/tvlk/blog/2022/12/vien-hai-duong-hoc-nha-trang-5.jpg")',
        }}
      ></div>
      <div
        className='col-span-2 col-start-5 row-start-2 h-[445px] bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://kongforest.com/FileStorage/content/images/thap-ba-ponagar-nha-trang-9.jpeg")',
        }}
      ></div>
    </div>
  )
}

export default SectionTwo
