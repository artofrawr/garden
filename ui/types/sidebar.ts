export type SidebarUtilConfig = {
  documentRootPath: string
  //GROUPING
  collapse?: boolean
  collapsibleDepth?: number
  collapsedDepth?: number
  // STYLING MENU TITLE
  hyphenToSpace?: boolean
  capitalize?: boolean
  removeLeadingNumbers?: boolean
  // SORTING

  // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
  // sortFolderTo: null,
  // sortMenusByName: false,
  // sortMenusByFileDatePrefix: false,
  // sortMenusByFrontmatterOrder: false,
  // frontmatterOrderDefaultValue: 0,
  // sortMenusByFrontmatterDate: false,
  // sortMenusOrderByDescending: false,
  // sortMenusOrderNumericallyFromTitle: false,
  // DEBUG
  debugPrint?: boolean
}
