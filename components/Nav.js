import Link from 'next/link';
import Image from 'next/image';
import Social from './Social';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  const [isSticky, setSticky] = useState(false);
  const [mobileNavShown, setMobileNavShown] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleMobileNavShown = () => {
    setMobileNavShown(!mobileNavShown);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (!mobileNavShown) return;
    function handleRouteChange() {
      setMobileNavShown(false);
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.asPath]);

  return (
    <header>
      <div
        className={`fixed inset-x-0 z-50 px-4 ${isSticky ? 'shadow-lg backdrop-blur-lg' : ''}`}
      >
        <div className='container mx-auto py-1 border-b border-opacity-25 border-white text-gray-900'>
          <nav className='relative flex flex-wrap justify-between items-center nav'>
            <Link href='/'>
              <Image
                src='/vbc-logo.svg'
                alt='Vaidehi Beauty Care logo'
                width='120'
                height='60'
                className='object-contain w-24 sm:w-32'
              />
            </Link>
            <ul className={`absolute top-16 left-0 right-0 bg-white rounded-md shadow-lg p-4 space-y-4 md:top-0 md:p-0 md:relative md:bg-transparent md:shadow-none md:flex md:flex-wrap md:space-y-0 md:space-x-2 ${mobileNavShown ? '' : 'hidden'}`}>
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link href={navItem.link}
                    className={`text-md font-medium px-2 py-1 rounded-md transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-pink-800 ${navItem.button
                      ? 'bg-pink-800 text-white hover:text-white hover:bg-pink-700'
                      : 'hover:text-pink-800'
                      } ${router.pathname === `${navItem.link}`
                        ? 'text-pink-800 border-2 border-pink-800'
                        : ''
                      }`}
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex flex-row flex-wrap items-center space-x-4 md:hidden'>
              <Social />
              <button
                onClick={handleMobileNavShown}
                key={router.asPath}
                className='text-md p-1 -m-1 rounded-md hover:text-pink-800 focus:outline-none focus:text-pink-800 transition duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div >
    </header >
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
