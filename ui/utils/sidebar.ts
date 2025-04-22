import fs from 'node:fs'
import { DefaultTheme, SiteConfig } from 'vitepress'
import { SidebarUtilConfig } from '../types/sidebar'
import { linkToPath, pathToLink } from './paths'
import { resolve } from 'node:path'
import { getOrderFromFrontmatter } from './frontmatter'
import type { Plugin, ViteDevServer } from 'vite'

export const defaultConfig: SidebarUtilConfig = {
  documentRootPath: '/content'
}

export function sidebarPlugin(): Plugin {
  return {
    name: 'vite-plugin-vitepress-sidebar',
    configureServer({ watcher, restart }: ViteDevServer) {
      const fsWatcher = watcher.add('*.md')
      fsWatcher.on('all', async (event, path) => {
        if (event !== 'change') {
          console.log(`${event} ${path}`)
          try {
            await restart()
            console.log('update sidebar...')
          } catch {
            console.log(`${event} ${path}`)
            console.log('update sidebar failed')
          }
        }
      })
    },
    config(config) {
      console.log(config)
      // create sidebar data and insert
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion, @typescript-eslint/prefer-destructuring
      const { themeConfig } = (config as { vitepress: SiteConfig }).vitepress
        .site
      themeConfig.sidebar = {
        '/knowledge/': buildSidebar('knowledge', {
          manualSortLinks: [
            '/knowledge/engineering',
            '/knowledge/business',
            '/knowledge/misc'
          ]
        })
      }
      console.log('injected sidebar data successfully')
      return config
    }
  }
}

/**
 * Dynamically builds a vitepress sidebar configuration based on a folder's contents.
 *
 * @param {string} dir - the relative path to the directory inside the vitepress source folder
 * @param {SidebarUtilConfig} config  - options specific for this sidebar
 * @returns {DefaultTheme.SidebarItem[]} - the vitepress sidebar config
 */
export const buildSidebar = (
  dir: string,
  options: Partial<SidebarUtilConfig> = {}
): DefaultTheme.SidebarItem[] => {
  const config: SidebarUtilConfig = {
    ...defaultConfig,
    ...options
  }

  const path = linkToPath(dir, config)
  const items = scanDir(path, config)

  if (config.debugPrint) {
    console.log('sidebar')
    console.log('dir', dir)
    console.log('options')
    console.log(items)
  }

  return items
}

export const scanDir = (
  path: string,
  config: SidebarUtilConfig,
  level: number = 0
): DefaultTheme.SidebarItem[] => {
  let arr: any[] = []
  let directoryFiles = fs
    .readdirSync(path)
    .filter((item) => item && String(item) !== '.DS_Store')
    .filter((item) => level > 0 || String(item) !== 'index.md')

  // sorting by frontmatter
  const markdownFiles = directoryFiles.filter((x) => x.endsWith('.md'))
  const sortedByOrder = markdownFiles
    .map((x) => ({
      filename: x,
      order: getOrderFromFrontmatter(resolve(path, x), Infinity)
    }))
    .filter((x) => x.order !== Infinity)
    .sort((a, b) => a.order - b.order)
    .map((x) => x.filename)
  const remaining = directoryFiles.filter((x) => !sortedByOrder.includes(x))

  directoryFiles = [...sortedByOrder, ...remaining]

  // manual sorting by filenames
  if (config.manualSortFilenames) {
    const needSortItem = directoryFiles.filter(
      (x) => config.manualSortFilenames?.indexOf(x) !== -1
    )
    const remainItem = directoryFiles.filter(
      (x) => config.manualSortFilenames?.indexOf(x) === -1
    )

    needSortItem.sort(
      (a, b) =>
        config.manualSortFilenames!.indexOf(a) -
        config.manualSortFilenames!.indexOf(b)
    )

    directoryFiles = [...needSortItem, ...remainItem]
  }

  // manual sorting by paths
  if (config.manualSortLinks) {
    const filesWithLinks = directoryFiles.map((x) => ({
      file: x,
      link: pathToLink(resolve(path, x), config)
    }))

    const needSortItem = filesWithLinks.filter(
      (x) => config.manualSortLinks?.indexOf(x.link) !== -1
    )
    const remainItem = filesWithLinks.filter(
      (x) => config.manualSortLinks?.indexOf(x.link) === -1
    )

    needSortItem.sort(
      (a, b) =>
        config.manualSortLinks!.indexOf(a.link) -
        config.manualSortLinks!.indexOf(b.link)
    )

    directoryFiles = [
      ...needSortItem.map((x) => x.file),
      ...remainItem.map((x) => x.file)
    ]
  }

  if (directoryFiles) {
    arr = directoryFiles.map((item) => {
      if (String(item).endsWith('.md')) {
        return {
          text: nameItem(String(item).split('.')[0], config),
          link: resolve(path, item)
        }
      } else {
        return {
          text: nameItem(String(item).split('.')[0], config),
          items: scanDir(resolve(path, item), config, level + 1),
          ...(level > 0 ? { collapsed: true } : {})
        }
      }
    })
    arr = arr.map((item) => {
      if (item.link) {
        item.link = pathToLink(item.link, config)
      }
      return item
    })
    return arr
  } else {
    console.warn(`no content found: ${path}`)
  }
  return []
}

export const nameItem = (str: string, config: SidebarUtilConfig) => {
  // remove leading numbers used for sorting
  if (config.removeLeadingNumbers !== false) {
    str = str.replace(/^[0-9]+/g, '')
  }
  // split filename into array of individual words
  const delimiters = config.hyphenToSpace === false ? ' ' : /[ -]/
  const words = str
    .split(delimiters)
    .filter(Boolean)
    .map((word) => {
      if (config.capitalize === false) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })

  return words.join(' ')
}
