import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;

type LayoutProps = {
  children: React.ReactNode;
};
