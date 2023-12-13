import Layout from "@/components/Layout";
import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home" description="Home Page">
      <div className="flex max-w-md flex-col gap-4">
        <h5>Welcome to Next JS Docker Demo!</h5>
        <>
          <Link href="/settings">
            <div className="block mr-5">
              <span className="text-white p-2 hover:text-gray-400">
                Settings
              </span>
            </div>
          </Link>
          <Link href="/about" className=" hover:text-gray-400">
            <span className="text-white p-2 hover:text-gray-400">About Us</span>
          </Link>
        </>
      </div>
    </Layout>
  );
};

export default HomePage;
