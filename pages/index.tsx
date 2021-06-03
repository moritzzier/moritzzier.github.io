import Head from 'next/head'
import { DefaultLayout } from '../app/components/layouts/DefaultLayout/DefaultLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Moritz Zier</title>
        <meta name="description" content="My Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        Hallo, i bims der Moiz!
      </DefaultLayout>
    </>
  )
}
