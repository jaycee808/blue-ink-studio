import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        // Title & Tagline
        defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
        }),
        defineField({
        name: 'tagline',
        title: 'Tagline',
        type: 'string',
        }),
        defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (Rule) => Rule.required(),
        }),

        // Overview
        defineField({
        name: 'overview',
        title: 'Overview',
        type: 'object',
        fields: [
            defineField({ name: 'context', title: 'Context', type: 'text' }),
            defineField({ name: 'goal', title: 'Goal', type: 'text' }),
            defineField({ name: 'myRole', title: 'My Role', type: 'text' }),
        ],
        }),

        // Objectives & Strategy
        defineField({
        name: 'objectivesStrategy',
        title: 'Objectives & Strategy',
        type: 'object',
        fields: [
            defineField({
            name: 'objectives',
            title: 'Objectives',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
            name: 'targetAudience',
            title: 'Target Audience',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
        ],
        }),

        // Brand Direction
        defineField({
        name: 'brandDirection',
        title: 'Brand Direction',
        type: 'object',
        fields: [
            defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
            }),
            defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            }),
            defineField({
            name: 'colourPalette',
            title: 'Colour Palette',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
            name: 'typography',
            title: 'Typography',
            type: 'object',
            fields: [
                defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
                }),
                defineField({
                name: 'fonts',
                title: 'Fonts',
                type: 'array',
                of: [
                    defineArrayMember({
                    type: 'object',
                    name: 'fontMap',
                    title: 'Font Mapping',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'font', title: 'Font', type: 'string' }),
                    ],
                    preview: {
                        select: { title: 'title', font: 'font' },
                        prepare: ({ title, font }) => ({
                        title: title || 'Untitled',
                        subtitle: font || 'No font set',
                        }),
                    },
                    }),
                ],
                }),
            ],
            }),
            defineField({
            name: 'inspiration',
            title: 'Inspiration',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
        ],
        }),

        // Design Process
        defineField({
        name: 'designProcess',
        title: 'Design Process',
        type: 'object',
        fields: [
            defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
            name: 'keyDesignDecisions',
            title: 'Key Design Decisions',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
        ],
        }),

        // Development Process
        defineField({
        name: 'developmentProcess',
        title: 'Development Process',
        type: 'object',
        fields: [
            defineField({
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
            name: 'featuresBuilt',
            title: 'Features Built',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
            name: 'challengesSolved',
            title: 'Challenges Solved',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            }),
        ],
        }),

        // Final Outcome
        defineField({
        name: 'finalOutcome',
        title: 'Final Outcome',
        type: 'object',
        fields: [
            defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            }),
            defineField({
            name: 'images',
            title: 'Images of Pages',
            type: 'array',
            of: [
                defineArrayMember({
                type: 'image',
                options: { hotspot: true },
                }),
            ],
            }),
            defineField({
            name: 'link',
            title: 'Link to Site',
            type: 'url',
            }),
        ],
        }),

        // Reflection
        defineField({
        name: 'reflection',
        title: 'Reflection',
        type: 'object',
        fields: [
            defineField({
            name: 'learnings',
            title: 'Learnings',
            type: 'text',
            }),
            defineField({
            name: 'improvements',
            title: 'What I’d Improve',
            type: 'text',
            }),
        ],
        }),
    ],
})
