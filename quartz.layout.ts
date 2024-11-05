import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.Search(),
  ],
  afterBody: [
    Component.RecentNotes({
      title: "also thinking about",
      limit: 5,
      showTags: false,
      linkToMore: "/tags",
    }),
  ],
  footer: Component.Footer({
    links: {
      // "♡ somewherer ♡": "https://github.com/somewherer",
    },
  }),
}


export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 1.5,
        repelForce: 2,
        centerForce: 0.3,
        linkDistance: 20,
        fontSize: 0.6,
        opacityScale: 5,
        removeTags: [],
        showTags: true,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: 4,
        scale: 1.6,
        repelForce: 2,
        centerForce: 0.8,
        linkDistance: 40,
        fontSize: 0.45,
        opacityScale: 5,
        removeTags: [],
        showTags: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}


export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  right: [],
}
