import { extendTheme } from '@chakra-ui/react'
import { color } from 'framer-motion'

const theme = extendTheme({
  colors: {
    primary: {
      yellow: 'hsl(47, 88%, 63%)',
    },
    neutral: {
      gray: 'hsl(0, 0%, 50%)',
      black: 'hsl(0, 0%, 7%)',
    },
  },
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
})

export default theme
