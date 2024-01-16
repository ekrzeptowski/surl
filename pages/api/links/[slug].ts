import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug?.toString();
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "GET" && session?.user?.email) {
    const links = await prisma.short.findFirst({
      where: {
        slug: { equals: slug },
        creator: {
          email: {
            equals: session.user.email
          }
        }
      }
    });
    res.status(200).json(links);
  }
  if (req.method === "DELETE" && session?.user?.email) {
    const links = await prisma.short.deleteMany({
      where: {
        slug: slug,
        creator: { email: session.user.email }
      }
    });
    res.status(200).json("Link deleted successfully");
  }
}
