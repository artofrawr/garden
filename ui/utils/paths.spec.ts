import { join } from 'node:path'
import { defaultConfig } from './sidebar'
import { linkToPath, pathToLink } from './paths'

const MOCK_CONTENT = '/utils/__mocks__/docs'

describe('paths', () => {
  describe('linkToPath', () => {
    it('should translate a relative source directory path to an absolute path', () => {
      // linkToPath values
      const defaultPath = linkToPath('/garden', defaultConfig)
      const custom1Path = linkToPath('/', {
        documentRootPath: MOCK_CONTENT
      })
      const custom2Path = linkToPath('/content', {
        documentRootPath: MOCK_CONTENT
      })

      // expected values
      const defaultExpected = join(__dirname, '../content/garden')
      const custom1Expected = join(__dirname, '../', MOCK_CONTENT)
      const custom2Expected = join(__dirname, '../', MOCK_CONTENT, 'content')

      expect(defaultPath).toBe(defaultExpected)
      expect(custom1Path).toBe(custom1Expected)
      expect(custom2Path).toBe(custom2Expected)
    })
  })
  describe('pathToLink', () => {
    it('should translate an absolute source directory path to a sidebar link ', () => {
      // source directory path values
      const path1 = join(__dirname, '../content')
      const path2 = join(__dirname, '../content/garden')
      const path3 = join(__dirname, '../content/garden/')
      const path4 = join(__dirname, '../content/garden/index.md')
      const path5 = join(__dirname, '../content/garden/test.md')
      const path6 = join(__dirname, '../', MOCK_CONTENT)
      const path7 = join(__dirname, '../', MOCK_CONTENT, 'garden/test.md')

      const defaultConfig = { documentRootPath: '/content' }
      const mockConfig = { documentRootPath: MOCK_CONTENT }

      expect(pathToLink(path1, defaultConfig)).toBe('/')
      expect(pathToLink(path2, defaultConfig)).toBe('/garden')
      expect(pathToLink(path3, defaultConfig)).toBe('/garden')
      expect(pathToLink(path4, defaultConfig)).toBe('/garden')
      expect(pathToLink(path5, defaultConfig)).toBe('/garden/test')
      expect(pathToLink(path6, mockConfig)).toBe('/')
      expect(pathToLink(path7, mockConfig)).toBe('/garden/test')
    })
  })
})
