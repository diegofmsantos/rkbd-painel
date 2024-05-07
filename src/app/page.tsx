"use client"

import { Header } from "@/components/Header";
import { HeartIcon, IdentificationIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {

  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/") {
        setSelected("button1");
      } else if (path === "/socios") {
        setSelected("button2");
      } else if (path === "/midias") {
        setSelected("button3");
      }
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-y-hidden">
      <section className="w-full h-full flex justify-around items-center bg-white">
        <Link href="/publico" passHref>
          <div
            onClick={() => setSelected("button1")}
            className={`bg-[#16C6D1] w-40 h-44 flex flex-col justify-center items-center rounded-xl`}
          >
            <UserGroupIcon className={`w-32 h-40`} />
            <p className={`p-1 text-xl font-bold`}>Público</p>
          </div>
        </Link>
        <Link href="/socios" passHref>
          <div
            onClick={() => setSelected("button2")}
            className={`bg-[#16C6D1] w-40 h-44 flex flex-col justify-center items-center rounded-xl`}
          >
            <IdentificationIcon className={`w-32 h-40`} />
            <p className={`p-1 text-xl font-bold`}>Sócios</p>
          </div>
        </Link>
        <Link href="/midias" passHref>
          <div
            onClick={() => setSelected("button3")}
            className={`bg-[#16C6D1] w-40 h-44 flex flex-col justify-center items-center rounded-xl`}
          >
            <HeartIcon className={`w-32 h-40`} />
            <p className={`p-1 text-xl font-bold `}>Mídias</p>
          </div>
        </Link>
      </section>
    </div >
  )
}

export default Page;