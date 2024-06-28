/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        noto: 'Noto Sans JP, sans-serif',
        hiragino: 'hiragino-kaku-gothic-pron, sans-serif;',
        din: 'din-2014, sans-serif;'
      },
      colors: {
        black: '#333333',
        red: '#FF0100',
        gray: '#888888',
        green: '#61C1BA',
        drawer_bg: '#555555',
        gray2: '#DADCE0',
        pink: '#FF7F7E',
        blue: '#1558D6'
      },
      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        26: '26px',
        27: '27px',
        28: '28px',
        29: '29px',
        30: '30px',
        32: '32px',
        33: '33px',
        34: '34px',
        35: '35px',
        36: '36px',
        37: '37px',
        38: '38px',
        39: '39px',
        40: '40px',
        41: '41px',
        42: '42px',
        43: '43px',
        44: '44px',
        45: '45px',
        46: '46px',
        47: '47px',
        48: '48px',
        49: '49px',
        50: '50px',
        52: '52px',
        54: '54px',
        56: '56px',
        58: '58px',
        60: '60px',
        62: '62px',
        64: '64px',
        66: '66px',
        68: '68px',
        70: '70px',
        72: '72px',
        74: '74px',
        76: '76px',
        78: '78px',
        80: '80px'
      },
      height: {
        inherit: 'inherit',
        '100vh': '100vh'
      },
      screens: {
        mlb: '900px'
      }
    }
  },
  plugins: []
}
