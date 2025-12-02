import { logoPonaga } from '@/assets'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

const SectionTwo = () => {
  return (
    <div className='grid grid-cols-6 auto-rows-2 gap-x-3 gap-y-4'>
      <div className='col-span-2 h-[445px] bg-color-3 rounded-xl relative overflow-hidden'>
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center'>
          <Image
            src={logoPonaga.src}
            alt='logo-ponaga'
            width={150}
            height={150}
          />

          <p className='uppercase text-color-4 font-bold font-NotoSansCham text-lg tracking-wide mb-1'>
            Tháp Bà PoNagar
          </p>

          <button className='flex items-center justify-between w-full max-w-[200px] h-12 bg-white cursor-pointer border-2 border-white rounded-full px-4 py-2 shrink min-w-0  text-color-4 scale-[1.1] hover:scale-100 hover:border-color-4 hover:bg-color-3'>
            <span className='w-full text-center truncate font-bold'>More</span>
            <FaArrowRightLong strokeWidth={4} size={22} />
          </button>
        </div>
      </div>

      <div
        className='col-span-4 col-start-3  h-[445px] bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://kongforest.com/FileStorage/content/images/thap-ba-ponagar-nha-trang-2.jpeg")',
        }}
      ></div>

      <div
        className='col-span-2 row-start-2 h-80 bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://kongforest.com/FileStorage/content/images/thap-ba-ponagar-nha-trang-4.jpeg")',
        }}
      ></div>

      <div
        className='col-span-2 col-start-3 row-start-2 h-80 bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://kongforest.com/FileStorage/content/images/thap-ba-ponagar-nha-trang-9.jpeg")',
        }}
      ></div>

      <div
        className='col-span-2 col-start-5 row-start-2 h-80 bg-cover bg-center rounded-xl'
        style={{
          backgroundImage:
            'url("https://kongforest.com/FileStorage/content/images/thap-ba-ponagar-nha-trang-3.jpeg")',
        }}
      ></div>
    </div>
  )
}

export default SectionTwo
