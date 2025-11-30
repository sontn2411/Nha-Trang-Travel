import { beSanHo, bgSectionOne, logoMuseum, saoBien } from '@/assets'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'

const images = [beSanHo, beSanHo, saoBien]

const SectionOne = () => {
  return (
    <div className='w-full relative mt-24 '></div>
    // <div className='w-full relative min-h-screen flex justify-center items-center'>
    //   <div
    //     className='absolute inset-0 bg-center bg-no-repeat bg-cover z-0 opacity-[0.4]'
    //     style={{ backgroundImage: `url(${bgSectionOne.src})` }}
    //   />

    //   <div className='flex flex-1 justify-center items-center '>
    //     <div className=' container flex flex-col max-w-6xl flex-1 z-10'>
    //       <div className='flex flex-col lg:flex-row gap-8 w-full'>
    //         <div className='flex flex-col w-full lg:w-1/2 justify-center space-y-8'>
    //           <div className='flex items-center gap-4'>
    //             <Image src={logoMuseum} alt='logo' height={100} />
    //             <div>
    //               <p className='text-3xl font-bold'>Bảo Tàng Hải Dương Học</p>
    //               <p className='text-color-1'>
    //                 Khám phá bí ẩn của đại dương sâu thẳm.
    //               </p>
    //             </div>
    //           </div>
    //           <div className='flex flex-col space-y-4 rounded-xl bg-white/50 backdrop-blur-sm p-6 border border-gray-200'>
    //             <div className='flex items-center gap-4 min-h-[72px] py-2 justify-between'>
    //               <div className='flex items-center gap-4'>
    //                 <div className='text-color-1 flex items-center justify-center rounded-lg bg-color-1/10 shrink-0 size-12'>
    //                   <FaLocationArrow size={22} className=' opacity-70' />
    //                 </div>
    //                 <div className='flex flex-col justify-center'>
    //                   <p className='text-gray-900 text-base font-semibold leading-normal line-clamp-2'>
    //                     01 Cầu Đá, Trần Phú, Vĩnh Hoà, Nha Trang
    //                   </p>
    //                   <p className='text-gray-400 text-sm font-semibold leading-normal line-clamp-1'>
    //                     Địa chỉ
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className='w-full h-px bg-gray-200' />
    //             <div className='flex items-center gap-4 min-h-[72px] py-2 justify-between'>
    //               <div className='flex items-center gap-4'>
    //                 <div className='text-color-1 flex items-center justify-center rounded-lg bg-color-1/10 shrink-0 size-12'>
    //                   <MdOutlineAccessTimeFilled
    //                     size={22}
    //                     className=' opacity-70'
    //                   />
    //                 </div>
    //                 <div className='flex flex-col justify-center'>
    //                   <p className='text-gray-900 text-base font-semibold leading-normal line-clamp-2'>
    //                     Thứ Hai - Chủ Nhật: 06:00 - 18:00
    //                   </p>
    //                   <p className='text-gray-400 text-sm font-semibold leading-normal line-clamp-1'>
    //                     Giờ mở cửa
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className='flex w-full lg:w-1/2 items-center justify-center'>
    //           <div className='grid grid-cols-6 grid-rows-4 gap-4 aspect-4/3 w-full max-w-2xl'>
    //             <div className='col-span-4 row-span-4 rounded-xl overflow-hidden'>
    //               <div
    //                 className='w-full h-full bg-center bg-no-repeat bg-cover'
    //                 style={{
    //                   backgroundImage: `url(${images[0].src})`,
    //                 }}
    //               />
    //             </div>

    //             <div className='col-span-2 row-span-2 rounded-xl overflow-hidden'>
    //               <div
    //                 className='w-full h-full bg-center bg-no-repeat bg-cover'
    //                 style={{
    //                   backgroundImage: `url(${images[1].src})`,
    //                 }}
    //               />
    //             </div>

    //             <div className='col-span-2 row-span-2 rounded-xl overflow-hidden'>
    //               <div
    //                 className='w-full h-full bg-center bg-no-repeat bg-cover'
    //                 style={{
    //                   backgroundImage: `url(${images[2].src})`,
    //                 }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SectionOne
