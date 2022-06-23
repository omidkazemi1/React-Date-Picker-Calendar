import React, { forwardRef } from "react";

const Input = forwardRef(({ placeholder, value, onFocus }, ref) => {
    return (
        <input
            ref={ref}
            placeholder={placeholder}
            value={value}
            onFocus={onFocus}
            onChange={event => event.preventDefault()}
            className="w-64 py-1 px-2 rounded-md outline-none border-2 transition-all duration-75 border-green-500 focus:bg-green-50 dark:bg-slate-900 dark:border-cyan-700 dark:text-cyan-50 dark:focus:bg-slate-700"
        />
    );
});

export default Input;
