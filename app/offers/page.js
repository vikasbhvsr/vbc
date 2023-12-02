import { Metadata } from 'next';

import Subheader from '../components/Subheader';

export const metadata = {
  title: 'Offers | Vaidehi Beauty Care',
}

export default function Offers() {
  return (
    <>
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
