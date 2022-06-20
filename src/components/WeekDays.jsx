import React from "react";

const Days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const WeekDays = () => {
    return Days.map(day => (
        <div
            key={day}
            className="text-center font-medium text-violet-400 text-sm w-9 h-9">
            {day}
        </div>
    ));
};

export default WeekDays;
