import { defaultSEO } from "helpers/defaultSEO";
import { Provider } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "tailwindcss/tailwind.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
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
