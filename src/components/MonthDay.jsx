import React from "react";

const Days = ({ day, currentDate, pickedDate, onPickDate }) => {
    if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() === pickedDate?.getTime()
    ) {
        return (
            <div className="grid place-items-center text-center bg-blue-200 w-12 h-12 text-blue-500 rounded-full shadow-blue-300 shadow-lg font-light">
                {day.getDate()}
            </div>
        );
    } else if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() !== pickedDate?.getTime()
    ) {
        return (
            <div className="grid place-items-center text-center w-12 h-12 text-neutral-400 font-light">
                {day.getDate()}
            </div>
        );
    } else if (day.getTime() === pickedDate?.getTime()) {
        return (
            <button className="text-center bg-blue-500 text-blue-100 rounded-full w-12 h-12 shadow-blue-300 shadow-lg transition-all duration-300">
                {day.getDate()}
            </button>
        );
    } else {
        return (
            <button
                className="text-center w-12 h-12 hover:bg-blue-200 transition-all duration-300 rounded-full"
                onClick={() => onPickDate(day)}>
                {day.getDate()}
            </button>
        );
    }
};

export default Days;
