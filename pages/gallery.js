import Head from 'next/head';

import Subheader from '../components/Subheader';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Vaidehi Beauty Care</title>
        <meta
          property="og:image"
          content="https://www.vaidehibeautycare.com/api/og?title=Contact | Vaidehi Beauty Care"
        />
      </Head>
      <Subheader title='Gallery' image='/images/makeup-kit.jpg' />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
