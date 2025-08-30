export default {
    name: 'packages',
    title: 'Packages',
    type: 'document',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'description', type: 'text' },
        { name: 'bestFor', type: 'string' },
        { name: 'packageItem', type: 'array', of: [{ type: 'string' }] },
    ]
}