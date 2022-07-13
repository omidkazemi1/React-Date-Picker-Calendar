import React, { forwardRef, useState } from "react";
import Header from "./Header";
import WeekDays from "./WeekDays";
import MonthDays from "./MonthDays";
import { AnimatePresence, motion } from "framer-motion";

const Calendar = forwardRef(
    ({ open, pickedDate, onChangePickedDate, onClose }, ref) => {
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
            setTimeout(() => onClose(), 200);
        };

        const todayHandler = () => {
            const todayDate = new Date();
            todayDate.setHours(0, 0, 0, 0);

            todayDate.getTime() !== currentDate.getTime() &&
                setCurrentDate(todayDate);

            pickDateHandler(todayDate);
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
                        className="absolute my-2 w-max origin-top overflow-hidden rounded-xl bg-white p-3 shadow-lg dark:bg-slate-700 dark:shadow-2xl dark:shadow-cyan-900">
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
                        <div className="mt-3 flex items-center justify-center">
                            <button
                                className="text-sm font-medium text-green-500 dark:text-cyan-500"
                                onClick={todayHandler}>
                                Today
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

export default Calendar;
