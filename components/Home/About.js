import Link from 'next/link';

export default function About() {
  return (
    <section className='relative bg-white bg-gradient-to-tr'>
      <div className='container flex flex-col flex-wrap items-center px-4 mx-auto space-y-6 text-center py-28 md:px-0'>
        <span className='block pb-1 font-mono text-lg leading-none tracking-wide uppercase border-b-2 border-pink-600'>
          About Us
        </span>
        <h2 className='text-4xl font-bold leading-none text-center md:text-6xl'>
          Deepa Bhavsar
        </h2>
        <p className='max-w-5xl mx-auto text-lg md:text-xl'>
          Hairstylist and Bridal Specialist, Deepa Bhavsar is an expert in
          versatility and a master of her craft. She is self-taught and cerified
          by biggest name in the industry, such as L'oreal, Georgio Kyot, Vidal
          Sassoon. Her unique, organic approach to beauty care allows her to
          create curated looks that highlight client's natural features. Deepa's
          key to success is client's happiness. Visit Vaidehi Beauty Care and
          experience the difference.
        </p>
        <Link href='/about'>
          <a className='inline-block px-4 py-2 mx-auto text-base font-semibold text-white duration-100 transform bg-pink-800 rounded md:text-lg transistion hover:bg-pink-700 focus:scale-95'>
            Read More
          </a>
        </Link>
      </div>
    </section>
  );
}
