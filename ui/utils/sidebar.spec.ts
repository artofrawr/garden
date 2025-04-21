import { buildSidebar } from './sidebar'

const MOCK_CONTENT = '/ui/utils/__mocks__/content'

describe('sidebar', () => {
  describe('buildSidebar', () => {
    it('should build a sidebar config', () => {
      const sidebar = buildSidebar('/knowledge', {
        documentRootPath: MOCK_CONTENT
      })
      expect(sidebar.length).toBe(3)
    })
    it('should allow manual sorting of filenames', () => {
      const sidebar = buildSidebar('/knowledge', {
        documentRootPath: MOCK_CONTENT,
        manualSortFilenames: ['directory-a', 'directory-c', 'directory-b']
      })
      expect(sidebar.length).toBe(3)
      expect(sidebar[0].text).toBe('Directory A')
      expect(sidebar[1].text).toBe('Directory C')
      expect(sidebar[2].text).toBe('Directory B')
    })
    it('should allow manual sorting of paths', () => {
      const sidebar = buildSidebar('/knowledge', {
        documentRootPath: MOCK_CONTENT,
        manualSortLinks: [
          '/knowledge/directory-a',
          '/knowledge/directory-c',
          '/knowledge/directory-b'
        ]
      })
      expect(sidebar.length).toBe(3)
      expect(sidebar[0].text).toBe('Directory A')
      expect(sidebar[1].text).toBe('Directory C')
      expect(sidebar[2].text).toBe('Directory B')
    })
    it('should sort markdown files by optional "order" frontmatter', () => {
      const sidebar = buildSidebar('/knowledge/directory-a', {
        documentRootPath: MOCK_CONTENT
      })
      expect(sidebar.length).toBe(3)
      expect(sidebar[0].text).toBe('First')
      expect(sidebar[1].text).toBe('Second')
      expect(sidebar[2].text).toBe('Last')
    })
  })
})
