import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Hawiah - Universal Database Interface",
        short_name: "Hawiah",
        description: "The fastest Universal Database Interface for JavaScript/TypeScript.",
        start_url: "/",
        display: "standalone",
        background_color: "#020202",
        theme_color: "#14b8a6",
        icons: [
            {
                src: "/icon.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ]
    }
}
