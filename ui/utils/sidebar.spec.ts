import { join } from 'node:path'
import { buildSidebar, defaultConfig } from './sidebar'
import { linkToPath, pathToLink } from './paths'

const MOCK_CONTENT = '/utils/__mocks__/docs'

describe('sidebar', () => {
  describe('buildSidebar', () => {
    it('should build a sidebar config', () => {
      const config = buildSidebar('/garden')
      // console.log(JSON.stringify(config, null, 2))
      expect(config.length).toBe(3)
    })
  })
})
