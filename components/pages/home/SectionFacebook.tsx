import { diaryBg } from '@/assets'

const SectionFacebook = () => {
  return (
    <div className='h-[530px] overflow-hidden relative'>
      <div
        className='absolute inset-0 bg-cover  w-full h-full px-2 z-0 '
        style={{
          backgroundImage: `url(${diaryBg.src})`,
          backgroundPosition: 'center top',
          paddingBottom: '80px',
        }}
      />
    </div>
  )
}

export default SectionFacebook
