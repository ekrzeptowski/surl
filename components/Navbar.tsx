import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";

import Logo from "./Logo.svg";

const Navbar = ({}: NavbarProps) => {
  const [session, loading] = useSession();
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center">
        <div className="w-28">
          <Logo />
        </div>
        <span className="flex-1"></span>
        <div className="flex items-center">
          {!loading && !session && (
            <>
              <a
                href={`/api/auth/signin`}
                className="mr-1 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session && (
            <>
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt="User profile image"
                  className="w-12 h-12 inline-block rounded-full"
                />
              )}
              <span className="hidden sm:inline-block">
                <strong>{session.user.name || session.user.email}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className="ml-2 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

type NavbarProps = {};
