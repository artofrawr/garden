import fs from 'node:fs'
import { DefaultTheme } from 'vitepress'
import { SidebarUtilConfig } from '../types/sidebar'
import { linkToPath, pathToLink } from './paths'
import { resolve } from 'node:path'

export const defaultConfig: SidebarUtilConfig = {
  documentRootPath: '/content'
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
  return items
}

export const scanDir = (
  path: string,
  config: SidebarUtilConfig,
  level: number = 0
): DefaultTheme.SidebarItem[] => {
  let arr: any[] = []
  let res = fs
    .readdirSync(path)
    .filter((item) => item && String(item) !== '.DS_Store')
    .filter((item) => level > 0 || String(item) !== 'index.md')

  if (res) {
    arr = res.map((item) => {
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
