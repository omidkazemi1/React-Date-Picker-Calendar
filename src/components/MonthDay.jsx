import React from "react";

const Days = ({ day, currentDate, pickedDate, onPickDate }) => {
    if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() === pickedDate?.getTime()
    ) {
        return (
            <div className="m-0.5 grid place-items-center text-center text-sm bg-blue-200 w-9 h-9 text-blue-500 rounded-full shadow-blue-300 shadow-lg font-light">
                {day.getDate()}
            </div>
        );
    } else if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() !== pickedDate?.getTime()
    ) {
        return (
            <div className="m-0.5 grid place-items-center text-center text-sm w-9 h-9 text-neutral-400 font-light">
                {day.getDate()}
            </div>
        );
    } else if (day.getTime() === pickedDate?.getTime()) {
        return (
            <button className="m-0.5 text-center text-sm bg-blue-500 text-blue-100 rounded-full w-9 h-9 shadow-blue-300 shadow-lg transition-all duration-100">
                {day.getDate()}
            </button>
        );
    } else {
        return (
            <button
                className="m-0.5 text-center text-sm w-9 h-9 hover:bg-blue-200 transition-all duration-100 rounded-full"
                onClick={() => onPickDate(day)}>
                {day.getDate()}
            </button>
        );
    }
};

export default Days;
