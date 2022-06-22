/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                barlow: "'Barlow', sans-serif;",
            },
        },
    },
    plugins: [],
};
