import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Nav from '@/components/Nav';
import ProfileImage from '@/components/ProfileImage';
import Socials from '@/components/Socials';

export default function Home() {
  return (
    <>
      {/* <div className='relative mx-auto flex h-[3000px] min-h-screen max-w-screen-2xl flex-col px-6 py-12 md:flex-row md:px-12 md:py-20 lg:px-24 lg:py-24'> */}
      <div className='relative mx-auto flex h-[3000px] min-h-screen max-w-screen-xl px-6'>
        <div className='flex gap-8'>
          <aside className='w-2/6 py-24 lg:flex lg:min-h-screen lg:flex-col'>
            <ProfileImage />
            <div className='mt-8 flex-col justify-between lg:sticky lg:top-24'>
              <Hero />
              <Socials />
            </div>
          </aside>
          <div className='w-4/6 pt-24'>
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
