
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gilson Inácio da Silva | DevOps</title>
      </Head>
      <Navbar />
      <main className="pt-20">
        <section id="about" className="py-20 bg-white text-center">
          <h1 className="text-4xl font-bold mb-4">Gilson Inácio da Silva</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Software Engineer | Data Scientist | DevOps | Cloud Solutions Architect
          </p>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm bg-gray-100 text-gray-600">
        © 2025 Gilson Inácio da Silva. All rights reserved.
      </footer>
    </>
  )
}
