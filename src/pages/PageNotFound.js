import React from 'react';
import { Navigate } from 'react-router-dom';
import img from '../images/notFound/wutface.png';

function PageNotFound() {
    return (
        <div className="container flex flex-col justify-center items-center px-5 py-24 mx-auto">
            <div className="w-full text-center lg:w-2/3">
                <h3 className="text-blurple text-xl mb-4">404 - Page Not Found</h3>
                <h1 className="mb-2 text-4xl font-bold text-[#262626] title-font md:text-6xl">Uh Oh... I think you got lost!</h1>
                <img className="w-36 mx-auto mb-12" src={img} alt="wutface emote" />
                <div className="flex justify-center">
                    <Navigate to="/">
                        <button className="duration-200 flex inline-flex items-center text-[#262626] bg-white bg-opacity-10 hover:bg-opacity-30 border-0 py-2 px-6 focus:outline-none rounded text-lg mr-4">
                            Go back to homepage
                            <svg fill="currentColor" stroke="currentColor" style={{ 'color': '#5865f2' }} strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 20 22">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Navigate>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound