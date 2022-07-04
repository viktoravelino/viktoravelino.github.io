import type { NextPage } from 'next';
import { About } from '../components/About';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <Skills />
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
