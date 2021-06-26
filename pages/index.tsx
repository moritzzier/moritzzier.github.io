import Head from 'next/head'
import { DefaultLayout } from '../app/components/layouts/DefaultLayout/DefaultLayout'
import FooterContent from '../app/components/templates/FooterContent/FooterContent'
import ArrowDown from '../app/components/elements/Icons/ArrowDown'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Moritz Zier</title>
        <meta name="description" content="My Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Noto+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultLayout
        mainProps={{ className: 'bg-background pl-8' }}
        footerProps={{ className: '', children: <FooterContent /> }}
      >
        <section className="">
          <div className="pt-32">
            <h1 className="text-5xl text-typo-dark font-display">
              Hi,
              <br />
              I'm Moritz!
            </h1>
            <p className="text-2xl text-typo-light font-body">
              Fullstack Webdeveloper
            </p>
          </div>
          <span className="text-typo-dark mt-16 inline-block">
            <ArrowDown />
          </span>
        </section>
        <section className="h-screen">
          <h2 id="about" className="text-4xl text-typo-dark font-display">
            About
          </h2>
        </section>
        <section className="h-screen">
          <h2 id="contact" className="text-4xl text-typo-dark font-display">
            Contact
          </h2>
          <p className="text-typo-dark font-body">Find me on:</p>
          <ul className="text-typo-dark font-body">
            <li>Email</li>
            <li>Github</li>
          </ul>
        </section>
      </DefaultLayout>
    </>
  )
}
