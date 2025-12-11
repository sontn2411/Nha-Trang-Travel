import { diaryFune, diaryHashi, map } from '@/assets'
import Image from 'next/image'

const SectionFacebook = () => {
  return (
    <div className='h-[530px] overflow-hidden relative  '>
      <div className='bg-soft-grid   absolute inset-0  h-full w-full'></div>
      <Image
        src={map.src}
        alt='map'
        className=' absolute right-10 top-10'
        width={240}
        height={240}
      />

      <div
        className={`w-[317px] h-[217px] bg-no-repeat absolute left-0 bottom-6 hashi-animate `}
        style={{ backgroundImage: `url(${diaryHashi.src})` }}
      ></div>

      <div
        className={`w-[198px] h-[168px] bg-no-repeat absolute left-32 top-20 fune-animate `}
        style={{ backgroundImage: `url(${diaryFune.src})` }}
      ></div>

      {/*<div
        className={`w-[102px] h-[55px] bg-no-repeat absolute bottom-10 left-1/2  kamome-animate`}
        style={{ backgroundImage: `url(${diaryKamome.src})` }}
      ></div> */}
    </div>
  )
}

export default SectionFacebook
