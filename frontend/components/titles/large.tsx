import React from "react";

interface TitleComponentProps {
    text: string;
}

const LargeTitle: React.FC<TitleComponentProps> = ({ text }) => {
  return (
    <div className="mb-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{text}</h1>
    </div>
  );
};

export default LargeTitle;
