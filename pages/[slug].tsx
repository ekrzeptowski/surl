import prisma from "@lib/prisma";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";

const Redirector = () => <></>;

export default Redirector;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { slug } = context?.params as Params;

  const urlObject = await prisma.short.update({
    where: {
      slug,
    },
    data: {
      linkClicks: { increment: 1 },
    },
  });
  console.log(urlObject);

  return { redirect: { permanent: false, destination: urlObject?.url || "/" } };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}
