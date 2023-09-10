import React from 'react';
import '../../../App.css'

const About = () => {
    return (
        <div className=''>
            <section id='about' className="w-screen  text-black">
                <div className="container max-w-7xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-sky-400">
                                <h3 className="text-3xl font-semibold">About Me</h3>
                                <span className="text-sm tracking-wider uppercase text-gray-400">Know about me</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-400">
                                    <p className='text-3xl'>I'm a Front End Developer</p>
                                    <p className='my-3 text-gray-400'>

                                        I am reliable, well organized, and use to working on my own imitative. I am
                                        comfortable with MERN-stack development. Now I want to get an opportunity where I can make the best of
                                        my valuable skills and contribute to the organization’s growth.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-400">
                                    <p className='text-gray-400'>
                                        I completed a web development course. Its called Complete web development with Jhankar Mahbub. In that course I learned about MERN Stack development.
                                    </p>

                                </div>

                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-400">
                                    <p className='text-3xl'>WordPress Developer</p>
                                    <p className='my-3 text-gray-400'>Proficient and Creative WordPress developer with a strong history
                                        in website designe, develop and management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default About;