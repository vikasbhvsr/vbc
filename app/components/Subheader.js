import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export default function Subheader({ className, ...props }) {
  return (
    <div className='relative flex items-center px-4 pt-60 pb-24 md:pt-44 md:pb-24 bg-gradient-to-t from-pink-500 via-pink-400 to-pink-300'>
      <Image
        className='absolute inset-0 w-full h-full overflow-hidden object-cover'
        src={props.image}
        alt='Header Image'
        fill
      />
      <div className='bg-gradient-to-t from-pink-500 via-pink-400 to-pink-300 opacity-50 absolute inset-0'></div>
      <div className='container mx-auto relative text-white'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl md:text-6xl font-bold'>{props.title}</h1>
          {props.subtitle && <p className='text-base md:text-lg mt-2 md:mt-4 font-medium'><Balancer>{props.subtitle}</Balancer></p>}
        </div>
      </div>
    </div>
  );
}
