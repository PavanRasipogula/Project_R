/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    main: '#130420', // Very dark violet
                    card: 'rgba(255, 255, 255, 0.03)',
                },
                primary: {
                    DEFAULT: '#6d28d9', // Violet 600
                    glow: '#A78bfa',
                },
                text: {
                    main: '#ffffff',
                    muted: '#e9d5ff', // Purple 200
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'neumeyer-sm': '5px 5px 10px #0b0213, -5px -5px 10px #1b062d',
                'neumeyer': '10px 10px 20px #0b0213, -10px -10px 20px #1b062d',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }
        },
    },
    plugins: [],
}
