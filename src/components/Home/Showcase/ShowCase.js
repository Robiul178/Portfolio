import React from 'react';
import laptop from '../../../assets/laptop-bazar.png'
import chamber from '../../../assets/doctor.png'
import pose from '../../../assets/poseNclick.png'
import coursehut from '../../../assets/courseHut.png'
import { Link } from 'react-router-dom';
// import '../../../App.css'

const ShowCase = () => {
    return (
        <section id='projects' className='bg-gray-800 w-screen'>
            <div className='text-white ml-8 md:ml-10'>
                <h1 className='text-3xl py-5 '>Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                    <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl mb-5">
                        <figure><img src={laptop} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Laptop-Bazar</h2>
                            <p className='text-gray-400'>Full stack and fully responsive used laptop buy and selling website-Time period:4 days
                                Technologies:ReactJs,NodeJs,ExpressJs, <br></br> MongoDB,Firebase, JWT,Stripe ,TailwindCSS.</p>
                            <div className="card-actions justify-end">
                                <a href="https://laptop-bazar-nu.vercel.app/" target={0}>
                                    <button className="btn btn-outline btn-info">Live site</button>
                                </a>
                                <Link to='/laptopBazar'>
                                    <span className="btn btn-outline btn-info">More details</span>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl mb-5">
                        <figure><img src={chamber} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">DoctorChamber</h2>
                            <p className='text-gray-400'>A full stack responsive Healthcare service provider website-Time period:4 days
                                Technologies:ReactJs,NodeJs,ExpressJs, <br></br> MongoDB,Firebase, JWT,Stripe ,TailwindCSS.</p>
                            <div className="card-actions justify-end">
                                <a href="https://doctorchamber-ae2a3.web.app/" target={0}>
                                    <button className="btn btn-outline btn-info">Live site</button>
                                </a>
                                <Link to='/doctorChamber'>
                                    <span className="btn btn-outline btn-info">More details</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl mb-5">
                        <figure><img src={pose} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Pose-N-Click</h2>
                            <p className='text-gray-400'>A full-stack mobile responsive project for a Photography service provider - Time period: 3 days
                                Technologies: ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, JWT, ,Tailwind CSS</p>
                            <div className="card-actions justify-end">
                                <a href="https://posenclick-2964b.web.app/" target={0}>
                                    <button className="btn btn-outline btn-info">Live site</button>
                                </a>
                                <Link to='/poseNclick'>
                                    <span className="btn btn-outline btn-info">More details</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl mb-5">
                        <figure><img src={coursehut} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">CourseHut</h2>
                            <p className='text-gray-400'>A full-stack mobile responsive project for Online course seller. - Time period: 2 days
                                Technologies: JavaScipt, ReactJs, React-Router-dom, React-tostify, React-pdf, Tailwind CSS</p>
                            <div className="card-actions justify-end">
                                <a href="https://coursehut-7e4c9.web.app/" target={0}>
                                    <button className="btn btn-outline btn-info">Live site</button>
                                </a>
                                <Link to='/courseHut'>
                                    <span className="btn btn-outline btn-info">More details</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ShowCase;