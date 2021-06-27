import Head from 'next/head'
import { DefaultLayout } from '../app/components/layouts/DefaultLayout/DefaultLayout'
import FooterContent from '../app/components/templates/FooterContent/FooterContent'
import ContentBox from '../app/components/elements/ContentBox/ContentBox'
import ArrowDown from '../app/components/elements/Icons/ArrowDown'
import UserIcon from '../app/components/elements/Icons/User'
import HomeIcon from '../app/components/elements/Icons/Home'
import MailIcon from '../app/components/elements/Icons/Mail'

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
        navProps={{
          menuItems: [
            {
              href: '#home',
              name: 'Home',
              icon: <HomeIcon />,
            },
            {
              href: '#about',
              name: 'About',
              icon: <UserIcon />,
            },
            {
              href: '#contact',
              name: 'Contact',
              icon: <MailIcon />,
            },
          ],
        }}
        mainProps={{ className: 'bg-background' }}
        footerProps={{ className: '', children: <FooterContent /> }}
      >
        <section id="home" className="h-screen flex flex-col">
          <ContentBox>
            <h1 className="lg:text-7xl text-5xl text-typo-dark font-display">
              Hi,
              <br />
              I'm Moritz!
            </h1>
            <p className="text-2xl text-typo-light font-body">
              Fullstack Webdeveloper
            </p>
          </ContentBox>
          <span className="text-typo-dark mt-16 flex justify-center animate-bounce">
            <ArrowDown />
          </span>
        </section>
        <section id="about" className="h-screen">
          <ContentBox>
            <h2 className="lg:text-5xl text-4xl text-typo-dark font-display">
              About
            </h2>
            <p className="lg:pt-4 text-typo-light font-body text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              numquam architecto deleniti quod. Eveniet dolorum quo doloribus
              reiciendis sapiente illo placeat hic unde corrupti. Ipsum adipisci
              fugiat at delectus sint.
            </p>
          </ContentBox>
        </section>
        <section id="contact" className="h-screen">
          <ContentBox>
            <h2 className="lg:text-5xl text-4xl text-typo-dark font-display">Contact</h2>
            <p className="lg:pt-4 text-typo-light font-body ">How to reach me:</p>
            <ul className="text-typo-light font-body list-disc list-inside">
              <li>
                <a href="mailto:moritz.zier@gmail.com" className="underline">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/moritzzier" className="underline">
                  Github
                </a>
              </li>
            </ul>
          </ContentBox>
        </section>
      </DefaultLayout>
    </>
  )
}
