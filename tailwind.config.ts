import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#2E4057',
          light: '#048BA8'
        },
        accent: {
          DEFAULT: '#FFA51F',
          hover: '#E08700'
        },
        text: {
          DEFAULT: '#F5F5F5',
          hover: '#ADADAD'
        },
        error: {
          DEFAULT: '#E01A4F'
        },
        success: {
          DEFAULT: '#78BC61'
        }
      }
    }
  },
  plugins: [],
}
export default config;
