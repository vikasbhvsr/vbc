import Head from 'next/head';

import Subheader from '../components/Subheader';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Vaidehi Beauty Care</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Subheader title='Gallery' image='/../public/images/makeup-kit.jpg' />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
