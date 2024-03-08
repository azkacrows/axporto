/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'fira-code': ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [require('daisyui'), require('tailwindcss-debug-screens')],
    daisyui: {
        themes: [
            {
                ax: {
                    primary: '#C778DD',
                    neutral: '#ABB2BF',
                    'base-100': '#282C33',
                },
                id: {
                    primary: '#E4171E',
                    secondary: '#B40D1B',
                    neutral: '#FFFFFF',
                    'base-100': '#F2ECE9',
                },
            },
        ],
    },
};
