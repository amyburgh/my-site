import Header from '@/components/Header';
import Main from '@/components/Main';
// import Spotlight from '@/components/Spotlight';

export default function Home() {
  return (
    <>
      {/* <Spotlight /> */}
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <Header></Header>
        <Main />
      </div>
    </>
  );
}
