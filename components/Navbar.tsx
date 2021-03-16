import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";

import Logo from "./Logo.svg";

const Navbar = ({}: NavbarProps) => {
  const [session, loading] = useSession();
  return (
    <nav>
      <div className="flex items-center border-b border-gray-200">
        <div>
          <Logo />
        </div>
        <span className="flex-1"></span>
        <div className="flex items-center">
          {!session && (
            <>
              <span>You are not signed in</span>
              <a
                href={`/api/auth/signin`}
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
              <span>
                <strong>{session.user.name || session.user.email}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
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
