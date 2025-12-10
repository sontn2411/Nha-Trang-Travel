const IconInstagram = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <circle
      cx='17'
      cy='7'
      r='1.5'
      fill='currentColor'
      fillOpacity='0'
      stroke='currentColor'
    >
      <animate
        fill='freeze'
        attributeName='fill-opacity'
        begin='1.3s'
        dur='0.15s'
        values='0;1'
        stroke='currentColor'
      />
    </circle>
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path
        strokeDasharray='72'
        strokeDashoffset='72'
        d='M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z'
        stroke='currentColor'
      >
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.6s'
          values='72;0'
          stroke='currentColor'
        />
      </path>
      <path
        strokeDasharray='28'
        strokeDashoffset='28'
        d='M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4'
        stroke='currentColor'
      >
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='0.7s'
          dur='0.6s'
          values='28;0'
          stroke='currentColor'
        />
      </path>
    </g>
  </svg>
)

const SectionInstagram = () => {
  return (
    <div className='h-[530px] overflow-hidden relative'>
      {/* Background */}
      <div
        className='absolute inset-0 bg-cover bg-no-repeat w-full h-full px-2 z-0'
        style={{
          backgroundImage:
            'url(https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos733329868xl-1754542306303.jpg)',
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
      />

      <div className='relative z-10 text-white flex flex-col justify-center gap-14 items-center h-full  w-full'>
        <div className='flex gap-2 items-center'>
          <div className='w-10 h-10'>
            <IconInstagram />
          </div>
          <p className=' font-bold uppercase text-2xl tracking-wider '>
            Instagram
          </p>
        </div>
        <div>
          <p className='max-w-xl  font-normal tracking-wider text-center text-base/7'>
            Experience Nha Trang through our Instagram. Discover stunning
            beaches, vibrant culture, island adventures, and hidden local gems.
            Stay inspired with travel moments, tips, and highlights shared
            daily. Follow us to explore the beauty and spirit of Nha Trang in
            the most visual and authentic way.{' '}
          </p>
        </div>
        <div>
          <button
            className='border-2 flex items-center justify-center rounded-full cursor-pointer px-4  scale-[1.1] h-12 w-52 bg-color-1 text-white border-color-1  group 
               transition-transform duration-300 ease-in-out hover:scale-[1.0] hover:bg-white hover:text-color-1'
          >
            <span className='font-semibold tracking-[5px]'>Instagram</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionInstagram
