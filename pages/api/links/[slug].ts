import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug = req.query.slug.toString();
  const session = await getSession({ req });

  if (req.method === "GET" && session?.user) {
    const links = await prisma.short.findFirst({
      where: {
        slug: { equals: slug },
        creator: {
          email: {
            equals: session.user.email,
          },
        },
      },
    });
    res.status(200).json(links);
  }
  if (req.method === "DELETE" && session?.user) {
    const links = await prisma.short.deleteMany({
      where: {
        slug: slug,
        creator: { email: session.user.email },
      },
    });
    res.status(200).json("Link deleted successfully");
  }
}
