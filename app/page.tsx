import Aside from '@/components/Aside';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      {/* <div className='relative mx-auto flex h-[3000px] min-h-screen max-w-screen-2xl flex-col px-6 py-12 md:flex-row md:px-12 md:py-20 lg:px-24 lg:py-24'> */}
      <div className='relative mx-auto flex h-[3000px] min-h-screen max-w-screen-xl'>
        <div className='flex gap-8 px-24 py-24'>
          <div className='w-2/6'>
            <Aside />
          </div>
          <div className='w-4/6'>
            <Main />
          </div>
        </div>
        <aside className='hidden lg:block'>
          <div className='sticky top-0 px-8 pt-24'>
            <Nav />
          </div>
        </aside>
      </div>
    </>
  );
}
