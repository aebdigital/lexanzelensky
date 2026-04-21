import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "../../components/page-hero";
import { legacyMetadata } from "../../lib/seo";
import { supabase } from "../../lib/supabase";

export const revalidate = 0;

export const metadata: Metadata = legacyMetadata("blog");

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from("lexan_blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  return (
    <main>
      <PageHero title="Blog" />
      <section className="page-copy-section bg-gray-50">
        <div className="site-container">
          {(!posts || posts.length === 0) ? (
            <div className="content-text max-w-3xl bg-white p-12 shadow-sm border border-gray-100 text-center mx-auto">
              <h2 className="content-title-dark !mb-6">
                Pripravujeme obsah
              </h2>
              <p className="!mb-8">
                Blog je momentálne v príprave. Čoskoro tu nájdete užitočné informácie o
                polykarbonátových riešeniach, tipoch na montáž skleníkov a novinky z oblasti
                stavebných materiálov.
              </p>
              <Link href="/" className="footer-button inline-flex">
                Návrat na hlavnú stránku
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col bg-white border border-gray-100 hover:-translate-y-1 transition-all overflow-hidden shadow-sm hover:shadow-xl">
                  {post.cover_image && (
                    <div className="relative h-56 overflow-hidden bg-gray-100 border-b border-gray-100">
                      <Image src={post.cover_image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#5a5a58] bg-gray-100 px-3 py-1">{post.category}</span>
                      <span className="text-xs font-semibold text-gray-400">{post.reading_time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#333] mb-4 leading-tight group-hover:text-[#5a5a58] transition-colors">{post.title}</h3>
                    <p className="text-[#666] line-clamp-3 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                    <div className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#333] group-hover:text-[#5a5a58] flex items-center gap-2">
                      Čítať článok <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
