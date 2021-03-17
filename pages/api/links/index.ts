import prisma from "@lib/prisma";
import { customAlphabet } from "nanoid";
import nolookalikes from "nanoid-dictionary/nolookalikes";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (req.method === "GET" && session?.user) {
    const links = await prisma.short.findMany({
      where: {
        creator: {
          email: {
            equals: session.user.email,
          },
        },
      },
    });
    res.status(200).json({ links });
  } else if (req.method === "POST" && req.body.url) {
    let slug = generateSlug();
    // Check for slug collisions
    let collision = await checkCollision(slug);
    while (collision) {
      slug = generateSlug();
      collision = await checkCollision(slug);
    }

    const result = await prisma.short.create({
      data: {
        url: req.body.url,
        slug,
        creator: session
          ? {
              connect: {
                email: session.user.email || undefined,
              },
            }
          : undefined,
      },
    });

    res.status(200).json(result);
  } else {
    res.status(500).send("An error occured");
  }
};

function generateSlug() {
  return customAlphabet(nolookalikes, 8)();
}

async function checkCollision(slug: string) {
  return await prisma.short.findUnique({
    where: {
      slug: slug,
    },
  });
}
