module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize:{
      '5xs': '.5rem',
      '4xs': '.6rem',
      '3xs': '.65rem',
      '2xs': '.7rem',
      'xs': '.75rem',
      'megasmall': '.84rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.1em',
      widest: '.2em',
    },
    extend: {
      
      maxWidth:{
        'xl': '36rem',
        '2xl': '42rem',
        '11xl': '112rem',
        '1/2': '50%',
        '96': '24rem',
      },
      fontFamily: {
        'sans': 'SB,MBP,Helvetica Neue,Helvetica,Arial,sans',
      },
      colors: {
        'azukired': '#c03540',
        'olive': '#ebe7e0'
      },
      spacing: {
        '2xs': '0.7rem',
      },
      dropShadow: {
        'me': [
          '0 1px 1px hsl(0deg 0% 0% / 8%)', 
          '0 2px 2px hsl(0deg 0% 0% / 8%)', 
          '0 4px 4px hsl(0deg 0% 0% / 8%)', 
          '0 8px 8px hsl(0deg 0% 0% / 8%)', 
          '0 16px 16px hsl(0deg 0% 0% / 8%)'
        ],
      },
      padding: {
        '26': '6.5rem',
      }
    },
  },
  plugins: [],
}
