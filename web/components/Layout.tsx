import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        {title ? (
          <title>{"NextJS Docker Demo | " + title}</title>
        ) : (
          <title>App</title>
        )}
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="flex flex-col min-h-[100vh]">
        <Header />
        <main className="flex justify-center items-center md:mt-40">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
