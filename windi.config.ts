import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],

  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      screens: {
        '<md': { max: '767px' },
      },
      colors: {
        // neutral: colors.trueGray,
        // amber: colors.amber,
        gray: colors.trueGray,
        sky: colors.sky,
        teal: colors.teal,
        gold: colors.amber,
        lime: colors.lime,
        fuschia: colors.fuchsia,
      },
    },
  },
  variants: {
    // extend: { filter: ["dark"], filterNone: ["dark"] },
    // extend: {
    // filter: ["dark"],
    // invert: ["dark"],
    // filterNone: ["dark"],
    // opacity: ["dark"]
    // }
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/forms'),
  ],
})
