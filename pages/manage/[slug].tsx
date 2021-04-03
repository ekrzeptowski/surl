import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import ky from "ky-universal";
import { Short } from ".prisma/client";

import { createUrl } from "helpers/createUrl";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
import { format } from "date-fns";

import Layout from "@components/Layout";
import { Main } from "@components/Main";
import { Header, HeaderText } from "@components/Header";
import { Skeleton } from "@components/Skeleton";
import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { BiTrash } from "@react-icons/all-files/bi/BiTrash";

const fetchShort = (slug: string): Promise<Short> =>
  ky.get(`/api/links/${slug}`).json();

ReactModal.setAppElement("#__next");

export default function Manage() {
  const router = useRouter();
  const slug = (router.query.slug as string) || "";
  const { isLoading, isError, data } = useQuery(["shorts", slug], () =>
    fetchShort(slug),
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const deleteLink = () => {
    ky.delete(`/api/links/${slug}`).then((resp) => {
      closeModal();
      router.push("/manage");
    });
  };
  return (
    <Layout>
      <NextSeo title={data?.slug} />
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
              <div className="animate-pulse space-y-3.5">
                <Skeleton className="h-6 w-full max-w-md" />
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-10 w-36 mt-4 block" />
              </div>
            )}
            {data && (
              <>
                <h1 className="text-xl">{data.url}</h1>
                <h2 className="text-lg font-mono my-2">
                  {createUrl(data.slug)}
                </h2>
                <p>Total clicks: {data.linkClicks || 0}</p>
                <p>Creation date: {format(new Date(data.createdAt), "PPpp")}</p>
                <div className="mt-4">
                  <Button variant="caution" onClick={openModal}>
                    Remove link
                    <BiTrash size={"1.25em"} />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        <ReactModal
          isOpen={modalIsOpen}
          contentElement={(props: any, children) => (
            <motion.div
              key="modal-content"
              initial={{ opacity: 0.7, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              {...props}
            >
              {children}
            </motion.div>
          )}
          overlayClassName="fixed w-full h-full inset-0 bg-gray-200 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-60 z-10 flex items-center justify-center"
          className="bg-gray-50 dark:bg-gray-900 shadow-xl p-4 rounded-xl dark:text-gray-200 focus:outline-none border-gray-200 dark:border-gray-800 border max-w-screen-sm"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="flex justify-center">
              <BiTrash size={"2em"} className="text-red-500" />
            </div>
            <div className="sm:ml-3">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                Link removal
              </h3>
              <div className="mt-2 text-gray-500 dark:text-gray-200">
                Confirm removal of link:{" "}
                <code className="block break-all">{data?.url}</code>
              </div>
            </div>
          </div>
          <div className="mt-3 space-x-2 flex-1 flex justify-end">
            <Button onClick={closeModal}>Cancel</Button>
            <Button onClick={deleteLink} variant="caution">
              Delete
            </Button>
          </div>
        </ReactModal>
      </Main>
    </Layout>
  );
}
