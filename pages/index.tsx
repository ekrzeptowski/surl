import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn, useSession } from "next-auth/client";
import { Short } from ".prisma/client";
import ky from "ky-universal";

import Layout from "@components/Layout";
import { Input } from "@components/Form/Input";
import { Submit } from "@components/Form/Submit";

export default function Home() {
  const [session, loading] = useSession();
  const { register, handleSubmit, errors, reset } = useForm<FormData>();

  const [slug, setSlug] = useState<string | null>(null);

  const shortenLink = handleSubmit(async ({ url }: FormData) => {
    const short: Short = await ky.post("/api/links", { json: { url } }).json();
    setSlug(short.slug);
    reset();
  });
  return (
    <Layout>
      <main className="flex flex-1 flex-col pt-2 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex-auto"></div>
        <div className="flex justify-center items-center flex-col">
          <form
            className="flex w-full flex-col max-w-screen-sm mb-4"
            onSubmit={shortenLink}
          >
            <label htmlFor="url" className="text-2xl">
              Url:
            </label>
            <div className="flex">
              <Input
                type="url"
                name="url"
                placeholder="https://example.com"
                errors={errors}
                ref={register({ required: "Please enter a valid url" })}
              />
              <Submit />
            </div>
          </form>
        </div>
        <div className="flex-auto h-0 max-w-screen-lg mx-auto">
          <span>
            {!loading && !session && (
              <>
                <a
                  href={`/api/auth/signin`}
                  className="font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>{" "}
                to manage your short url and see stats
              </>
            )}
            {!loading && session && (
              <Link href="/manage">Manage shorted urls</Link>
            )}
          </span>
        </div>
      </main>
    </Layout>
  );
}

type FormData = {
  url: string;
};
