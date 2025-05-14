'use client';

import { ReactNode } from 'react';

export default function ScrollLink({
  to,
  isActive,
  children,
}: {
  to: string;
  isActive: boolean;
  children: ReactNode;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(to);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={`block text-sm transition-colors duration-200 ${
        isActive ? 'text-teal-400 font-semibold' : 'text-gray-400'
      }`}
    >
      {children}
    </a>
  );
}