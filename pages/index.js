import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from "../components/layout"
import WorkList from '../components/work-list'

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="wrapper">
          <div className="ava">
            <img src="/img/ava.png" alt=""/>
          </div>
          <h1>Консультирую бизнес и делаю дизайн</h1>
          <p>Помогу найти лучшее решение. Возможно вам нужно обновить сайт, или сделать логотип, или разработать сайт.</p>
          <p>Не всегда решение дорогое, иногда достаточно лендинга на тильде</p>
          <WorkList />
        </div>
      </main>

      <footer>
      </footer>
    </Layout>
  )
}