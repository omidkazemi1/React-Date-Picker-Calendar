import React from "react";

const Days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const WeekDays = () => {
    return Days.map(day => (
        <div key={day} className="text-center font-medium">
            {day}
        </div>
    ));
};

export default WeekDays;
