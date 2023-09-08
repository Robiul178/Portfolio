import React from 'react';
import contact from '../../../assets/contact us.png'

const Contact = () => {
    return (
        <section id='contact' className='bg-gray-800 py-28 w-screen'>
            <div className="p-6  text-gray-50">
                <h1 className='text-3xl py-5 pl-10'>Contact Me</h1>
                <form action="https://formspree.io/f/mrgdnrow" method='POST' className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium pl-4">Send Your Query</p>
                            <img src={contact} alt="" />
                        </div>

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="username" className=" text-lg ">Username</label>
                                <input name='name' type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 border bg-gray-800 h-12 pl-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="website" className="text-lg">Email</label>
                                <input id="website" name='email' type="email" placeholder="Your email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 border bg-gray-800 h-12 pl-2" required />
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-lg">Message</label>
                                <textarea id="bio" name='message' type='text' placeholder="Write your message" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 border bg-gray-800 h-20 p-2" required></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="">
                                    <button type="submit" className="px-4 py-2 border rounded-md border-gray-100">Send</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default Contact;