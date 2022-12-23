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
          <a href='tel:+9825411321' title='Call us at 98254-11321' className='inline-block px-4 py-2 mx-auto text-base font-semibold text-pink-800 duration-100 transform bg-white rounded md:text-lg transistion hover:bg-pink-100 focus:scale-95'
          >
            Call Now!
          </a>
        </div>
        <hr className='w-full my-8 border-pink-300 md:my-12' />
        <div className='flex flex-col flex-wrap items-center justify-between w-full space-y-4 md:flex-row md:space-y-0'>
          <p className='text-sm'>
            © {new Date().getFullYear()}, Vaidehi Beauty Care | All Rights
            Reserved
          </p>
          <ul className='inline-flex items-center space-x-4'>
            <li>
              <a
                href='https://www.facebook.com/vaidehibeautycarenspa/'
                title='Facebook'
                target='_blank'
              >
                <svg
                  className='w-4 h-4'
                  aria-hidden='true'
                  focusable='false'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                >
                  <path
                    fill='currentColor'
                    d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/deepa_bhavsar_25/'
                title='Instagram'
                target='_blank'
              >
                <svg
                  className='w-4 h-4'
                  aria-hidden='true'
                  focusable='false'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='currentColor'
                    d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/channel/UCtJeLijxZEQ1x1-Cbdk00Lg'
                title='YouTube'
                target='_blank'
              >
                <svg
                  className='w-4 h-4'
                  aria-hidden='true'
                  focusable='false'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href='mailto:vaidehibeautycare@gmail.com'
                title='Email us at vaidehibeautycare@gmail.com'
                target='_blank'
              >
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href='tel:+9825411321' title='Call us at 98254-11321'>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-4 space-y-2 text-xs text-center'>
          <ul className='inline-flex items-center space-x-2'>
            <li>
              Next.js{' '}
              <span role='img' aria-label='Next.js'>
                ▲
              </span>
            </li>
            <li>
              Tailwind CSS{' '}
              <span role='img' aria-label='Tailwind CSS'>
                🪁
              </span>
            </li>
            <li>
              Netlify{' '}
              <span role='img' aria-label='Netlify'>
                🖥
              </span>
            </li>
          </ul>
          <p>
            Made with{' '}
            <span role='img' aria-label='Heart'>
              ♥️
            </span>{' '}
            by{' '}
            <a
              href='https://vikasbhavsar.com'
              rel='noreferrer noopener'
              target='_blank'
              className='border-b-2 border-black'
            >
              Vikas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
