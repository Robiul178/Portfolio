import React from 'react';

const Skills = () => {
    return (
        <section className=' py-8 md:py-48 max-w-7xl mx-auto'>

            <div
                className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-sky-400"
            >
                <h3 className="text-3xl font-semibold">Skill's</h3>
            </div>

            <div className='md:grid md:grid-cols-2 gap-14 drop-shadow-md'>
                <div>
                    <h1 className='text-3xl text-gray-400 mb-8'>Front End</h1>
                    <div>
                        <p>HTML</p>
                        <progress className="progress progress-warning  w-86 h-3 mb-3" value="95" max="100"></progress>
                        <p>CSS</p>
                        <progress className="progress progress-primary w-86 h-3 mb-3" value="90" max="100"></progress>
                        <p>Bootstrap</p>
                        <progress className="progress progress-secondary w-86 h-3 mb-3" value="85" max="100"></progress>
                        <p>Tailwid Css</p>
                        <progress className="progress progress-error w-86 h-3 mb-3" value="90" max="100"></progress>
                        <p>JavaScript</p>
                        <progress className="progress progress-info w-86 h-3 mb-3" value="85" max="100"></progress>
                        <p>React Js</p>
                        <progress className="progress progress-warning w-86 h-3 mb-3" value="80" max="100"></progress>
                        <p>WordPress</p>
                        <progress className="progress progress-accent w-86 h-3 mb-3" value="85" max="100"></progress>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl text-gray-400 mb-8'>Back End</h1>
                    <div>
                        <p>Node Js</p>
                        <progress className="progress progress-warning w-86 h-3 mb-3" value="60" max="100"></progress>
                        <p>Express Js</p>
                        <progress className="progress progress-error w-86 h-3 mb-3" value="70" max="100"></progress>
                        <p>MongoDB</p>
                        <progress className="progress progress-info w-86 h-3 mb-3" value="70" max="100"></progress>
                        <p>Firebase</p>
                        <progress className="progress progress-secondary w-86 h-3 mb-3" value="90" max="100"></progress>
                    </div>
                </div>
                {/* <div></div> */}
            </div>
        </section>
    );
};

export default Skills;