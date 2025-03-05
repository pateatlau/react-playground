import React, { JSX, useContext } from 'react';
import { UserContext } from '../contexts/context-api/UserContextProvider';

const HeaderContext: React.FC = (): JSX.Element => {
  const { user } = useContext(UserContext);
  return (
    <header className="bg-opacity-90 flex justify-center sticky p-5 z-50 text-white text-xl bg-blue-900 top-0 w-full">
      <div>{`${
        user.name ? user.name + ', ' : ''
      } Welcome to Lalding's React Playground`}</div>
    </header>
  );
};

export default HeaderContext;
