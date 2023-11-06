import Image from 'next/image'
import {Hero} from "@/components/hero";
import {Navbar} from "@/components/navbar";

export default function Home() {
  return (
      <main className={"flex min-h-screen flex-col bg-violet container mx-auto px-12"}>
        <container classname={"container mx-auto px-12 py-4"}>
            <Navbar/>

          <Hero/>
         </container>
      </main>
  );
};
