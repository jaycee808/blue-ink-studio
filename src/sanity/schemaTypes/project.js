import { defineType, defineField } from 'sanity'

export default defineType ({
    name: 'project',
    title: 'Work',
    type: 'document',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'subheading', type: 'string' },
        { name: 'image', type: 'image' },
        { name: 'description', type: 'text' },
        { name: 'services', type: 'array', of: [{ type: 'string' }] },
        { name: 'tech', type: 'array', of: [{ type: 'string' }] },
        { name: 'url', type: 'url' }
    ]
})