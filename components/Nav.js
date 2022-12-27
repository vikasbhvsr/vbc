import Link from 'next/link';
import Social from './Social';
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
            <Social mode='light' size='' />
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
