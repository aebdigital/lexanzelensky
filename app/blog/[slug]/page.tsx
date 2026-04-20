import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { PageHero } from "../../../components/page-hero";
import Link from "next/link";

export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await supabase
    .from("lexan_blog_posts")
    .select("title, excerpt, cover_image")
    .eq("slug", slug)
    .single();

  if (!post) {
    return { title: "Nenájdené" };
  }

  return {
    title: `${post.title} | LEXAN Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | LEXAN Blog`,
      description: post.excerpt,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | LEXAN Blog`,
      description: post.excerpt,
      images: post.cover_image ? [post.cover_image] : [],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("lexan_blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero title="Blog" />
      
      <section className="page-copy-section bg-gray-50 pt-16 pb-24">
        <div className="site-container !max-w-4xl">


          <div className="bg-white shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
            {post.cover_image && (
              <div className="relative h-[250px] md:h-[400px] w-full bg-gray-100">
                <img src={post.cover_image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            )}
            
            <div className="p-8 md:p-16">
              <div className="mb-12 border-b border-gray-100 pb-10 text-center">
                <div className="flex justify-center items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#5a5a58] bg-gray-100 px-3 py-1.5">{post.category}</span>
                  <span className="text-sm text-gray-400 font-medium">•</span>
                  <span className="text-[12px] font-bold text-gray-400 tracking-wider uppercase">{post.reading_time}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#333] leading-[1.1] mb-6">{post.title}</h1>
                {post.excerpt && (
                  <p className="text-[1.1rem] text-gray-500 max-w-2xl mx-auto leading-relaxed">{post.excerpt}</p>
                )}
              </div>
              
              <div 
                className="lexan-content"
                dangerouslySetInnerHTML={{ __html: post.content_html }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .lexan-content {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #4a4a4a;
        }
        .lexan-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333;
          margin: 3.5rem 0 1.5rem;
          line-height: 1.3;
        }
        .lexan-content h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          margin: 2.5rem 0 1rem;
        }
        .lexan-content p {
          margin-bottom: 1.5rem;
        }
        .lexan-content strong {
          color: #222;
          font-weight: 700;
        }
        .lexan-content ul {
          margin: 1.5rem 0 2rem;
          padding-left: 1rem;
          list-style: none;
        }
        .lexan-content ul li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .lexan-content ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: #5a5a58;
        }
        .lexan-content a {
          color: #5a5a58;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .lexan-content a:hover {
          color: #000;
        }
        .lexan-content blockquote {
          border-left: 4px solid #5a5a58;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #666;
        }
        .lexan-content img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 2.5rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </main>
  );
}
