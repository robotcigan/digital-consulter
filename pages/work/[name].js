import Link from 'next/link'
import Layout from "../../components/layout";

export default function Work ({ workData }) {
  return (
    <Layout>
      <div className="case">
        <div className="wrapper">
          <div className="back">
            <img src="/img/icons/back.svg" alt=""/>
          </div>
          <h1>{workData.name}</h1>
          <p>{workData.description}</p>
          <div className="tags">
            {workData.tags.map((tag, index) => (
              <div className="tag" key={index}>{tag}</div>
            ))}
          </div>
          <div className="case__img">
            <img src={`/img/works/${workData.url}/1.png`} alt=""/>
          </div>
          <h3>Подарочные карты</h3>
          <p>Помогу найти лучшее решение. Возможно вам нужно обновить сайт, или сделать логотип, или разработать сайт</p>
          <div className="case__img">
            <img src={`/img/works/${workData.url}/2.png`} alt=""/>
          </div>
          <h3>Карточка товаров</h3>
          <p>Помогу найти лучшее решение. Возможно вам нужно обновить сайт, или сделать логотип, или разработать сайт</p>
          <div className="case__img">
            <img src={`/img/works/${workData.url}/3.png`} alt=""/>
          </div>
          <div className="case__img">
            <img src={`/img/works/${workData.url}/4.png`} alt=""/>
          </div>
          <div className="case__img">
            <img src={`/img/works/${workData.url}/5.png`} alt=""/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/works`)
  const workList = await res.json()
  let paths = []
  workList.forEach(work => {
    paths.push(`/work/${work.url}`)
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const res = await fetch(`http://localhost:3000/api/work/${params.name}`)
  const workData = await res.json()
  return {
    props: {
      workData
    }
  }
}