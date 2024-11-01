import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { showcase } from '@/app/source';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = showcase.getPage([params.slug]);

  if (!page) notFound();

  return (
    <main className="max-w-screen-lg mx-auto px-8 py-24">
      <div className="pb-4">
        <a href="/showcase">
          &lt; Back
        </a>
      </div>
      <div>
        <h1 className="mb-2 text-3xl font-bold text-stone-700">
          {page.data.title}
        </h1>
        <p className="mb-4 text-stone-700">{page.data.description}</p>
      </div>
      <article className="container flex flex-col px-0 py-8 lg:flex-row">
        <div className="prose min-w-0 flex-1 pr-4">
          <page.data.body components={defaultMdxComponents} />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          <div className="sticky top-[100px]">
            <p className="mb-1 text-fd-muted-foreground">Client</p>
            <p className="font-medium">{page.data.client}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return showcase.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}