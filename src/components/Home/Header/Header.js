import React from 'react';
import '../../../App.css';
import Navber from '../Navber/Navber';
import programmer2 from '../../../assets/shakib.png'
import { FaLinkedin, FaGithubSquare, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTypewriter } from 'react-simple-typewriter'



const Header = () => {

    const [text] = useTypewriter({
        words: [`'m ROBIUL ISLAM`],
        loop: 0
    })

    return (
        <section id='header'>
            <Navber></Navber>
            <div className="md:grid md:grid-cols-2 gap-10 h-screen">
                <div className=' pt-20 pl-20 md:flex items-end md:items-center md:ml-60'>
                    <div>
                        <p className='font-bold text-cyan-500'>Hello,</p>
                        <h1 className='text-4xl md:text-5xl font-bold text-sky-400'>I{text}</h1>
                        <p className='font-bold text-2xl text-cyan-700 mt-2'>Front End Developer</p>
                        <div className=" flex gap-4 font-semibold text-accent">
                            <p>
                                Web Developer |
                            </p>
                            <p>
                                Wordpress Customize  |
                            </p>
                            <p>
                                Computer Science
                            </p>
                        </div>
                        <div className='flex gap-3 mt-4 w-8'>
                            <a target={0} href='https://www.linkedin.com/in/robiulislam007/' className='text-blue-600'><FaLinkedin></FaLinkedin></a>
                            <a target={0} href='https://github.com/Robiul178' className='text-gray-600'><FaGithubSquare></FaGithubSquare></a>
                            <a target={0} href='https://www.facebook.com/profile.php?id=100012311562343' className='text-blue-600'><FaFacebook></FaFacebook></a>
                            <a target={0} href='https://www.instagram.com/robiul.islam__/' className='text-blue-600'><FaInstagram></FaInstagram></a>
                        </div>
                        <Link to='contact' spy={true} smooth={true} offset={-80} duration={1000}>
                            <span className='btn btn-outline btn-info font-bold my-5'>Hire me</span>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center md:ml-28'>
                    <img src={programmer2} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;