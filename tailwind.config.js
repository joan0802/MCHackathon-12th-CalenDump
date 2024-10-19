/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            textStrokeWidth: {
                '1': '1px',
                '2': '2px',
                '3': '3px',
            },
            textStrokeColor: {
                'black': '#000',
                'white': '#fff',
                'red': '#f00',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                serif: ['"Noto Serif"', 'serif'],
                sans: ['"Noto Sans TC"', 'sans-serif']
            },
        }
    },
    plugins: [require("tailwindcss-animate"),
    function ({ addUtilities }) {
        addUtilities({
            '.text-stroke-1': {
                '-webkit-text-stroke-width': '1px',
            },
            '.text-stroke-2': {
                '-webkit-text-stroke-width': '2px',
            },
            '.text-stroke-5': {
                '-webkit-text-stroke-width': '5px',
            },
            '.text-stroke-10': {
                '-webkit-text-stroke-width': '10px',
            },
            '.text-stroke-green': {
                '-webkit-text-stroke-color': '#13492f',
            },
            '.text-stroke-white': {
                '-webkit-text-stroke-color': '#fff',
            },
        });
    },
    ],
};
