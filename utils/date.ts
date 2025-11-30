const dataLocale = {
  vi: 'vi-VN',
  en: 'en-US',
}

export const formatDateHeader = (
  date: Date,
  locale: keyof typeof dataLocale
) => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')

  const weekday = date.toLocaleDateString(dataLocale[locale], {
    weekday: 'short',
  })

  const formatted = `${day}/${month} ${weekday}`

  return formatted
}
