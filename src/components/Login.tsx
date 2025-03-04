import React, { JSX, useEffect, useRef, useState } from 'react';
import Button from './Button';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert('ouch, you submitted me!');
};

const Login: React.FC = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <main className="container min-w-full min-h-[calc(100vh-136px)] flex flex-col items-center justify-center py-2 bg-slate-100">
      <form onSubmit={handleSubmit}>
        <div className="p-20 bg-white rounded-lg items-center justify-center flex flex-col gap-4 shadow-lg">
          <h1 className="text-2xl text-slate-500 ">
            Welcome to Lalding's React Playground
          </h1>
          <div className="flex flex-row items-center gap-20 w-full justify-between">
            <label
              className="w-12"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="rounded-md shadow-md p-4 w-2/3"
              ref={inputRef}
            />
          </div>
          <div className="flex flex-row items-center gap-20 w-full justify-between">
            <label
              className="w-12"
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
            />
          </div>
          <Button
            text="Login"
            title="Click to Login"
            type="submit"
          />
          <Button
            text="Reset"
            title="Click to Reset form"
            type="reset"
            onClick={() => inputRef.current && inputRef.current.focus()}
          />
        </div>
      </form>
    </main>
  );
};

export default Login;
