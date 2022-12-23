import Head from 'next/head';
import Slideshow from '../components/Slidershow';
import About from '../components/Home/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaidehi Beauty Care</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slideshow />
      <About />
    </>
  );
}
