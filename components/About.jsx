import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/Jay-T.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not an average developer
          </p>
          <p className='py-2 text-gray-600'>
            I am a Web developer and designer. From the past 2 years I have been
            working as a React developer. I am always looking forward to work on
            meaningful projects.
          </p>
          <p className='py-2 text-gray-600'>
            My main role is to create SPA with performance in mind. I started
            learning javascript and was even more enjoying to create websites
            interactive. I am now spending my time building projects with React
            JS, Next.Js, Redux, TypeScript and Tailwind CSS and learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='h-auto m-auto rounded-[0.75rem] flex items-center justify-center  hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-[0.75rem]' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
