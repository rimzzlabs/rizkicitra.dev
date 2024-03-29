import { PostList } from '@/components/post/post-list'

import { compose } from '@/utils/common'
import { createMetadata } from '@/utils/create-metadata'
import { SITE_NAME, SITE_OWNER, TWITTER_ID, TWITTER_USERNAME } from '@/utils/env/client'
import { filterPublishedPosts, sortLatestPosts } from '@/utils/post'

import { OG } from '@/constants/seo'
import { MainLayout } from '@/layouts'

import { allPosts } from 'contentlayer/generated'

export const metadata = createMetadata({
  title: 'Blog',
  templateTitle: SITE_NAME,
  description: `My personal blog is a place where I share my experiences, knowledge, my hobbies, and ideas on a variety of topics`,
  creator: 'Rizki Maulana Citra',
  canonical: 'blog',
  openGraph: {
    images: OG.static,
    type: 'website',
    title: SITE_OWNER,
    siteName: SITE_NAME,
    description: `Software engineer frontend. I craft fascinating and intuitive user interfaces.`,
  },
  twitter: {
    card: 'summary_large_image',
    description: `Software engineer frontend. I craft fascinating and intuitive user interfaces.`,
    creator: TWITTER_USERNAME,
    creatorId: TWITTER_ID,
    siteId: TWITTER_ID,
    title: SITE_OWNER,
    images: [OG.static],
  },
})

export default function BlogPage() {
  const posts = compose(filterPublishedPosts, sortLatestPosts)(allPosts)

  return (
    <MainLayout className='pt-16'>
      <section className='mb-8'>
        <h1 className='title mb-8'>Blog</h1>
        <p className='mb-2.5'>
          You&apos;ll find me exploring a variety of interesting topics, from my career development,
          programming and technologies to trending topics of interest at the time.
        </p>
        <p>
          All posts on my blog are my own and do not represent any particular organization; feel
          free to reads.
        </p>
      </section>

      <PostList posts={posts} className='mt-4 mb-8' headingLevel='h2' />
    </MainLayout>
  )
}
