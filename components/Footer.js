import Link from 'next/link';
import Social from './Social';

export default function Footer() {
  return (
    <footer className='px-4 py-24 text-pink-100 bg-gradient-to-l from-pink-600 to-pink-500'>
      <div className='container mx-auto'>
        <div className='space-y-4 text-center md:space-y-6'>
          <svg
            className='w-12 h-12 mx-auto md:w-20 md:h-20'
            aria-hidden='true'
            focusable='false'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path
              fill='currentColor'
              d='M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z'
            ></path>
          </svg>
          <h2 className='text-4xl font-bold leading-none text-center md:text-6xl'>
            Ready to book your appointment?
          </h2>
          <p className='text-lg md:text-xl'>
            Booking your Wellness and Beauty Care Day at our Salon and Spa is
            just a click away.
          </p>
          <Link href='tel:+919825411321' title='Call us at 98254-11321' className='inline-block px-4 py-2 mx-auto text-base font-semibold text-pink-800 duration-100 transform bg-white rounded md:text-lg transistion hover:bg-pink-100 focus:scale-95'
          >
            Call Now!
          </Link>
        </div>
        <hr className='w-full my-8 border-pink-300 md:my-12' />
        <div className='flex flex-col flex-wrap items-center justify-between w-full space-y-4 md:flex-row md:space-y-0'>
          <p className='text-sm'>
            © {new Date().getFullYear()}, Vaidehi Beauty Care | All Rights
            Reserved
          </p>
          <Social mode={'light'} />
        </div>
        <div className='mt-4 space-y-2 text-xs text-center'>
          <p>
            Made with{' '}
            <span role='img' aria-label='Heart'>
              ♥️
            </span>{' '}
            by{' '}
            <Link
              href='https://vikasbhavsar.com'
              rel='noreferrer noopener'
              target='_blank'
              className='border-b-2 border-black'
            >
              Vikas
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
