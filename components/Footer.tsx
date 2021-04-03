import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="justify-end bg-white dark:bg-gray-900 shadow-md text-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 sm:divide-x dark:divide-gray-600 flex flex-col sm:flex-row">
        <Link href="/">
          <a className="p-2 hover:underline">Privacy policy</a>
        </Link>
        <Link href="/">
          <a className="p-2 hover:underline">Terms of use</a>
        </Link>
        <Link href="/">
          <a className="p-2 hover:underline">Cookie policy</a>
        </Link>
      </div>
    </footer>
  );
}
