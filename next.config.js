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
        PUBLIC_URL: 'http://coworking-diplom.ru/',
    },
}
