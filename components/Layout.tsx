import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <>{children}</>
      <footer className="justify-end">TODO: Footer</footer>
    </div>
  );
};

export default Layout;

type LayoutProps = {
  children: React.ReactNode;
};
