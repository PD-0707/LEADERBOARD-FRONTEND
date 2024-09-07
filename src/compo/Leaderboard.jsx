import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-end mt-20 w-4/5 sm:w-auto mx-auto sm:ml-16 sm:mr-16">
            <div className="relative flex flex-col items-center">
                <div className="bg-customBlue h-24 w-28 sm:h-28 sm:w-36 rounded-t-2xl flex justify-center items-center relative border-b-0">
                    <img
                        src={data[1].image}
                        alt={data[1].name}
                        className="absolute -top-8 sm:-top-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-400 object-cover"
                    />
                    <div className="absolute -bottom--9 sm:-bottom--7 bg-gray-400 text-black text-xs sm:text-sm font-bold rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border-2 border-black">
                        2
                    </div>
                </div>
                <div className="bg-customBlue w-28 sm:w-36 text-center py-1 sm:py-2 text-white">
                    <p className="font-semibold text-sm sm:text-base">{data[1].name}</p>
                    <p className="font-bold text-sm sm:text-lg">{data[1].points}</p>
                </div>
            </div>

            <div className="relative flex flex-col items-center border-l-2 border-r-2 border-gray-50">
                <div className="bg-customBlue h-40 w-36 sm:h-48 sm:w-44 rounded-t-full flex justify-center items-center relative border-b-0">
                    <img
                        src={data[0].image}
                        alt={data[0].name}
                        className="absolute -top-10 sm:-top-12 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-yellow-500 object-cover"
                    />
                    <div className="absolute -top-24 sm:-top-28 left-1/2 transform -translate-x-1/2 text-yellow-500 text-5xl sm:text-6xl">
                        👑
                    </div>
                    <div className="absolute -bottom--8 sm:-bottom--8 bg-yellow-500 text-black text-xs sm:text-sm font-bold rounded-full w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center border-2 border-black">
                        1
                    </div>
                </div>
                <div className="bg-customBlue w-36 sm:w-44 text-center py-1 sm:py-2 text-white">
                    <p className="font-semibold text-sm sm:text-base">{data[0].name}</p>
                    <p className="font-bold text-sm sm:text-lg">{data[0].points}</p>
                </div>
            </div>

            <div className="relative flex flex-col items-center">
                <div className="bg-customBlue h-24 w-28 sm:h-28 sm:w-36 rounded-t-2xl flex justify-center items-center relative border-b-0">
                    <img
                        src={data[2].image}
                        alt={data[2].name}
                        className="absolute -top-8 sm:-top-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-yellow-700 object-cover"
                    />
                    <div className="absolute -bottom--9 sm:-bottom--7 bg-yellow-700 text-black text-xs sm:text-sm font-bold rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border-2 border-black">
                        3
                    </div>
                </div>
                <div className="bg-customBlue w-28 sm:w-36 text-center py-1 sm:py-2 text-white">
                    <p className="font-semibold text-sm sm:text-base">{data[2].name}</p>
                    <p className="font-bold text-sm sm:text-lg">{data[2].points}</p>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;