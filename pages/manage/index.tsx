import { Main } from "@components/Main";
import { Header, HeaderText } from "@components/Header";
import Layout from "@components/Layout";
import { useSession } from "next-auth/client";
import { useQuery } from "react-query";
import ky from "ky-universal";
import { Short } from ".prisma/client";
import { List, ListItem } from "@components/List";
import Link from "next/link";

import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import CopyToClipboard from "react-copy-to-clipboard";
import { createUrl } from "helpers/createUrl";
import { BackButton } from "@components/BackButton";
import { NextSeo } from "next-seo";
const fetchShorts = (): Promise<Short[]> => ky.get("/api/links").json();

export default function Manage() {
  const [session, loading] = useSession();
  const { isLoading, isError, data } = useQuery("shorts", fetchShorts);

  if (!session && !loading) {
    return (
      <Layout>
        <Header>
          <HeaderText>Sign in to continue</HeaderText>
        </Header>
        <Main></Main>
      </Layout>
    );
  }

  return (
    <Layout>
      <NextSeo title="Manage your URLs" />
      {!loading && (
        <Header>
          <BackButton href="/">New link</BackButton>
          <HeaderText>Manage</HeaderText>
        </Header>
      )}
      <Main>
        {!loading && (
          <List>
            {data &&
              data.map((cur) => (
                <ListItem key={cur.slug}>
                  <CopyToClipboard text={createUrl(cur.slug)}>
                    <div className="flex py-4 cursor-pointer group items-center font-bold font-mono mr-4 flex-shrink-0">
                      {cur.slug}
                      <BiCopy className="transition-opacity opacity-0 group-hover:opacity-100" />
                    </div>
                  </CopyToClipboard>
                  <Link href={`/manage/${cur.slug}`}>
                    <a className="py-4 flex-1">{cur.url}</a>
                  </Link>
                </ListItem>
              ))}
          </List>
        )}
      </Main>
    </Layout>
  );
}
