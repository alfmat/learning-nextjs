/** @type {import('next').NextConfig} */

import tailwindForms from '@tailwindcss/forms';

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                pathname: '/img/**',
            }
        ]
    }, 
    // plugins: [
    //     tailwindForms,
    // ],
};

export default nextConfig;
