export default {
    name: 'project',
    title: 'Work',
    type: 'document',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'image', type: 'image' },
        { name: 'description', type: 'text' },
        { name: 'tech', type: 'array', of: [{ type: 'string' }] },
        { name: 'url', type: 'url' }
    ]
}
