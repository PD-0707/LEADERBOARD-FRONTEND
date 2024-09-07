import React, { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { PiDotsNine } from "react-icons/pi";
import { FidgetSpinner } from 'react-loader-spinner';

const Header = () => {
    const [activeButton, setActiveButton] = useState('organisation');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <div className="w-full h-auto bg-blue-50 flex flex-col items-center">
            <div className="w-full h-16 flex items-center justify-between px-4">
                <SlArrowLeft className="text-xl sm:text-2xl ml-2 lg:ml-10" />
                <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl">Leaderboard</h1>
                <PiDotsNine className="text-2xl sm:text-3xl mr-2 lg:mr-10" />
            </div>

            <div className="relative flex justify-center items-center h-16 w-full max-w-md bg-gray-50 rounded-2xl">
                <div className="relative flex space-x-2 sm:space-x-6">
                    <button
                        className={`relative text-sm sm:text-base lg:text-lg font-semibold py-2 px-2 lg:px-4 ${activeButton === 'organisation' ? 'text-blue-700' : 'text-gray-500'}`}
                        onClick={() => handleButtonClick('organisation')}
                    >
                        Organisation
                    </button>
                    <button
                        className={`relative text-sm sm:text-base lg:text-lg font-semibold py-2 px-2 lg:px-4 ${activeButton === 'department' ? 'text-blue-700' : 'text-gray-500'}`}
                        onClick={() => handleButtonClick('department')}
                    >
                        Department
                    </button>
                </div>

                <div
                    className={`absolute bottom-0 h-1 bg-blue-700 transition-all duration-300 ${activeButton === 'organisation' ? 'w-16 left-1/3 sm:w-20 sm:left-1/4' : 'w-16 left-2/3 sm:w-20 sm:left-3/4'
                        } transform -translate-x-1/2`}
                />
            </div>

            <div className={`w-full mt-10 text-center ${activeButton === 'department' ? 'block' : 'hidden'}`}>
                <h2 className="text-base sm:text-xl lg:text-2xl font-bold">404 Not Found</h2>
                <p className="text-sm sm:text-lg mt-4">Sorry, the page you are looking for does not exist.</p>
                
            </div>
        </div>
    );
};

export default Header;
