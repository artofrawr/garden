import { defineConfig } from 'vitepress'
import { buildSidebar } from '../ui/utils/sidebar'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  // VitePress's options here...
  srcDir: './content',
  vite: { publicDir: '../ui/static' },
  lastUpdated: true,
  cleanUrls: true,

  title: 'Jens Fischer',
  description: 'My Digital Garden',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: false,
      next: false
    },

    logo: { src: '/logo.svg', width: 24, height: 24 },

    nav: [
      { text: 'Knowledge', link: '/knowledge/', activeMatch: '/knowledge/' },
      { text: 'Demos', link: '/demos/', activeMatch: '/demos/' },
      { text: 'About', link: '/about/' }
    ],

    sidebar: {
      '/knowledge/': buildSidebar('knowledge', {
        manualSortLinks: [
          '/knowledge/engineering',
          '/knowledge/business',
          '/knowledge/misc'
        ]
      })
    },

    search: {
      provider: 'local'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/artofrawr' }]
  }
})
