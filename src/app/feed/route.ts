import { compose } from '@/utils/common'
import { SITE_NAME, SITE_OWNER, SITE_URL } from '@/utils/env/client'
import { filterPublishedPosts, sortLatestPosts } from '@/utils/post'

import { allPosts } from 'contentlayer/generated'
import RSS from 'rss'

export function GET() {
  const posts = compose(filterPublishedPosts, sortLatestPosts)(allPosts)

  const rss = new RSS({
    title: SITE_NAME,
    description: 'Read rizki blog posts',
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed`,
    copyright: SITE_OWNER,
    language: 'en',
    pubDate: new Date('2023-07-24'),
  })

  const feed = posts.reduce((rss, post) => {
    rss.item({
      author: SITE_OWNER,
      title: post.title,
      guid: post.slug,
      categories: post.tags,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      date: new Date(post.publishedAt),
    })
    return rss
  }, rss)

  const response = new Response(feed.xml({ indent: true }), { status: 200, statusText: 'OK' })

  response.headers.set('Content-Type', 'application/xml; charset=utf-8')

  return response
}
