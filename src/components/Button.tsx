import React, { JSX } from 'react';

type ButtonTypes = 'submit' | 'reset' | 'button';

type ButtonProps = {
  text: string;
  title: string;
  type: ButtonTypes;
};

const Button: React.FC<ButtonProps> = ({
  text,
  title,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className="rounded-md shadow-md hover:bg-blue-400 bg-blue-500 p-4 text-white w-full"
      title={title}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
