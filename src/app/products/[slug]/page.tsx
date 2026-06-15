export default async function ({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  return <h1>{slug}</h1>;
}
