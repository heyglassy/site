/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#020C00",
            },
        },
        fontFamily: {
            serif: ["Quando", "ui-serif", "Georgia"],
        },
        animation: {
            "spin-slow": "spin 20s linear infinite",
        },
    },
    plugins: [],
};