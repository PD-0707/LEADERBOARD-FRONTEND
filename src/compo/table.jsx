import React from 'react';
import data from '../../public/data.json';
import Leaderboard from './Leaderboard.jsx';
const Table = () => {
    const tableData = data.slice(3);

    return (
        <div className="bg-customBlue text-white rounded-3xl px-8 py-4 w-full sm:w-96 sm:mr-24 mt-6 sm:mt-0">
            {tableData.map((user) => (
                <div
                    key={user.ranking}
                    className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-100">
                    <div className="flex items-center">
                        <span
                            className="bg-customBlue h-6 w-6 sm:h-10 sm:w-10 text-white rounded-full flex items-center justify-center border-2 border-gray-50 text-xs sm:text-xl font-semibold mr-2 sm:mr-4">
                            #{user.ranking}
                        </span>
                        <span className="text-xs sm:text-base">{user.name}</span>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                        <p className="text-xs sm:text-base">{user.points}</p>
                        <span
                            className={`${user.status === 'up' ? 'text-green-500' : 'text-red-500'} text-xs`}>
                            {user.status === 'up' ? '▲' : '▼'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

const LeaderboardAndTable = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:justify-center sm:items-end w-full">
            <div className="w-full sm:w-auto">
                <Leaderboard />
            </div>

            <div className="w-full sm:w-auto">
                <Table />
            </div>
        </div>
    );
};

export default LeaderboardAndTable;