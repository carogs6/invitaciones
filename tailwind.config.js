/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'glitter': "url('/fondo-negro-brillo-desenfocado.jpg')",
        'fondo1': "url('/fondoInvitacion.jpg')",
        'fondo2': "url('/fondo2.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        cormorantGaramond: ['Cormorant Garamond', 'serif'],
        dancingScript: ['Dancing Script', 'cursive'],
        ephesis: ['Ephesis', 'cursive'],
        lora: ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}

