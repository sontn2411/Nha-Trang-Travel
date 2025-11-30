import { useTranslations } from 'next-intl'

interface MenuHumburgerProps {
  isOpenMenu: boolean
  handleMenu: () => void
}

const MenuHamburger = ({ isOpenMenu, handleMenu }: MenuHumburgerProps) => {
  const t = useTranslations('Menu')

  return (
    <>
      <div
        className='border flex items-center rounded-full cursor-pointer px-2 bg-white scale-[1.1] group 
             transition-transform duration-300 ease-in-out hover:scale-[1.0] hover:bg-color-1'
        onClick={handleMenu}
      >
        <button className='text-color-1 w-10 h-10 relative focus:outline-none cursor-pointer group-hover:text-white'>
          <div className='block w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <span
              className={`block absolute h-[3px] w-5 bg-current transition-transform duration-300 ease-in-out transform ${
                isOpenMenu ? 'rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`block absolute h-[3px] w-5 bg-current transition-transform duration-300 ease-in-out transform ${
                isOpenMenu ? '-rotate-45' : 'translate-y-1'
              }`}
            />
          </div>
        </button>
        <span className='text-color-1 text-sm font-bold pr-1.5 uppercase transition-colors duration-300 ease-in-out group-hover:text-white min-w-14'>
          {isOpenMenu ? t('close') : t('open')}
        </span>
      </div>
    </>
  )
}

export default MenuHamburger
