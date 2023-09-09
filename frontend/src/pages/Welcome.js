import { Typewriter } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';

import WelcomePageImg from './../assets/welcomepageimg.svg';

const Welcome = () => {
    return (
        <>
            <section>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-10/12">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-violet-700 tracking-wide font-poppins">
                            Welcome to
                            <br className="hidden lg:inline-block tracking-wide text-violet-700" />{' '}
                            Suicidal Thoughts and Depression Predictor
                        </h1>
                        <p className="mb-8 leading-relaxed text-lg tracking-wide text-violet-600 font-poppins">
                            <Typewriter
                                words={[
                                    'Predict whether you are suffering from suicidal thoughts and depression or not.',
                                    'Suicidal thoughts can bring about a profound sense of isolation and despair, intensifying feelings of hopelessness and sadness.',
                                    'Help of Professional Councellor is needed during this time for the welfare of the person.'
                                ]}
                                loop={false}
                                cursor={true}
                            />
                        </p>
                        <div className="flex justify-center">
                            <NavLink to='/voiceinputform'>
                                <button className="ml-4 inline-flex text-violet-800 border-4 border-violet-500 bg-white py-4 px-8 focus:outline-none hover:scale-140 hover:border-violet-800 hover:text-violet-700 text-center rounded-lg text-xl tracking-wide animate duration-300">
                                    Get Started
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={WelcomePageImg}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Welcome;
