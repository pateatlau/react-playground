import React, { JSX, useEffect, useRef, useState } from 'react';
import Button from './Button';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../contexts/rtk/store';
import {
  setName,
  // setNameAsync,
  setPassword,
  resetUser,
} from '../contexts/rtk/userSlice';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.dir(e.target);
};

const LoginContext: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef<HTMLInputElement>(null);
  const [reset, setReset] = useState(true);

  useEffect(() => {
    if (reset && inputRef.current) {
      inputRef.current.focus();
      setReset(false);
      dispatch(resetUser());
    }
  }, [reset]);

  return (
    <main className="container min-w-full min-h-[calc(100vh-136px)] flex flex-col items-center justify-center py-2 bg-slate-100">
      <form onSubmit={handleSubmit}>
        <div className="p-20 bg-white rounded-lg items-center justify-center flex flex-col gap-4 shadow-lg">
          <h1 className="text-2xl text-slate-500 ">
            Lalding's React Playground
          </h1>
          <div className="flex flex-row items-center w-full justify-between">
            <label
              className="w-40"
              htmlFor="name"
            >
              Name or email
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="rounded-md shadow-md p-4 w-2/3"
              ref={inputRef}
              onChange={(e) => {
                dispatch(setName(e.target.value));
                // dispatch(setNameAsync(e.target.value));
                console.log(e.target.value);
              }}
              value={user.name}
            />
          </div>
          <div className="flex flex-row items-center w-full justify-between">
            <label
              className="w-40"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="rounded-md shadow-md p-4 w-2/3"
              onChange={(e) => dispatch(setPassword(e.target.value))}
              value={user.password}
            />
          </div>
          <Button
            text="Login"
            title="Click to Login"
            type="submit"
          />
          <button
            className="rounded-md shadow-md hover:bg-blue-400 bg-blue-500 p-4 text-white w-full"
            title="Click to Reset form"
            type="reset"
            onClick={() => setReset(true)}
          >
            Reset
          </button>
          <div>{`state = ${JSON.stringify(user)}`}</div>
        </div>
      </form>
    </main>
  );
};

export default LoginContext;
