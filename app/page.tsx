import { Inter } from "next/font/google";
import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <MyProfilePic />
      <div className="px-6 mx-auto">
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Utkarsh K</span>.
          </span>
        </p>
      </div>
      <Posts />
    </main>
  );
}
