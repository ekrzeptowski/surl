module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_ORIGIN,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      { userAgent: "*", disallow: "/api/*" },
    ],
  },
};
