import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);


  return (
    <header>
      <div
        className={`fixed inset-x-0 z-50 px-4 ${isSticky ? 'shadow-lg backdrop-blur-lg' : ''}`}
      >
        <div className='container mx-auto py-4 border-b border-opacity-25 border-white text-gray-900'>
          <nav className='flex flex-wrap justify-between items-center nav'>
            <Link href='/'>
              <h1 className='text-xl md:text-2xl font-extrabold uppercase tracking-widest text-center'>
                Vaidehi
                <span className='block text-xs tracking-wide'>
                  Beauty Care & Spa
                </span>
              </h1>
            </Link>
            <ul className='hidden md:flex flex-wrap space-x-2'>
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link href={navItem.link}
                    className={`text-md font-medium px-2 py-1 rounded-md transform transition border-2 border-transparent ${navItem.button
                      ? 'bg-pink-800 text-white hover:text-white hover:bg-pink-700'
                      : 'hover:text-pink-800'
                      } ${router.pathname == `${navItem.link}`
                        ? 'text-md font-medium px-2 py-1 rounded-md transition duration-300 text-pink-800 border-2 border-pink-800'
                        : ''
                      }`}
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex flex-row flex-wrap items-center space-x-4 md:hidden'>
              <ul className='inline-flex items-center space-x-4'>
                <li className='hover:text-pink-800'>
                  <Link
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
                  </Link>
                </li>
                <li className='hover:text-pink-800'>
                  <Link
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
                  </Link>
                </li>
                <li className='hover:text-pink-800'>
                  <Link
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
                  </Link>
                </li>
                <li className='hover:text-pink-800'>
                  <Link
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
                        strokeWidth='2'
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  </Link>
                </li>
                <li className='hover:text-pink-800'>
                  <Link href='tel:+9825411321' title='Call us at 98254-11321'>
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
                        strokeWidth='2'
                        d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
              <button className='text-md p-1 -m-1 rounded-md hover:text-pink-800 focus:outline-none focus:text-pink-800 transition duration-300'>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Gallery',
    link: '/gallery',
  },
  {
    title: 'Offers',
    link: '/offers',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  {
    title: 'Bridal Inquiry',
    link: '/bridal-inquiry',
    button: true,
  },
];
