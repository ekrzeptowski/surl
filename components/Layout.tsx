import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;

type LayoutProps = {
  children: React.ReactNode;
};
