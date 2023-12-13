import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="m-0 fixed border-b dark:border-none dark:bg-slate-800 dark:text-white py-3 top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          Next JS Docker Demo
        </Link>
        <div className="flex items-center md:order-2">
          <div className="flex items-center">
            <>
              <Link href="/settings">
                <div className="block mr-5">
                  <span className="text-white p-2 hover:text-gray-400">
                    Settings
                  </span>
                </div>
              </Link>
              |
              <Link href="/about" className=" hover:text-gray-400">
                <span className="text-white p-2 hover:text-gray-400">
                  About
                </span>
              </Link>
            </>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
