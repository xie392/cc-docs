import { generateStaticParamsFor, importPage } from "nextra/pages";
import { HOC_MDXWrapper } from "nextra/setup-page";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

export default async function Page(props) {
  const params = await props.params;
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath);
  const MDXWrapper = HOC_MDXWrapper(MDXContent, { toc, metadata, sourceCode });
  return <MDXWrapper {...props} params={params} />;
}
