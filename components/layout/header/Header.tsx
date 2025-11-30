import { Locale } from '@/types/locale'
import { formatDateHeader } from '@/utils/date'
import ContentHeader from './ContentHeader'

const URL_WEATHER =
  'https://api.openweathermap.org/data/2.5/weather?lat=12.2273&lon=109.2590&appid=a8f83713ecac576dd762f7f7960cbbf3&units=metric'

async function getWeather() {
  const res = await fetch(URL_WEATHER, { next: { revalidate: 3600 } })
  return res.json()
}

const Header = async ({ locale }: { locale: string }) => {
  const data = await getWeather()
  const date = new Date(data.dt * 1000)
  const weather = data.weather?.[0] || null

  const formatDate = formatDateHeader(date, locale as Locale)

  // console.log('=====', weather)

  return <ContentHeader dateStr={formatDate} iconWeather={weather.icon} />
}

export default Header
