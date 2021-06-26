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
        mainProps={{ className: 'bg-background' }}
        footerProps={{ className: '', children: <FooterContent /> }}
      >
        <section className="h-screen flex flex-col">
          <div className="pl-8 pt-32">
            <h1 className="text-5xl text-typo-dark font-display">
              Hi,
              <br />
              I'm Moritz!
            </h1>
            <p className="text-2xl text-typo-light font-body">
              Fullstack Webdeveloper
            </p>
          </div>
          <span className="text-typo-dark mt-16 flex justify-center animate-bounce">
            <ArrowDown />
          </span>
        </section>
        <section className="h-screen">
          <div className="pl-8 pt-32">
          <h2 id="about" className="text-4xl text-typo-dark font-display">
            About
          </h2>
          <p className="text-typo-light font-body text-justify pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora numquam architecto deleniti quod. 
            Eveniet dolorum quo doloribus reiciendis sapiente illo placeat hic unde corrupti. 
            Ipsum adipisci fugiat at delectus sint.
          </p>
          </div>
        </section>
        <section className="h-screen">
          <div className="pl-8 pt-32">
          <h2 id="contact" className="text-4xl text-typo-dark font-display">
            Contact
          </h2>
          <p className="text-typo-light  font-body">How to reach me:</p>
          <ul className="text-typo-light font-body list-disc list-inside">
            <li><a href="mailto:moritz.zier@gmail.com" className="underline">Email</a></li>
            <li><a href="https://github.com/moritzzier" className="underline">Github</a></li>
          </ul>
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}
