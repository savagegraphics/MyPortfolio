
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/pages/About.css'

const Portfolio = () => {
    return (
            <section className="dark:bg-gray-800 dark:text-gray-100">
            <h2 className="flex items-center justify-center mt-12 text-3xl border-b border-gray-light w-11/12 mx-auto font-bold text-white mb-4">About Us</h2>

                <div className="container flex flex-col divide-y xl:flex-row xl:divide-y-0 xl:divide-x mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 mb-16 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <div className='text-2xl text-gray-100'>Other Goodies</div>
                      
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2 text-gray-100">
                                <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
                                <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2 text-gray-100">
                                <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
                                <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2 text-gray-100">
                                <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
                                <p className="leading">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto mt-6 rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                        <div className='text-2xl text-gray-100'>Personal Advice from Real People</div>
                        <div className="flex justify-between p-4 pt-14">
                            <div className="flex space-x-4 text-gray-100">
                                <div>
                                    <Image className="object-cover mr-4 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" width={200} height={100} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Amber </h4>
                                    <span className="text-xs dark:text-gray-400">Happiness Hero</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm text-gray-100">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                        <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
</div>
                    </div>
                </div>
            </section>
    );
};

export default Portfolio;
