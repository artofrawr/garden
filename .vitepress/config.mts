import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const sidebarGarden = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Engineering',
      items: [
        {
          text: 'LeetCode',
          collapsed: true,
          base: '/garden/engineering/leetcode/',
          items: [
            { text: 'Basics', link: 'basics' },
            { text: 'Patterns', link: 'patterns' }
          ]
        },
        {
          text: 'System Design',
          collapsed: true,
          base: '/garden/engineering/system-design/',
          items: [
            {
              text: 'Basics',
              collapsed: true,
              base: '/garden/engineering/system-design/basics/',
              items: [{ text: 'Framework', link: 'framework' }]
            },
            {
              text: 'Examples',
              collapsed: true,
              base: '/garden/engineering/system-design/examples/',
              items: [{ text: 'URL Shortener', link: 'url-shortener' }]
            }
          ]
        }
      ]
    }
  ]
}

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
      { text: 'Digital Garden', link: '/garden', activeMatch: '/garden' },
      { text: 'Demos', link: '/demos', activeMatch: '/demos' },
      { text: 'About', link: '/about' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: sidebarGarden(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/artofrawr' }]
  }
})
