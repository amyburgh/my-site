import Aside from '@/components/Aside';
import Main from '@/components/Main';

export default function Home() {
  return (
    <>
      <div className='mx-auto flex min-h-screen max-w-screen-xl flex-col px-6 py-12 md:flex-row md:px-12 md:py-20 lg:px-24 lg:py-24'>
        <div className='w-1/2'>
          <Aside />
        </div>
        <div className='w-1/2'>
          <Main />
        </div>
      </div>
    </>
  );
}
