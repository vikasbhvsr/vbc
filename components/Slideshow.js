import Image from 'next/image';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Slideshow(props) {
  const [sliderRef] = useKeenSlider({ loop: true }, [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]);

  const images = [
    '/images/bride-3.jpg',
    '/images/bride-4.jpg',
    '/images/bride-1.jpg',
    '/images/bride.jpg',
    '/images/bride-2.jpg',
    '/images/bride-5.jpg',
  ];

  return (
    <div
      ref={sliderRef}
      className='relative w-full h-screen text-pink-100 keen-slider'
    >
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-pink-500 via-pink-400 to-pink-300 opacity-40'></div>
      {images.map((image, index) => (
        <div key={index} className={`keen-slider__slide slide-${index}`}>
          <Image
            className='absolute inset-0 object-cover object-center w-full h-full overflow-hidden'
            src={image}
            fill
            alt={image}
          ></Image>
        </div>
      ))
      }
      <div className='container absolute inset-0 z-10 flex flex-col items-start justify-center px-4 mx-auto space-y-6'>
        <h1 className='text-4xl italic font-bold md:text-6xl'>
          Look Good, Feel Better
        </h1>
        <p className='max-w-xl text-lg md:leading-normal md:text-xl'>
          Vaidehi Beauty Care &amp; Spa has been offering beauty services to the
          lovely ladies in Ahmedabad since 1991. We provide Laser Treatment,
          Hair Removal Services, Facial, Bridal and many more.
        </p>
        <Link href='/services' className='px-4 py-2 text-base font-semibold text-pink-800 duration-100 transform bg-white rounded md:text-lg transistion hover:bg-pink-100 focus:scale-95'>
          Learn More
        </Link>
      </div>
    </div >
  );
}
