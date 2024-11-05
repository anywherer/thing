import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "untitled",
    description: "no description",
  },
  components: {
    callout: {
      note: "note",
      abstract: "abstract",
      info: "info",
      todo: "todo",
      tip: "tip",
      success: "success",
      question: "question",
      warning: "warning",
      failure: "failure",
      danger: "danger",
      bug: "bug",
      example: "example",
      quote: "quote",
    },
    backlinks: {
      title: "backlinks",
      noBacklinksFound: "no backlinks",
    },
    themeToggle: {
      lightMode: "light mode",
      darkMode: "dark mode",
    },
    explorer: {
      title: "explorer",
    },
    footer: {
      createdWith: "created with",
    },
    graph: {
      title: "graph view",
    },
    recentNotes: {
      title: "recent notes",
      seeRemainingMore: ({ remaining }) => `see ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `transclude of ${targetSlug}`,
      linkToOriginal: "link to original",
    },
    search: {
      title: "press [/] to search",
      searchBarPlaceholder: "looking for someone?",
    },
    tableOfContents: {
      title: "table of contents",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min read`,
    },
  },
  pages: {
    rss: {
      recentNotes: "recent notes",
      lastFewNotes: ({ count }) => `last ${count} notes`,
    },
    error: {
      title: "404",
      notFound: "what is everyone looking for?",
      home: "return home",
    },
    folderContent: {
      folder: "folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item in this folder" : `${count} items in this folder`,
    },
    tagContent: {
      tag: "tag",
      tagIndex: "tag index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation
