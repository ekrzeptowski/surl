import { NextSeoProps } from "next-seo";

const defaultSEO: NextSeoProps = {
  titleTemplate: "%s | ShortURL",
  defaultTitle: "ShortURL",
  description: "An app made to shorten long links",
  canonical: `${process.env.NEXT_PUBLIC_ORIGIN}/`,

  openGraph: {
    url: `${process.env.NEXT_PUBLIC_ORIGIN}/`,
    title: "ShortURL",
    description: "An app made to shorten long links",
    type: "website",
  },
};

export { defaultSEO };
