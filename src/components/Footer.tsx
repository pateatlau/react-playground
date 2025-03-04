import React, { JSX } from 'react';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="sticky bg-opacity-90 flex justify-center bottom-0 p-5 z-50 text-white text-xl bg-blue-900 top-0 w-full">
      © 2023 Lalding
    </header>
  );
};

export default Header;
