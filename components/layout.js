import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Digital Consulter'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="..."
        />
        {/*<meta*/}
        {/*  property="og:image"*/}
        {/*  content={`https://og-image.vercel.app/${encodeURI(*/}
        {/*    siteTitle*/}
        {/*  )}.png`}*/}
        {/*/>*/}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
      {/*<header className={'header'}>*/}
      {/*</header>*/}
      <main className="page">
        {children}
      </main>
      {/* <footer className={'footer'}>
        <div className="wrapper">footer</div>
      </footer> */}
      <div className="nav-container">
        <div className="nav">
          <Link href="/">
            <a className="nav__link">Главная</a>
          </Link>
          <Link href="/works">
            <a className="nav__link">Работы</a>
          </Link>
          <Link href="/contacts">
            <a className="nav__link">Контакты</a>
          </Link>
        </div>
      </div>
    </div>
  )
}