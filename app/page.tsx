import Spotlight from '@/components/main/Spotlight';
import Header from '@/components/main/Header';

export default function Home() {
  return (
    <>
      <div className=''>
        <Spotlight>
          <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
            <Header></Header>
          </div>
        </Spotlight>
      </div>
    </>
  );
}
