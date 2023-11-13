import Image from 'next/image';
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-violet m-">
            <div className="container mt-24 mx-auto px-12 py-4">
                <Navbar/>
                <Hero />
                <AboutSection/>
                {/* Use the Image component here if needed */}
                {/* <Image src="/your-image.jpg" width={500} height={300} alt="Your Image" /> */}
            </div>
        </main>
    );
};
