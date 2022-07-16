import Image from 'next/image'

export default function Work ({ workData }) {
  // console.log(workData.tags.map(tag => tag.name))
  console.log(workData.tags.length)
  return (
    <div className="case">
      <div className="wrapper">
        <div className="back">
          <img src="/img/icons/back.svg" alt=""/>
        </div>
        <h1>{workData.name}</h1>
        {/*<p>{workData.description}</p>*/}
        <div className="tags">
          {workData.tags.map(tag => (
            <div className="tag" key={tag.id}>{tag.name}</div>
          ))}
        </div>
        <div className="case__img">
          <img src={`/img/cases/${workData.url}/1.png`} alt=""/>
        </div>
        <h3>Подарочные карты</h3>
        <p>Помогу найти лучшее решение. Возможно вам нужно обновить сайт, или сделать логотип, или разработать сайт</p>
        <div className="case__img">
          <img src={`/img/cases/${workData.url}/2.png`} alt=""/>
        </div>
        <h3>Карточка товаров</h3>
        <p>Помогу найти лучшее решение. Возможно вам нужно обновить сайт, или сделать логотип, или разработать сайт</p>
        <div className="case__img">
          <img src={`/img/cases/${workData.url}/3.png`} alt=""/>
        </div>
        <div className="case__img">
          <img src={`/img/cases/${workData.url}/4.png`} alt=""/>
        </div>
        <div className="case__img">
          <img src={`/img/cases/${workData.url}/5.png`} alt=""/>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = ['/cases/stereo7']
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const workData = {
    name: "Stereo 7",
    description: "",
    tags: [
      {id: 1, name: 'Дизайн'},
      {id: 2, name: 'Доработки сайта'}
    ],
    url: params.name
  }
  return {
    props: {
      workData
    }
  }
}