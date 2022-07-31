import Link from 'next/link'

import Layout from "../components/layout"
import WorkList from "../components/work-list"

export default function Works({ worksJSON }) {
  return(
    <Layout>
      <div className="wrapper">
        <h1>Работы</h1>
        <WorkList workList={worksJSON} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/works")
  const worksJSON = await res.json()
  // console.log('worksJSON', worksJSON)
  return {
    props: {
      worksJSON
    }
  }
}