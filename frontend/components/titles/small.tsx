import React from "react";

interface TitleComponentProps {
    text: string;
}

const SmallTitle: React.FC<TitleComponentProps> = ({ text }) => {
  return (
    <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl">{ text }</h2>
  );
};

export default SmallTitle;
