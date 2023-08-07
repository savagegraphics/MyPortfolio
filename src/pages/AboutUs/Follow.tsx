
import React from 'react';
import Link from 'next/link';
import '@/pages/About.css'
import Image from 'next/image'
import Imaged from  '@/app/assets/olaale.jpg'
import SingleCard from './SingleCard';

const Follow = () => {
    return (
            <section className="dark:bg-gray-800 dark:text-gray-100">

                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="flex flex-col py-8 space-y-6 mb-2 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                    <Image className="object-cover w-[380px] h-[340px] mx-auto rounded-md lg:max-w-2xl" src={Imaged} alt="glasses photo"  width={200} height={100}/>
                    </div>
                    <div className="container flex flex-col w-full max-w-2xl p-6 mx-auto mt-1 rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                       <div className="space-y-1">
			<div className="flex flex-wrap space-x-0">
      <h2 className="flex items-center justify-start mt-4 text-3xl border-b border-gray-700 w-8/12 mx-auto font-bold text-white mb-4">About Olawale</h2>

		<p className='text-xl'>I am a full stack web developer with expertise in various technologies, 
      including PHP, Laravel, MySQL, RESTapi, Bootstrap and Vue JS. 
      I have over five years of experience in web development,
       I have created over 20 websites and web applications for different companies and brands. 
       I have a strong understanding of software development practices and I am skilled at creating efficient and well-designed code.
        I possess excellent communication, critical thinking, and social skills,
       which allows me to collaborate effectively with clients and stakeholders.
       </p>
    	</div>
		</div>
	</div>
</div>
            </section>
    );
};

export default Follow;



// divide-y xl:flex-row xl:divide-y-0 xl:divide-x