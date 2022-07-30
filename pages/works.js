import Link from 'next/link'
import Layout from "../components/layout"

export default function Works({ worksJSON }) {
  return(
    <Layout>
      <div className="wrapper">
        <h1>Работы</h1>
        <ul>
          {worksJSON.map(work => (
            <li className="someClass" key={work.id}>
              <Link href={`work/${work.url}`}>
                <a>{work.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link href="work/stereo-7">
              <a>Stereo7</a>
            </Link>
          </li>
        </ul>
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