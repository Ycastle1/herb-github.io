import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { getPosts, postPath } from '../lib/posts';
export async function GET(context: APIContext) {
  return rss({ title: SITE.title, description: SITE.description, site: context.site!,
    items: (await getPosts()).map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.date, link: postPath(post.id) })),
    customData: '<language>ko-kr</language>',
  });
}
