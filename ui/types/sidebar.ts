export type SidebarUtilConfig = {
  documentRootPath: string
  // STYLING MENU TITLE
  hyphenToSpace?: boolean
  capitalize?: boolean
  removeLeadingNumbers?: boolean
  // SORTING
  manualSortFilenames?: string[]
  manualSortLinks?: string[]
  // DEBUG
  debugPrint?: boolean
}
