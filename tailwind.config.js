/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        background: "#1D2125",
        componentBg: "#374151",
        buttonBg: "#3B82F6",
        buttonCol: "#1D2125",
        font: "#8C9BAB",
        fontPlaceholder: "#929DAE",
        inoutRing: "#6789B9",
        hoverButton: "#1D4ED8",
        bgModal: "rgba(130, 128, 127, 0.4)",
        bgColumn: "#161A1D",
        bgIncident: "#22272B",
        bgCard: "#21272C",
        white: "#f9faeb"
      },
      backgroundImage: {
        'glitter': "url('/fondo-negro-brillo-desenfocado.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      cormorantGaramond: "'Cormorant Garamond', 'serif'",
      dancingScript: "'Dancing Script', 'cursive'",
      ephesis: "'Ephesis', 'cursive'",
      lora: "'Lora', 'serif'",
    },
  },
  plugins: [],
}

