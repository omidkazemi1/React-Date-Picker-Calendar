import React, { forwardRef, useState } from "react";
import Header from "./Header";
import WeekDays from "./WeekDays";
import MonthDays from "./MonthDays";
import { AnimatePresence, motion } from "framer-motion";

const Calendar = forwardRef(({ open, pickedDate, onChangePickedDate }, ref) => {
    const [currentDate, setCurrentDate] = useState(() => {
        const date = new Date();
        date.toLocaleDateString("fa-IR");
        date.setHours(0, 0, 0, 0);
        return date;
    });

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
        onChangePickedDate(new Date(date));
    };

    const todayHandler = () => {
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        onChangePickedDate(todayDate);

        todayDate.getTime() !== currentDate.getTime() &&
            setCurrentDate(todayDate);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scaleY: 0.9 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{
                        opacity: 0,
                        scaleY: 0.5,
                        transition: { duration: 0.2 },
                    }}
                    className="absolute my-1.5 w-max origin-top overflow-hidden p-3 bg-white rounded-xl shadow-lg dark:bg-slate-700">
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
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export default Calendar;
