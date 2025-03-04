import React, { JSX } from 'react';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="bg-opacity-90 flex justify-center sticky p-5 z-50 text-white text-xl bg-blue-900 top-0 w-full">
      Lalding's React Playground
    </header>
  );
};

export default Header;
