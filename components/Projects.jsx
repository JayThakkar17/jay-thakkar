import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PineAppleImg from '../public/assets/projects/PineApple1.png';
import cryptoImg from '../public/assets/projects/crypto2.png';
import ProjectItem from './ProjectItem';
import PhotoAlbum from '../public/assets/projects/homePage.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='PineApple Appartments'
            backgroundImg={PineAppleImg}
            projectUrl='/pineapple'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto World'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'
          />
          <ProjectItem
            title='Photo Album Maker'
            backgroundImg={PhotoAlbum}
            projectUrl='/photo-album-maker'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
