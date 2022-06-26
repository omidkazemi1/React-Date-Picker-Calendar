import React, { forwardRef } from "react";

const Input = forwardRef(({ placeholder, label, value, onFocus }, ref) => {
    return (
        <div className="flex flex-col">
            <label className="mb-1 font-medium">{label}</label>
            <input
                ref={ref}
                placeholder={placeholder}
                value={value}
                onFocus={onFocus}
                onChange={event => event.preventDefault()}
                className="w-64 rounded-md border border-slate-300 py-1 px-2 shadow-sm outline-none transition-all duration-75 hover:border-slate-400 focus:border-green-400 focus:shadow-green-300 dark:border-cyan-700 dark:bg-slate-900 dark:text-cyan-50 dark:focus:bg-slate-700"
            />
        </div>
    );
});

export default Input;
