import Head from 'next/head'
import { DefaultLayout } from '../app/components/layouts/DefaultLayout/DefaultLayout'
import FooterContent from '../app/components/templates/FooterContent/FooterContent'
import ContentBox from '../app/components/elements/ContentBox/ContentBox'
import ArrowDown from '../app/components/elements/Icons/ArrowDown'
import UserIcon from '../app/components/elements/Icons/User'
import HomeIcon from '../app/components/elements/Icons/Home'
import MailIcon from '../app/components/elements/Icons/Mail'
import Section from '../app/components/elements/Section/Section'
import Header from '../app/components/elements/Header/Header'

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
        <Section id="home">
          <ContentBox>
            <Header variant="h1">
              Hi,
              <br />
              I'm Moritz!
            </Header>
            <p className="text-2xl text-typo-light font-body">
              Fullstack Webdeveloper
            </p>
          </ContentBox>
          <span className="text-typo-dark mt-16 flex justify-center animate-bounce">
            <ArrowDown />
          </span>
        </Section>
        <Section id="about">
          <ContentBox>
            <Header variant="h2">About</Header>
            <p className=" text-typo-light font-body text-justify">
              I'm a software/webdeveloper from Germany.
              <br />I have a passion for fast and efficent development and clean
              code. During my years of fullstack-development I learned the
              importance of good design to meet and quickly adjust to the needs
              of my clients.
            </p>
          </ContentBox>
        </Section>
        <Section id="projects">
          <ContentBox>
            <Header variant="h2">Projects</Header>
            <p className="lg:pt-4 text-typo-light font-body text-justify">
              A nice view is in development. In the meantime checkout my{' '}
              <a href="https://github.com/moritzzier" className="underline">
                Github!
              </a>
            </p>
          </ContentBox>
        </Section>
        <Section id="contact">
          <ContentBox>
            <Header variant="h2">Contact</Header>
            <p className="lg:pt-4 text-typo-light font-body ">
              How to reach me:
            </p>
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
        </Section>
      </DefaultLayout>
    </>
  )
}
