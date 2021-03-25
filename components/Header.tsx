import React from "react";

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </header>
  );
};

export const HeaderText = ({ children }: HeaderProps) => {
  return <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{children}</h1>;
};

type HeaderProps = {
  children: React.ReactNode;
};
