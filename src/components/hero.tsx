"use client";
import React from 'react';
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";

export const Hero = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className={'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-900'}> Hello! I'm {""}
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                "Syed",
                            1000,
                            "A REact Developer",
                            1000,
                            " A JavaScript",
                            1000,
                        ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}>
                        </TypeAnimation>
                    </h1>
                    <p className='text-white text-base sm:text-lg lg:text-xl mb-6'>
                        I'm a software developer
                    </p>
                    <div>
                        <button className={'w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-red-600 hover:bg-slate-50 hover:text-black'}>
                            Hire Me!
                        </button>
                        <button className={'w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-purple-700 hover:bg-slate-50 hover:text-black'}>
                            <span className={'block bg-black hover:bg-slate-50 rounded-full px-5 py-2'}>Download Resume </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className={' rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500-px] relative'}>
                        <Image
                            src="/images/heart.png"
                            classname={'absolute transform -translate-x-1/2 -translate y-1/2 top-1/2 left-1/2'}
                            alt="heart"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
