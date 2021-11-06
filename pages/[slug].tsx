import prisma from "@lib/prisma";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

const Redirector = () => <></>;

export default Redirector;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { slug } = context?.params as Params;

  const urlObject =
    slug.length === 8 &&
    (await prisma.short.update({
      where: {
        slug,
      },
      data: {
        linkClicks: { increment: 1 },
      },
    }));

  if (urlObject) {
    return {
      redirect: {
        permanent: false,
        destination: urlObject?.url || "/",
      },
    };
  }

  return { props: {} };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}
