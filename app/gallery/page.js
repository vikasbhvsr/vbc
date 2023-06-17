import Head from 'next/head';

import Subheader from '../components/Subheader';

export const metadata = {
  title: 'Gallery | Vaidehi Beauty Care',
}

export default function Gallery() {
  return (
    <>
      <Subheader title='Gallery' image='/images/makeup-kit.jpg' />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
