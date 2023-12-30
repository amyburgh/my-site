import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const Header: React.FC = () => {
  return (
    <header>
      <ThemeToggle disabled={true} />
    </header>
  );
};

export default Header;
