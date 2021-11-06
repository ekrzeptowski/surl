import { useEffect } from "react";
import { defaultSEO } from "helpers/defaultSEO";
import { Provider } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { init } from "@socialgouv/matomo-next";

import "tailwindcss/tailwind.css";

const queryClient = new QueryClient();

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init({ url: MATOMO_URL || "", siteId: MATOMO_SITE_ID || "" });
  }, []);
  
  return (
    <Provider session={pageProps.session}>
      <DefaultSeo {...defaultSEO} />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
