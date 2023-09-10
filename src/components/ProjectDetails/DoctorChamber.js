import React from 'react';
import header from '../../assets/details/DoctorHome.png'
import fullpic from '../../assets/details/doctorpage.png'
import adminDashboard from '../../assets/details/doctorAdminDash.png'
import BuyerDashboard from '../../assets/details/appointment.png'
import { FaHandPointRight } from 'react-icons/fa';

const DoctorChamber = () => {
    return (
        <section id='laptop-bazar' className='text-white'>
            <h1 className='text-5xl text-center my-8 font-bold text-gray-400'>Doctor-Portal</h1>
            <h2 className='text-gray-400 p-4 md:p-10'><span className='font-bold '>Description :</span> A full stack mobile responsive project for health care service provider.</h2>
            <div className='text-center my-5'>
                <img src={header} className='w-1/2  mx-auto' alt="" />
                <a className='font-bold m-5 btn btn-outline btn-info' href="https://exquisite-salmiakki-05007c.netlify.app/" target={0}><span>View Live site</span></a>
                <a className='font-bold m-5 btn btn-outline btn-info' href="https://github.com/Robiul178/doctor-portal" target={0}><span>Client site</span></a>
                <a className='font-bold m-5 btn btn-outline btn-info' href="https://github.com/Robiul178/doctor-portl-server" target={0}><span>Server site</span></a>
            </div>

            <div className=' pl-4 md:pl-20'>
                <h2 className='text-xl text-info my-3 font-semibold'>Used Technology :</h2>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">ReactJs</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">NodeJs</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">ExpressJs</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">MongoDB</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">Firebse</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">ContextAPI</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">Tailwind CSS</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">React Hook Form</button>
                <button type="button" className="px-6 py-2 m-2 font-semibold rounded bg-gray-900">React Query</button>
            </div>

            <div className=' pl-4 md:pl-20 md:mb-28'>
                <h1 className='text-xl text-info my-5 font-bold'>In this project :</h1>
                <ul className='text-gray-400'>
                    <li className='flex items-center gap-2 my-2'><FaHandPointRight></FaHandPointRight>Executed ContextAPI to avoid prop-drilling.</li>
                    <li className='flex items-center gap-2 my-2'><FaHandPointRight></FaHandPointRight>Set up MongoDB to stored all data.</li>
                    <li className='flex items-center gap-2 my-2'><FaHandPointRight></FaHandPointRight>Developed an Admin portal to manage all appointments, patients, doctors, and make an admin or remove an admin.</li>
                    <li className='flex items-center gap-2 my-2'><FaHandPointRight></FaHandPointRight>Developed a user route to manage their appointments, and make payments.</li>
                </ul>
            </div>

            <div className=' p-4 md:p-20 md:mb-48'>
                <h1 className='text-xl text-info my-5 font-bold'>Some section :</h1>

                <div className='my-16 md:my-20'>
                    <h1 className='text-gray-400 text-2xl md:text-5xl font-bold'>Admin Dashboard</h1>
                    <img src={adminDashboard} className='w-3/4 mx-auto' alt="" />
                </div>
                <div className='my-16 md:my-20'>
                    <h1 className='text-gray-400 text-2xl md:text-5xl font-bold text-right '>User's Dashboard</h1>
                    <img src={BuyerDashboard} className='w-3/4 mx-auto' alt="" />
                </div>
                <div className='my-16 md:my-20'>
                    <h1 className='text-gray-400 text-2xl md:text-5xl font-bold text-center '>Home Page</h1>
                    <img src={fullpic} className='w-3/4 mx-auto' alt="" />
                </div>

            </div>

        </section>
    );
};

export default DoctorChamber;