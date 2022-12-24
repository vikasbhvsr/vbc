import Head from 'next/head';

import Subheader from '../components/Subheader';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Vaidehi Beauty Care</title>
      </Head>
      <Subheader
        title='Contact Us'
        image='/images/iStock-1216212413.jpg'
      />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
