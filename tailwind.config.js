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
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                ax: {
                    primary: '#C778DD',
                    secondary: '#FFFFFF',
                    'secondary-content': '#8D99AE',
                    neutral: '#ABB2BF',
                    'base-100': '#222627',
                    accent: '#FFFFFF',
                    success: '#ABB2BF',
                    'success-content': '#ABB2BF',
                },
                id: {
                    primary: '#E4171E',
                    secondary: '#8D99AE',
                    'secondary-content': '#ABB2BF',
                    neutral: '#FFFFFF',
                    'base-100': '#EDF2F4',
                    accent: '#000000',
                    success: '#8D99AE',
                    'success-content': '#2B2D42',
                },
            },
        ],
    },
};
