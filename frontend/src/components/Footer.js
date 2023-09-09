/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return (
        <>

            <div className="w-full h-1 mb-2 bg-violet-100"></div>

            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <i className="fa-solid fa-circle-exclamation text-violet-600 text-xl"></i>
                        <span className="ml-3 text-base tracking-wide text-violet-800">Suicidal Thoughts and Depression Predictor</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Somenath Choudhury and Vishal Lazrus</p>
                </div>
            </footer>

        </>
    )
};

export default Footer;