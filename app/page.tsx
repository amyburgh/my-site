import Nav from '@/components/Nav';
import ProfileImage from '@/components/ProfileImage';
import Socials from '@/components/Socials';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <>
      <div className='relative mx-auto flex min-h-screen max-w-screen-xl px-6'>
        <div className='flex flex-col gap-8 sm:flex-row'>
          <aside className='min-h-screen py-24 pb-0 sm:w-2/6 sm:pb-24 lg:flex lg:min-h-screen lg:flex-col'>
            <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
              <ProfileImage />
              <div className='mt-8 flex flex-col items-center text-center sm:items-start sm:text-left lg:sticky lg:top-24'>
                <Hero />
                <Socials />
              </div>
            </div>
          </aside>
          <div className='w-full sm:w-4/6 sm:pt-24'>
            <Main />
          </div>
        </div>
        <aside className='hidden lg:block'>
          <div className='sticky top-0 px-8 pt-24'>
            <Nav />
          </div>
        </aside>
      </div>
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 transform sm:hidden'>
        <DoubleArrowDownIcon className='animate-bounce text-9xl text-gray-500' />
      </div>
    </>
  );
}
