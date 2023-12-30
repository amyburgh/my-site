'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ThemeToggleProps extends React.ComponentPropsWithoutRef<'button'> {}

const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => {
        toast({
          variant: 'destructive',
          description: 'Light mode is currently unavailable.',
        });
      }}
      // onClick={toggleTheme}
      className='absolute right-6 top-6 cursor-not-allowed dark:border-gray-400'
      // {...props}
    >
      <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-gray-900 transition-all dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-gray-100 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
