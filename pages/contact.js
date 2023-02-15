import Head from 'next/head';
import Link from 'next/link';

import Subheader from '../components/Subheader';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Vaidehi Beauty Care</title>
        <meta
          property="og:image"
          content="https://www.vaidehibeautycare.com/api/og?title=Contact | Vaidehi Beauty Care"
        />
      </Head>
      <Subheader
        title='Contact Us'
        subtitle='Our friendly team is always here to help.'
        image='/images/iStock-1216212413.jpg'
      />
      <section className='py-16 px-4 bg-slate-100'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12'>
            <div>
              <h2 className='text-2xl font-bold leading-none md:text-4xl mb-2 md:mb-6'>Our Locations</h2>
              <p className='text-lg md:text-xl'>Come visit our friendly members at one of our salon.</p>
            </div>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 inline-flex items-center bg-pink-800 p-2 rounded-md text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className='text-2xl font-semibold mb-2'>Naranpura</h3>
                  <Link href='https://goo.gl/maps/yteuBkuL5xWJ1zaDA' target='_blank'>
                    <address className='not-italic'>
                      S8/S9, Viharika Complex<br />Near Ankur Cross Rd, Naranpura<br />Ahmedabad, Gujarat 380013
                    </address>
                  </Link>
                  <div className='flex divide-x divide-pink-800 space-x-2'>
                    <Link className='text-pink-800 hover:text-pink-700 font-medium mt-2 block' href='https://goo.gl/maps/yteuBkuL5xWJ1zaDA' target='_blank'>Get Directions</Link>
                    <Link className='pl-2 text-pink-800 hover:text-pink-700 font-medium mt-2 block' href='#'>Book Appointment</Link>
                  </div>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 inline-flex items-center bg-pink-800 p-2 rounded-md text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className='text-2xl font-semibold mb-2'>New Ranip</h3>
                  <Link href='https://goo.gl/maps/uMN82PpdWJ4ZQnVT8' target='_blank'>
                    <address className='not-italic'>
                      A/4, FF17, Arya Villa<br />Anand Party Plot Rd, New Ranip<br />Ahmedabad, Gujarat 382470
                    </address>
                  </Link>
                  <div className='flex divide-x divide-pink-800 space-x-2'>
                    <Link className='text-pink-800 hover:text-pink-700 font-medium mt-2 block' href='https://goo.gl/maps/uMN82PpdWJ4ZQnVT8' target='_blank'>Get Directions</Link>
                    <Link className='pl-2 text-pink-800 hover:text-pink-700 font-medium mt-2 block' href='#'>Book Appointment</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
