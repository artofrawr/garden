import { defineConfig } from 'vitepress'
import { buildSidebar } from '../utils/sidebar'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  // VitePress's options here...
  srcDir: './content',
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
      { text: 'Digital Garden', link: '/garden/', activeMatch: '/garden/' },
      { text: 'Demos', link: '/demos/', activeMatch: '/demos/' },
      { text: 'About', link: '/about/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/garden/': buildSidebar('garden')
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/artofrawr' }]
  }
})
