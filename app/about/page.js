import { Metadata } from 'next';

import Subheader from '../components/Subheader';

export const metadata = {
  title: 'About | Vaidehi Beauty Care',
}

export default function About() {
  return (
    <>
      <Subheader
        title='About Us'
        subtitle='We are a beauty salon located in the heart of the city. We offer a wide range of services, including haircuts, manicures, pedicures, and more.'
        image='/images/iStock-503533810.jpg'
      />
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          Coming Soon
        </div>
      </section>
    </>
  );
}
