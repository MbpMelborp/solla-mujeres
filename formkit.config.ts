import { es } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
// import { generateClasses } from '@formkit/tailwindcss';
import theme from '@/theme.js'

const config: DefaultConfigOptions = {
  locales: { es },
  locale: 'es',
  config: {
    classes: generateClasses(theme),
  },
}

export default config
