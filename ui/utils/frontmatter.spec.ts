import { join } from 'node:path'
import { defaultConfig } from './sidebar'
import { linkToPath, pathToLink } from './paths'
import { getOrderFromFrontmatter, getValueFromFrontmatter } from './frontmatter'

const MOCK_CONTENT = '/ui/utils/__mocks__/content'
const FRONTMATTER_FILEPATH = join(
  __dirname,
  '../../',
  MOCK_CONTENT,
  'knowledge/directory-a/first.md'
)

describe('frontmatter', () => {
  describe('getValueFromFrontmatter', () => {
    it('should get values from frontmatter', () => {
      const title = getValueFromFrontmatter(FRONTMATTER_FILEPATH, 'title', '')
      const list = getValueFromFrontmatter(FRONTMATTER_FILEPATH, 'list', [])
      const order = getValueFromFrontmatter(FRONTMATTER_FILEPATH, 'order', 0)

      expect(title).toBe('This is a title')
      expect(list).toStrictEqual(['list a', 'list b', 'list c'])
      expect(order).toBe(1)
    })
    it('should use fallback values if frontmatter not found', () => {
      const title = getValueFromFrontmatter(
        FRONTMATTER_FILEPATH,
        'doesntexist',
        'fallback'
      )
      const list = getValueFromFrontmatter(
        FRONTMATTER_FILEPATH,
        'doesntexist',
        [1, 2, 3]
      )
      const order = getValueFromFrontmatter(
        FRONTMATTER_FILEPATH,
        'doesntexist',
        10
      )

      expect(title).toBe('fallback')
      expect(list).toStrictEqual([1, 2, 3])
      expect(order).toBe(10)
    })
  })
  describe('getOrderFromFrontmatter', () => {
    it('should get the order from frontmatter', () => {
      const filePathWithoutOrder = join(
        __dirname,
        '../../',
        MOCK_CONTENT,
        'knowledge/index.md'
      )
      const order1 = getOrderFromFrontmatter(FRONTMATTER_FILEPATH, Infinity)
      const order2 = getOrderFromFrontmatter(filePathWithoutOrder, Infinity)
      expect(order1).toBe(1)
      expect(order2).toBe(Infinity)
    })
  })
})
