import Link from 'next/link'

export default function Cases() {
  return(
    <>
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
    </>
  )
}