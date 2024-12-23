import { Project } from "@/components/cards";
import { showcase } from '@/app/source';

export default function Showcase() {
  const posts = [...showcase.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  return (
    <main className="px-8 max-w-screen-xl mx-auto">
       <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <Project 
            img={`/thumbs/${post.data.thumb}`} 
            title={post.data.title} 
            client={post.data.client} 
            href={post.url} 
            key={`showcase-${post.file.name}`}
          />
        ))}
       </div>
    </main>
  );
}
