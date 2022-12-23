import { useRouter } from 'next/router';

export default function FourOhFour() {
  const router = useRouter();

  return (
    <div className='min-h-screen flex flex-col flex-wrap items-center justify-center'>
      <h2 className='text-3xl md:text-8xl font-extrabold text-center leading-normal'>
        404 | Page Not Found
      </h2>
      <button onClick={() => router.back()}>Go Back</button>
      <button onClick={() => router.push('/')}>Go Home!</button>
    </div>
  );
}
