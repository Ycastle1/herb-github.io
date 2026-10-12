import { getCollection, type CollectionEntry } from 'astro:content';

export const path = (value = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${value.replace(/^\//, '')}`;
export const postPath = (id: string) => path(`posts/${id.split('/').map(encodeURIComponent).join('/')}/`);
export const getPosts = async () => (await getCollection('posts', ({ data }) => !data.draft))
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id));
export const dateLabel = (date: Date) => new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Seoul',
}).format(date);
export const readingTime = (post: CollectionEntry<'posts'>) => Math.max(1, Math.ceil((post.body ?? '').split(/\s+/).length / 180));
