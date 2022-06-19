import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import MonthDay from "./MonthDay";
import WeekDays from "./WeekDays";

const DatePicker = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [monthDays, setMonthDays] = useState([]);
    const [pickedDate, setPickedDate] = useState(null);

    const getMonthDays = useCallback(() => {
        const date = new Date(currentDate);
        date.setHours(0, 0, 0, 0);
        date.setDate(1);
        date.setDate(-date.getDay() + 1);

        const days = [];
        const prevMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            1
        ).getMonth();
        const nextMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            1
        ).getMonth();
        const currentMonth = currentDate.getMonth();

        while (
            (date.getMonth() === currentMonth ||
                date.getMonth() === prevMonth ||
                date.getMonth() === nextMonth) &&
            days.length <= 41
        ) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return days;
    }, [currentDate]);

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
        setCurrentDate(todayDate);
    };

    useEffect(() => {
        setMonthDays(() => getMonthDays());
    }, [getMonthDays]);

    return (
        <div className="p-5 rounded-xl shadow-lg shadow-blue-100 bg-blue-50">
            <Header
                currentDate={currentDate}
                onNextMonth={nextMonthHanlder}
                onPrevMonth={prevMonthHanlder}
            />
            <div className="grid grid-cols-7 my-3">
                <WeekDays />
                {monthDays.map(day => (
                    <MonthDay
                        key={day}
                        day={day}
                        currentDate={currentDate}
                        pickedDate={pickedDate}
                        onPickDate={pickDateHandler}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center">
                <button className="text-blue-500" onClick={todayHandler}>
                    Today
                </button>
            </div>
        </div>
    );
};

export default DatePicker;
