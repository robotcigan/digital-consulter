import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout";

export default function Home() {
  const tags = [
    {id: 1, name: 'Дизайн'},
    {id: 2, name: 'Доработки сайта'}
  ]
  return (
    <Layout>
      <main>
        <div className="wrapper">
          <div className="ava">
            <img src="/img/ava.png" alt=""/>
          </div>
          <h1>Консультирую бизнес и делаю дизайн</h1>
          <p>Помогу найти лучшее решение. Возможно вам нужно обновить сайт, или сделать логотип, или разработать сайт.</p>
          <p>Не всегда решение дорогое, иногда достаточно лендинга на тильде</p>
          <div className="works">
            <div className="work" style={{ 'background-image': 'url("/img/cases/haven-pets/thumbnail.png")', 'background-color': '#F2F3FE' }}>
              <div className="work__name">Haven Pets</div>
              <div className="tags">
                {tags.map(tag => (
                  <div className="tag" key={tag.id}>{tag.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </Layout>
  )
}
