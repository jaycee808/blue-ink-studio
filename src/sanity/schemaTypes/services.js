export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'description', type: 'text' },
    ]
}