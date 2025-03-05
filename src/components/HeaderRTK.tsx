import React, { JSX } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../contexts/rtk/store';

const Header: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="bg-opacity-90 flex justify-center sticky p-5 z-50 text-white text-xl bg-blue-900 top-0 w-full">
      <div>{`${
        user.name ? user.name + ', ' : ''
      } Welcome to Lalding's React Playground`}</div>
    </header>
  );
};

export default Header;
