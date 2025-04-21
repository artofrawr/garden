import { readFileSync } from 'fs'
import matter from 'gray-matter'

export function getValueFromFrontmatter<T>(
  filePath: string,
  key: string,
  defaultValue: T
): T {
  try {
    const fileData = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileData)

    // Try for using gray-matter
    if (data?.[key]) {
      return data[key]
    }

    // Try manual parsing
    const lines = fileData.split('\n')
    let frontmatterStart = false

    for (let i = 0, len = lines.length; i < len; i += 1) {
      const str = lines[i].toString().replace('\r', '')

      if (/^---$/.test(str)) {
        frontmatterStart = true
      }
      if (new RegExp(`^${key}: (.*)`).test(str) && frontmatterStart) {
        return JSON.parse(str.replace(`${key}: `, '')) as T
      }
    }
  } catch (e) {
    return defaultValue
  }
  return defaultValue
}

export function getOrderFromFrontmatter(
  filePath: string,
  defaultOrder: number
): number {
  return parseFloat(
    getValueFromFrontmatter<string>(filePath, 'order', defaultOrder.toString())
  )
}
