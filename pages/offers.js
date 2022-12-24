import Head from 'next/head';

import Subheader from '../components/Subheader';

export default function Offers() {
  return (
    <>
      <Head>
        <title>Offers | Vaidehi Beauty Care</title>
      </Head>
      <Subheader
        title='Offers'
        image='/images/iStock-1055421508.jpg'
      />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
