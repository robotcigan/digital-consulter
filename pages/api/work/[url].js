const works = [
  {
    name: 'Клиника Глазуновой',
    url: 'clinic-glazunova',
    description: 'some description',
    tags: ['Дизайн', 'Логотип', 'Консультации'],
    img: ['1.png', '2.png', '3.png'],
  }, 
  {
    name: 'Stereo 7',
    url: 'stereo-7',
    description: 'some description',
    tags: ['Дизайн', 'Печатные материалы'],
    img: ['1.png', '2.png', '3.png']
  },
  {
    name: 'Haven pets',
    url: 'haven-pets',
    description: 'some description',
    tags: ['Дизайн', 'Логотип', 'Консультации'],
    img: ['1.png']
  }
]

export default function work(req, res) {
  const { url } = req.query
  works.forEach(work => {
    if (work.url === url) {
      res.status(200).json(work)
    } 
  })
  console.log('where?')
  res.status(404).send('err')
}