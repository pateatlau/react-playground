// Start
// 	countdown should begin with 10 and go towards 0
// 	if countdown reached 0 , show an alert with the message “Rocket has taken off”

// Reset
// 	reset the counter to 10
// 	should be disabled if countdown reached zero

import React, { JSX, useEffect, useState } from 'react';

const Countdown: React.FC = (): JSX.Element => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 10) return;

    setTimeout(() => {
      if (count > 0) {
        setCount((prev) => prev - 1);
      }
    }, 500);
  }, [count]);

  return (
    <div className="container gap-y-10 mx-auto flex flex-col items-center justify-center h-screen">
      <div
        className={
          count !== 0 ? 'text-blue-600 text-3xl' : 'text-red-600 text-3xl'
        }
      >
        {count > 0 ? 'Countdown to Rocket launch' : 'Rocket has taken off'}
      </div>
      <div className="text-2xl">{count}</div>
      <div className="flex gap-x-10">
        <button
          className="disabled:bg-black disabled:text-slate-500 disabled:cursor-not-allowed border-2 rounded-md border-gray-500 p-1 hover:bg-slate-200 w-28"
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count !== 10}
        >
          Countdown
        </button>
        <button
          onClick={() => setCount(10)}
          disabled={count !== 0}
          className="disabled:bg-black disabled:text-slate-500 disabled:cursor-not-allowed border-2 rounded-md border-gray-500 p-1 hover:bg-slate-200 w-28"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Countdown;
