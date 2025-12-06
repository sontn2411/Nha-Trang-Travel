import ConetntEventNews from './ContentEventNews'
import { LuNewspaper } from 'react-icons/lu'

const news = [
  {
    id: 1,
    title: 'Khánh Hòa đón hơn 7 triệu lượt khách năm 2025',
    date: '2025-02-18',
    image:
      'https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/022025/khach-du-lich-nha-trang_20250218223321.jpg',
    shortDescription:
      'Ngành du lịch Khánh Hòa ghi nhận tăng trưởng mạnh với hơn 7 triệu lượt khách trong năm 2025.',
    isNew: true,
  },
  {
    id: 2,
    title: 'Nha Trang tổ chức Festival Biển với hơn 50 sự kiện',
    date: '2025-04-10',
    image:
      'https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2025-04/ever_glamour_nha_trang.jpg',
    shortDescription:
      'Festival Biển Nha Trang – Khánh Hòa 2025 chính thức khởi động với loạt hoạt động văn hóa, biển đảo và nghệ thuật.',
    isNew: true,
  },
  {
    id: 3,
    title: 'Mở tuyến bay mới nối Nha Trang với Singapore',
    date: '2025-03-05',
    image:
      'https://cdn.baogiaothong.vn/files/duong.pham/2024/05/24/may-bay-bamboo-3257.jpeg',
    shortDescription:
      'Hãng hàng không công bố đường bay mới nhằm tăng cường kết nối du lịch quốc tế đến Nha Trang.',
    isNew: false,
  },
]

const SectionNews = () => {
  return (
    <div
      className='  mt-8  bg-center bg-color-2'
      // style={{ backgroundImage: `url(${bgEvent.src})` }}
    >
      <ConetntEventNews
        data={news}
        title={
          <h3 className='text-2xl font-bold uppercase  text-center mb-6 flex  justify-center gap-2 items-center'>
            <LuNewspaper />
            <span>News</span>
          </h3>
        }
      />
    </div>
  )
}

export default SectionNews
