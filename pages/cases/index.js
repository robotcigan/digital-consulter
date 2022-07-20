import Link from 'next/link'
import Layout from "../../components/layout"

export default function Cases() {
  return(
    <Layout>
      <div className="wrapper">
        <h1>Cases</h1>
        <ul>
          <li>
            <Link href="cases/stereo7">
              <a>Stereo7</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}