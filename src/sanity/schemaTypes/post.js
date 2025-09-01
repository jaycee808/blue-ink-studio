import { defineType } from 'sanity'

export default defineType ({
    name: 'post',
    title: 'Articles',
    type: 'document',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'publishedAt', type: 'datetime' },
        { name: 'coverImage', type: 'image' },
        { name: 'content', type: 'array', of: [{ type: 'block' }] }
    ]
})