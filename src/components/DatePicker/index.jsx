import React, { useState } from "react";
import Header from "./Header";
import WeekDays from "./WeekDays";
import MonthDays from "./MonthDays";

const DatePicker = () => {
    const [currentDate, setCurrentDate] = useState(() => {
        const date = new Date();
        date.toLocaleDateString("fa-IR");
        date.setHours(0, 0, 0, 0);
        return date;
    });
    const [pickedDate, setPickedDate] = useState(null);

    const nextMonthHanlder = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                currentDate.getDate()
            )
        );
    };

    const prevMonthHanlder = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                currentDate.getDate()
            )
        );
    };

    const pickDateHandler = date => {
        setPickedDate(new Date(date));
    };

    const todayHandler = () => {
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        setPickedDate(todayDate);

        todayDate.getTime() !== currentDate.getTime() &&
            setCurrentDate(todayDate);
    };

    return (
        <div className="overflow-hidden p-3 rounded-xl shadow-lg dark:bg-slate-700 ">
            <Header
                currentDate={currentDate}
                onNextMonth={nextMonthHanlder}
                onPrevMonth={prevMonthHanlder}
            />
            <WeekDays />
            <MonthDays
                currentDate={currentDate}
                pickedDate={pickedDate}
                pickDateHandler={pickDateHandler}
            />
            <div className="flex justify-center items-center mt-3">
                <button
                    className="text-green-500 dark:text-cyan-500 font-medium text-sm"
                    onClick={todayHandler}>
                    Today
                </button>
            </div>
        </div>
    );
};

export default DatePicker;
