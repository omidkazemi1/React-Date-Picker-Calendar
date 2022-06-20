import React from "react";

const Days = ({ day, currentDate, pickedDate, onPickDate }) => {
    if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() === pickedDate?.getTime()
    ) {
        return (
            <div className="grid place-items-center text-center text-xs bg-violet-200 w-8 h-8 text-violet-500 rounded-full shadow-violet-300 shadow-lg font-light">
                {day.getDate()}
            </div>
        );
    } else if (
        day.getMonth() !== currentDate.getMonth() &&
        day.getTime() !== pickedDate?.getTime()
    ) {
        return (
            <div className="grid place-items-center text-center text-xs w-8 h-8 text-neutral-400 font-light">
                {day.getDate()}
            </div>
        );
    } else if (day.getTime() === pickedDate?.getTime()) {
        return (
            <button className="text-center text-xs font-semibold bg-violet-500 text-violet-100 rounded-full w-8 h-8 shadow-violet-300 shadow-lg transition-all duration-100">
                {day.getDate()}
            </button>
        );
    } else {
        return (
            <button
                className="text-center text-xs w-8 h-8 hover:bg-violet-200 transition-all duration-100 rounded-full"
                onClick={() => onPickDate(day)}>
                {day.getDate()}
            </button>
        );
    }
};

export default Days;
