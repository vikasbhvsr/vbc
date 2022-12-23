import Head from 'next/head';
import Subheader from '../components/Subheader';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Vaidehi Beauty Care</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Subheader
        title='Services'
        image='/images/makeup-brushes.jpg'
      />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
