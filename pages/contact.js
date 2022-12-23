import Head from 'next/head';

import Subheader from '../components/Subheader';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Vaidehi Beauty Care</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Subheader
        title='Contact Us'
        image='/../public/images/iStock-1216212413.jpg'
      />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
