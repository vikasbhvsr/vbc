'use client';

import { useRouter } from 'next/navigation';
import Subheader from './components/Subheader';

export const metadata = {
    title: '404 | Page not found | Vaidehi Beauty Care',
}

export default function NotFound() {
    const router = useRouter();
    return (
        <>
            <Subheader
                title='404 | Page not found'
                image='/images/dynamic-wang-cD-_fbY6yww-unsplash.jpg'
            />
            <section className='max-w-xl mx-auto flex flex-col flex-wrap items-center px-4 space-y-6 py-28 md:px-0'>
                <span className='block pb-1 font-mono text-lg leading-none tracking-wide uppercase border-b-2 text-pink-600 border-pink-600'>
                    404 Error
                </span>
                <h2 className='text-4xl font-bold leading-none md:text-6xl'>
                    We lost this page
                </h2>
                <p className='text-center text-lg md:text-xl'>
                    We searched high and low, but couldn't find what you are looking for. Let's find a better place for you to go.
                </p>
                <div className='flex flex-col justify-center w-full space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6'>
                    <button className='inline-flex items-center justify-center space-x-2 px-4 py-2 text-base font-semibold duration-100 transform border-2 bor- border-pink-800 text-pink-800 rounded md:text-lg transistion hover:bg-pink-700 hover:text-white hover:border-pink-700 focus:scale-95' onClick={() => router.back()}>
                        <svg className="w-4 h-4 flex-shrink-0" fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                        <span>
                            Go back
                        </span>
                    </button>
                    <button className='inline-block px-4 py-2 text-base font-semibold text-white duration-100 transform bg-pink-800 rounded md:text-lg transistion hover:bg-pink-700 focus:scale-95' onClick={() => router.push('/')}>Take me home</button>
                </div>
            </section>
        </>
    );
}
