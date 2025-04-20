import path from 'node:path'
import { SidebarUtilConfig } from '../types/sidebar'

/**
 * Turns a path relative to the source directory into an absolute path.
 *
 * @param {string} link - the sidebar link, relative to vitepress source directory
 * @param {SidebarUtilConfig} config - options specific for this sidebar
 * @returns {string} - the full path represenation of the link inside the vitepress source directory
 */
export function linkToPath(link: string, config: SidebarUtilConfig): string {
  const p = path.join(__dirname, '../../', config.documentRootPath, link)
  return p.replace(/\/+$/, '') // remove trailing slash
}

/**
 * Takes an absolute path to a folder or markdown file inside the source directory and turns
 * it into a relative link for the vitepress sidebar config.
 *
 * @param {string} path - the absolute path to some content in the source directory
 * @param {SidebarUtilConfig} config  - options specific for this sidebar
 * @returns {string} - the sidebar link
 */
export function pathToLink(path: string, config: SidebarUtilConfig) {
  const splitOn = config.documentRootPath.replace(/\/+$/, '') // remove trailing slash

  if (!path) {
    throw new Error('no path')
  }
  if (path.indexOf(splitOn) === -1) {
    throw new Error('config.documentRootPath not part of path')
  }

  const link = path
    .split(splitOn)[1] // remove path before source folder
    .replace(/\/index\.md$/, '') // remove /index.md
    .replace(/\.md$/, '') // remove markdown file extension
    .replace(/\/+$/, '') // remove trailing slash

  return link.replace(/\/+$/, '') || '/'
}
