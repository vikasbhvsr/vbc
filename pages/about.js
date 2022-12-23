import Head from 'next/head';

import Subheader from '../components/Subheader';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Vaidehi Beauty Care</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Subheader
        title='About Us'
        image='/../public/images/iStock-503533810.jpg'
      />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
