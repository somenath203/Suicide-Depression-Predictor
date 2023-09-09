import { NavLink } from 'react-router-dom';

const AboutUsPage = () => {
    return (
        <>
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 font-poppins tracking-wide text-violet-600">
                            About the Project
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed mt-3 text-sm lg:text-lg font-poppins text-violet-700">
                            The Suicidal Thoughts and Depression Predictor is an A.I. powered project that
                            predicts the whether a person is having suicidal thoughts and depression inside him/her based
                            on the thing the user speaks in the mic. The project uses a supervised machine
                            learning algorithm called Support Vector Classifier to train a model on a dataset
                            contains various suicidal/depression and normal data. The accuracy of the model
                            on the training data is around 95% and on testing data, the
                            accuracy is around 90%. With the help of this project, one can predict whether a 
                            person is suffering from suicidal/depression thoughts or not.
                        </p>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                        <NavLink to='/voiceinputform' className='block m-auto'>
                            <button className="text-white bg-violet-500 border-0 py-3 px-8 focus:outline-none hover:bg-violet-600 rounded text-sm lg:text-lg shadow-lg">
                                Back to Form
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;
