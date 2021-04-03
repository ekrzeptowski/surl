import Layout from "@components/Layout";
import { Input } from "@components/Form/Input";
import { Submit } from "@components/Form/Submit";
import { GetServerSidePropsContext } from "next";
import { Button } from "@components/Button";
import Link from "next/link";
import { createUrl } from "helpers/createUrl";

export default function Home(props: HomeProps) {
  const { slug } = props;

  return (
    <Layout>
      <main className="flex flex-1 flex-col pt-2 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex-auto"></div>
        <div className="flex justify-center items-center flex-col">
          {!slug && (
            <form
              action="/api/links"
              method="POST"
              className="flex w-full flex-col max-w-screen-sm mb-4"
            >
              <label htmlFor="url" className="text-2xl">
                Url:
              </label>
              <div className="flex">
                <Input
                  type="url"
                  name="url"
                  placeholder="https://example.com"
                />
                <Submit />
              </div>
            </form>
          )}
          {slug && (
            <div className="flex w-full flex-col max-w-screen-sm mb-4">
              <label className="text-2xl">Shortened url:</label>
              <div className="flex">
                <Input type="url" name="shortened" readOnly value={slug} />
                <Link href="/nojs">
                  <Button as="a">New link</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex-auto h-0 max-w-screen-lg mx-auto">
          <span>Enable JS to use full website functionality</span>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.query.slug
    ? createUrl(context.query.slug.toString())
    : null;
  return {
    props: { slug }, // will be passed to the page component as props
  };
}

type HomeProps = {
  slug: string;
};
