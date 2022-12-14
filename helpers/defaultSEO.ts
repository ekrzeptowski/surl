import { NextSeoProps } from "next-seo";

const defaultSEO: NextSeoProps = {
  titleTemplate: "%s | Teeny",
  defaultTitle: "Teeny",
  description: "An app made to shorten long links",
  canonical: `${process.env.NEXT_PUBLIC_ORIGIN}/`,

  openGraph: {
    url: `${process.env.NEXT_PUBLIC_ORIGIN}/`,
    title: "Teeny",
    description: "An app made to shorten long links",
    type: "website"
  }
};

export { defaultSEO };
