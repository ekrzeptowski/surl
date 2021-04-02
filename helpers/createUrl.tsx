export function createUrl(slug: string): string {
  let origin;
  if (typeof window !== "undefined") {
    origin = window?.location?.origin;
  } else {
    origin = process.env.NEXT_PUBLIC_ORIGIN;
  }
  return origin + "/" + slug;
}
