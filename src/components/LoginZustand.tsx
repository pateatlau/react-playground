import React, { JSX, useEffect, useRef, useState } from 'react';
import Button from './Button';
import useUserStore from '../contexts/zustand/useUserStore';
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(e.target);
};

const LoginZustand: React.FC = (): JSX.Element => {
  const { name, password, setName, setPassword, resetUser } = useUserStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [reset, setReset] = useState(true);

  useEffect(() => {
    if (reset && inputRef.current) {
      inputRef.current.focus();
      setReset(false);
      resetUser();
    }
  }, [reset]);

  return (
    <main className="container min-w-full min-h-[calc(100vh-136px)] flex flex-col items-center justify-center py-2 bg-slate-100">
      <form onSubmit={handleSubmit}>
        <div className="p-20 bg-white rounded-lg items-center justify-center flex flex-col gap-4 shadow-lg">
          <h1 className="text-2xl text-slate-500 ">React Playground</h1>
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
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
        </div>
      </form>
    </main>
  );
};

export default LoginZustand;
