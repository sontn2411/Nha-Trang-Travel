import { bgEvent } from '@/assets'
import ConetntEventNews from './ContentEventNews'

const events = [
  {
    id: 1,
    title: 'Lễ hội Văn hóa - Du lịch biển Nha Trang 2025',
    date: '2025-06-07',
    image: 'https://some-image-url.com/image1.jpg',
    isNew: true,
  },
  {
    id: 2,
    title: 'Festival Biển Nha Trang – Khánh Hòa 2025',
    date: '2025-04-10',
    image: 'https://some-image-url.com/image2.jpg',
    isNew: false,
  },
  {
    id: 3,
    title: 'Hội thảo "Để Khánh Hòa thành điểm đến xanh toàn diện"',
    date: '2025-09-11',
    image: 'https://some-image-url.com/image3.jpg',
    isNew: false,
  },
]

const SectionEvents = () => {
  return (
    <div
      className='  mt-8  bg-center'
      style={{ backgroundImage: `url(${bgEvent.src})` }}
    >
      <ConetntEventNews
        data={events}
        title={
          <h3 className='text-2xl font-bold uppercase text-color-1 text-center mb-6'>
            Event
          </h3>
        }
      />
    </div>
  )
}

export default SectionEvents
