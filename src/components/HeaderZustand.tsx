import React, { JSX } from 'react';
import useUserStore from '../contexts/zustand/useUserStore';

const Header: React.FC = (): JSX.Element => {
  const { name } = useUserStore();

  return (
    <header className="bg-opacity-90 flex justify-center sticky p-5 z-50 text-white text-xl bg-blue-900 top-0 w-full">
      <div>{`${
        name ? name + ', ' : ''
      } Welcome to Lalding's React Playground`}</div>
    </header>
  );
};

export default Header;
