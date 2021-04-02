import { useRouter } from "next/router";
import { useQuery } from "react-query";
import ky from "ky-universal";
import { Short } from ".prisma/client";

import { createUrl } from "helpers/createUrl";

import Layout from "@components/Layout";
import { Main } from "@components/Main";
import { Header, HeaderText } from "@components/Header";
import { Skeleton } from "@components/Skeleton";
import { BackButton } from "@components/BackButton";

const fetchShort = (slug: string): Promise<Short> =>
  ky.get(`/api/links/${slug}`).json();

export default function Manage() {
  const router = useRouter();
  const slug = (router.query.slug as string) || "";
  const { isLoading, isError, data } = useQuery(["shorts", slug], () =>
    fetchShort(slug),
  );
  return (
    <Layout>
      <Header>
        <BackButton href="/manage">Manage</BackButton>
        <HeaderText>
          {!data && isLoading && <Skeleton className="h-8 w-48 mb-1" />}
          {data && data.slug}
        </HeaderText>
      </Header>
      <Main>
        <div className="px-0 sm:px-2">
          <div className="mx-auto shadow-lg bg-white dark:bg-gray-900 p-4 rounded-xl w-full max-w-screen-md break-all">
            {!data && isLoading && (
              <div className="animate-pulse space-y-2">
                <Skeleton className="h-6 w-full max-w-md" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-56" />
              </div>
            )}
            {data && (
              <>
                <h1 className="text-xl">{data.url}</h1>
                <h2 className="text-lg font-mono my-2">
                  {createUrl(data.slug)}
                </h2>
                <p>Total clicks: {data.linkClicks || 0}</p>
              </>
            )}
          </div>
        </div>
      </Main>
    </Layout>
  );
}
