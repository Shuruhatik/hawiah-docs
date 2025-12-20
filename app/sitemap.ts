import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hawiah.js.org'

    // List of all documentation sections from sidebar-navigation.json would be ideal
    // For now, let's add the main ones
    const docs = [
        '',
        '#installation',
        '#quick-start',
        '#drivers',
        '#api-reference',
        '#benchmarks',
    ].map((route) => ({
        url: `${baseUrl}/docs${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...docs,
    ]
}
