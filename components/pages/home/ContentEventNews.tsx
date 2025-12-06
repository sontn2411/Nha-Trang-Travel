import { ReactNode } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

interface item {
  id: number
  title: string
  image: string
  date: string
  isNew: boolean
}

interface ConetntEventNewsProps {
  title: ReactNode
  data: item[]
}

const ConetntEventNews = ({ data, title }: ConetntEventNewsProps) => {
  return (
    <div className='py-20 px-4 flex justify-center h-full max-w-4xl w-full mx-auto'>
      <div className=''>
        {title}
        <ul className=' flex gap-4'>
          {data.map((ev) => (
            <li key={ev.id} className='flex flex-col w-full'>
              {/* <Image
                    src={ev.image}
                    alt={ev.title}
                    className=' object-cover rounded-md shadow'
                    width={100}
                    height={100}
                  /> */}
              <div className='w-full h-44 bg-amber-400'></div>

              <div className='mt-2'>
                <p className='text-sm text-color-1 uppercase font-semibold '>
                  {ev.date}
                  {ev.isNew && (
                    <span className='text-[10px] text-white bg-red-500 ml-2 px-2 py-0.5 rounded-full'>
                      NEW
                    </span>
                  )}
                </p>

                {/* TITLE */}
                <p className='text-base font-semibold text-gray-700'>
                  {ev.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className=' flex justify-center mt-10'>
          <button
            className='border-2 flex items-center justify-between rounded-full cursor-pointer px-4  scale-[1.1] h-12 w-52 bg-color-1 text-white border-color-1  group 
               transition-transform duration-300 ease-in-out hover:scale-[1.0] hover:bg-white hover:text-color-1'
          >
            <span className='w-full uppercase font-semibold text-sm tracking-[1.4px]'>
              More
            </span>
            <FaArrowRightLong strokeWidth={4} size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConetntEventNews
