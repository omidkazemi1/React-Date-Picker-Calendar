import React from "react";

const Days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const WeekDays = () => {
    return (
        <div className="grid grid-cols-7 gap-0.5 mt-3">
            {Days.map(day => (
                <div
                    key={day}
                    className="text-center font-medium text-green-500 text-sm dark:text-cyan-600 w-9 h-9">
                    {day}
                </div>
            ))}
        </div>
    );
};

export default WeekDays;
