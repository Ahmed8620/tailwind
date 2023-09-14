/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge:[
    './*.html'
  ],
  darkmode:false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend:{},
  },
  plugins: [],
}

