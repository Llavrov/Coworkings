module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        dangerouslyAllowSVG: true,
    },
    env: {
        PUBLIC_URL: 'https://llavrov.github.io/Coworkings/',
    },
}
