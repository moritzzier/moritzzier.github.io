import type { Metadata } from 'next'
import Navbar from './../components/Navbar'

export const metadata: Metadata = {
  title: 'Moritz Zier',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 max-w-4xl">
        <section id="home" className="mb-8 mt-8">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Moritz!</h2>
          <p className="text-lg">Welcome to my webdev portfolio.</p>
        </section>
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-base">
            I'm a software/webdeveloper from Germany.
            <br />I have a passion for fast and efficent development and clean
            code. During my years of fullstack-development I learned the
            importance of good design to meet and quickly adjust to the needs of
            my clients.
          </p>
        </section>
        <section id="projects" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <p className="text-base">
            A nice view is in development. In the meantime checkout my{' '}
            <a href="https://github.com/moritzzier" className="text-blue-600 dark:text-blue-400 hover:underline">
              Github!
            </a>
          </p>
        </section>
        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-base mb-2">How to reach me:</p>
          <ul className="list-disc list-inside">
            <li>
              <a href="mailto:moritz.zier@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/moritzzier" className="text-blue-600 dark:text-blue-400 hover:underline">
                Github
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
