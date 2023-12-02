import { Metadata } from 'next';

import Subheader from '../components/Subheader';

export const metadata = {
  title: 'Services | Vaidehi Beauty Care',
}

export default function Services() {
  return (
    <>
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
