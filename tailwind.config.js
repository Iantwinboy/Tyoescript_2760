/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        './index.html'
    ],
    theme: {
        fontFamily: {
            'babylonica': ['babylonica', 'cursive']
        },
        mytheme: {

            "primary": "#19287f",

            "secondary": "#b6e5ef",

            "accent": "#d2ccff",

            "neutral": "#1B202C",

            "base-100": "#F2F6F8",

            "info": "#96C9F8",

            "success": "#0E5D3B",

            "warning": "#D87F13",

            "error": "#E5361F",
        },
        extend: {},
    },
    plugins: [require("daisyui")],

}