import React from 'react';
import chamber from '../../../assets/details/HolidayEscape.png';
import doctorr from '../../../assets/details/ddd.png';

import { FiGithub, FiMonitor } from 'react-icons/fi';

// import '../../../App.css'

const ShowCase = () => {
    return (
        <section id='projects' className='max-w-7xl mx-auto'>
            <div className='text-black ml-8 md:ml-4'>

                <div
                    className="text-start sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-sky-400"
                >
                    <h3 className="text-3xl font-semibold">Project</h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                    {/* 1st Project */}
                    <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl mb-5">
                        <figure><img src={doctorr} alt="Shoes" /></figure>
                        <div className="card-body text-clip ">
                            <h2 className="text-2xl font-bold text-black text-center">DoctorPortal</h2>
                            <p
                                className='text-gray-600 text-center text-lg'
                            >
                                A full stack responsive Healthcare service provider website
                            </p>
                            <div className="card-actions justify-end border-b-2 p-2">
                                <a href="https://exquisite-salmiakki-05007c.netlify.app/" target={0}>
                                    <button className="btn btn-outline btn-info">
                                        <FiMonitor></FiMonitor>
                                        Live</button>
                                </a>
                                <a href="https://github.com/Robiul178/doctor-portal" target={0}>
                                    <button className="btn btn-outline btn-success">
                                        <FiGithub></FiGithub>
                                        Client</button>
                                </a>
                                <a href="https://github.com/Robiul178/doctor-portl-server" target={0}>
                                    <button className="btn btn-outline btn-warning">
                                        <FiGithub></FiGithub>
                                        server</button>
                                </a>
                            </div>
                            <div>
                                <p className='text-black text-md text-md'>
                                    <span className=" text-lg font-bold">
                                        Technologies:
                                    </span> <br />
                                    ReactJs, NodeJs, ExpressJs, MongoDB,TailwindCSS ,Firebase.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl mb-5">
                        <figure><img src={chamber} alt="Shoes" /></figure>
                        <div className="card-body text-clip ">
                            <h2 className="text-2xl font-bold text-black text-center">HolidayEscape</h2>
                            <p
                                className='text-gray-600 text-center text-lg'
                            >
                                A full stack responsive Healthcare service provider website
                            </p>
                            <div className="card-actions justify-end border-b-2 p-2">
                                <a href="https://holidayescape-d354d.web.app/" target={0}>
                                    <button className="btn btn-outline btn-info">
                                        <FiMonitor></FiMonitor>
                                        Live</button>
                                </a>
                                <a href="https://github.com/Robiul178/HolidayEscape" target={0}>
                                    <button className="btn btn-outline btn-success">
                                        <FiGithub></FiGithub>
                                        Client</button>
                                </a>
                                <a href="https://github.com/Robiul178/HolidayEscape-server" target={0}>
                                    <button className="btn btn-outline btn-warning">
                                        <FiGithub></FiGithub>
                                        server</button>
                                </a>
                            </div>
                            <div>
                                <p className='text-black text-md text-md'>
                                    <span className=" text-lg font-bold">
                                        Technologies:
                                    </span> <br />
                                    ReactJs, NodeJs, ExpressJs, MongoDB,TailwindCSS ,Firebase..

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default ShowCase;