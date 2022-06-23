import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ReactComponent as LeftArrow } from "./../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "./../../assets/icons/arrow-right.svg";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const variants = {
    enter: { opacity: 0, y: -10, rotateX: "150deg" },
    center: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -10, rotateX: "-150deg" },
};

const Header = ({ currentDate, onNextMonth, onPrevMonth }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="px-2 relative h-7">
                <AnimatePresence initial={false}>
                    <motion.span
                        key={currentDate.getMonth()}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="font-semibold absolute dark:text-cyan-50">
                        {months[currentDate.getMonth()]}
                    </motion.span>
                    <motion.span
                        key={currentDate.getFullYear()}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ delay: 0.1 }}
                        className="font-light absolute left-10 top-0 dark:text-cyan-50">
                        {currentDate.getFullYear()}
                    </motion.span>
                </AnimatePresence>
            </div>

            <div className="flex">
                <button className="grid place-items-center w-8 h-8 hover:bg-green-200 transition-all duration-300 rounded-full dark:text-cyan-50 dark:hover:bg-cyan-700">
                    <LeftArrow onClick={onPrevMonth} />
                </button>

                <button
                    className="grid place-items-center w-8 h-8 hover:bg-green-200 transition-all duration-300 rounded-full dark:text-cyan-50 dark:hover:bg-cyan-700"
                    onClick={onNextMonth}>
                    <RightArrow />
                </button>
            </div>
        </div>
    );
};

export default Header;
