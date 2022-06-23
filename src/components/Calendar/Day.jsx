import React from "react";

const Day = ({ day, currentDate, pickedDate, onPickDate }) => {
    if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() === pickedDate?.getTime()
    ) {
        return (
            <div className="grid place-items-center text-center text-xs bg-green-200 w-8 h-8 text-green-500 rounded-full shadow-green-300 shadow-lg dark:bg-cyan-800 dark:text-cyan-300 dark:shadow-cyan-800">
                {day.getDate()}
            </div>
        );
    } else if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() !== pickedDate?.getTime()
    ) {
        return (
            <div className="grid place-items-center text-center text-xs w-8 h-8 text-neutral-400 dark:text-cyan-700">
                {day.getDate()}
            </div>
        );
    } else if (day.getTime() === pickedDate?.getTime()) {
        return (
            <button className="text-center text-xs font-bold bg-green-500 text-green-100 rounded-full w-8 h-8 shadow-green-300 shadow-lg transition-all duration-200 dark:bg-cyan-500 dark:shadow-cyan-700 dark:text-cyan-900">
                {day.getDate()}
            </button>
        );
    } else {
        return (
            <button
                className="text-center text-xs w-8 h-8 hover:bg-green-200 transition-all duration-200 rounded-full dark:text-cyan-50 dark:hover:bg-cyan-700"
                onClick={() => onPickDate(day)}>
                {day.getDate()}
            </button>
        );
    }
};

export default Day;
