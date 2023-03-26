import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Jay Thakkar | Resume</title>
        <meta name='description' content='Jay Thakkar’s Resume.' />
        {/* <link rel='icon' href='/navLogoo.png' /> */}
        <link rel='icon' href='/' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Jay Thakkar</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jay-thakkar-815b54141/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/JayThakkar17'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development <span className='px-1'>|</span> Web Design{' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Development</p>
            <p className='py-2'>Web Design</p>
            <p>Problem Solving</p>
          </div>
        </div>
        {/* <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p> */}

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>
            Technology Stack
          </h5>
          <p className='py-2'>
            <span className='font-bold'>Professional Skills</span>
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span> JavaScript{' '}
            <span className='px-2'>|</span>
            React.Js <span className='px-2'>|</span>Next.Js
            <span className='px-2'>|</span>Git
            <span className='px-2'>|</span> Redux
            <span className='px-2'>|</span> TypeScript
            <span className='px-2'>|</span> ANT Design
            <span className='px-2'>|</span> Tailwind
          </p>
          <p className='py-2'>
            <span className='font-bold'>Technical Elective(s)</span>
            <span className='px-2'>|</span>Object Oriented Programming
            <span className='px-2'>|</span>Data Structures and Algorithms
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Associate Software Engineer
            </span>
            <span className='px-2'>|</span>July 2021 - Present
          </p>
          <p className='py-1 italic'>Bytes Technolab Inc.</p>
        </div>

        {/* PROJECTS */}

        <h5 className='text-center underline text-[18px] py-4'>Projects</h5>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>On Demand Delivery</span>
          </p>
          <p className='py-1 italic'>
            <span className='font-bold'>Technology Used: </span>
            React | React Native | GraphQL | MySQL | ANT Design | Express |
            Stripe
          </p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'>
            On Demand Delivery On Demand Delivery is a platform in which user
            can order food online from desired restaurants. Once a customer done
            their payment if not COD and order the food then order will go to
            the restaurant and restaurant owner can accept/reject the order.
            After accepting the order, driver will assign automatically lat-long
            wise for particular order then order request will go to the driver
            side and he can accept/reject the order request. There is one main
            admin who have all the rights and he can show all the details and
            also approve the driver first before entering into the system.
          </p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>
              Automatic Question Paper Generator
            </span>
          </p>
          <p className='py-1 italic'>
            <span className='font-bold'>Technology Used: </span>
            JavaScript | MongoDB | Node.Js | Express
          </p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'>
            {/* <li>
              Lead paramedic on an ALS 911 ambulance covering rural Grayson
              County.
            </li>
            <li>
              Work surrounding departments organizing treatment protocols and
              facilitate hands on training operations.
            </li>
            <li>
              Manage high stress 911 situations such as medical emergencies,
              traumatic emergencies, and water accidents
            </li>
            <li>
              Public outreach and relations for the municipality from healthcare
              awareness to training methods.
            </li> */}
            Here professor can generate question paper as per their requirement.
            The system automatically generates question paper having question
            types like MCQ, Theory, True/False, Yes/No.
          </p>
        </div>
        {/* Experience */}

        <h5 className='text-center underline text-[18px] py-4'>Internships</h5>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Street Shopping</span>
            <span className='px-2'>|</span>DA-IICT( Intern )
          </p>
          <p className='py-1 italic'>
            <span className='font-bold'>Technology Used: </span>
            React | React Native | Node.Js | Express | MySQL | AWS
          </p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'>
            Street Shopping is a type of E-Commerce Application. Where vendors
            can create their virtual shop and sell his product. There is also
            option for delivery.
          </p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Photo Album Maker</span>
            <span className='px-2'>|</span>DA-IICT( Summer-Intern )
          </p>
          <p className='py-1 italic'>
            <span className='font-bold'>Technology Used: </span>
            React | Node.Js | Express | MongoDB | Bootstrap
          </p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'>
            Photo Album Maker is platform for photographers, where they can
            create album for their clients and upload photos in it and share it
            for the e-album generator.
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>Hobbies</h5>
        <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>Playing Cricket</li>
          <li>Gaming</li>
          <li>Travelling</li>
        </ul>
      </div>
    </>
  );
};

export default resume;
