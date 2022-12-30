import Link from 'next/link';

export default function Social({ mode }) {
    return (
        < ul className={`inline-flex items-center space-x-4 ${mode === 'light' ? 'text-white' : 'text-black'}`}>
            {
                socialPlatforms.map((socialPlatform, index) => (
                    <li key={index} className={`transition duration-300 ${mode === 'light' ? '' : 'hover:text-pink-800'}`}>
                        <Link
                            href={socialPlatform.href}
                            title={socialPlatform.title}
                            target={socialPlatform.target}
                        >
                            <span dangerouslySetInnerHTML={{ __html: `${socialPlatform.icon}` }}></span>
                        </Link>
                    </li>
                ))
            }
        </ul >
    );
}

const socialPlatforms = [
    {
        name: 'Facebook',
        title: 'Find us on Facebook',
        href: 'https://www.facebook.com/vaidehibeautycarenspa/',
        target: '_blank',
        icon: ` <svg
         class='w-4 h-4'
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
                                </svg>`
    },
    {
        name: 'Instagram',
        title: 'Follow us on Instagram',
        href: 'https://www.instagram.com/deepa_bhavsar_25/',
        target: '_blank',
        icon: ` <svg
                            class='w-4 h-4'
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
                        </svg>`
    },
    {
        name: 'YouTube',
        title: 'Subscribe to our channel on YouTube',
        href: 'https://www.youtube.com/channel/UCtJeLijxZEQ1x1-Cbdk00Lg',
        target: '_blank',
        icon: ` <svg
                            class='w-4 h-4'
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
                        </svg>`
    },
    {
        name: 'Google My Business',
        title: 'Check our Google page and share your experience at Vaidehi Beauty Care',
        href: 'https://goo.gl/maps/hvyk3rYbSFFqzKSK7',
        target: '_blank',
        icon: `<svg class='w-4 h-4' aria-hidden='true' focusable='false' role='img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill='currentColor' d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>`
    },
    {
        name: 'Email',
        title: 'Email us at vaidehibeautycare.com',
        href: 'mailto:vaidehibeautycare@gmail.com',
        target: '_self',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>
`
    },
    {
        name: 'Email',
        title: 'Call us now to book appointment',
        href: 'tel:+919825411321',
        target: '_self',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
`
    }
]