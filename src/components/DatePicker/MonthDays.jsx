import React, { useCallback, useMemo } from "react";
import Day from "./Day";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import usePrevious from "../../hooks/usePrevious";

const variants = {
    enter: ({ direction, width }) => ({
        x: direction * width * 1.1,
        opacity: 0,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: ({ direction, width }) => ({
        x: direction * -width * 1.1,
        opacity: 0,
    }),
};

const MonthDays = ({ currentDate, pickedDate, pickDateHandler }) => {
    const [ref, { width }] = useMeasure();
    const prev = usePrevious(currentDate.getTime());
    const direction = currentDate > prev ? 1 : -1;

    const getMonthDays = useCallback(() => {
        const date = new Date(currentDate);
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

    const monthDays = useMemo(() => getMonthDays(), [getMonthDays]);

    return (
        <div className="relative" style={{ height: 202 }}>
            <AnimatePresence initial={false} custom={{ direction, width }}>
                <motion.div
                    key={currentDate.getTime()}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={{ direction, width }}
                    transition={{ duration: 0.5 }}
                    className="absolute h-full w-full">
                    <div
                        ref={ref}
                        className="grid grid-cols-7 grid-rows-6 gap-0.5">
                        {monthDays.map(day => (
                            <Day
                                key={day}
                                day={day}
                                currentDate={currentDate}
                                pickedDate={pickedDate}
                                onPickDate={pickDateHandler}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MonthDays;
