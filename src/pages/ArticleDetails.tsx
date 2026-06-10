import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { Img } from "@/components/common/Img";
import { articles } from "@/data/ArticlesDetails";
import { ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";
import { ArticleCard } from "./Articles";

export default function ArticleDetails() {
  const { slug } = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) return <NotFound />;
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  
  const index = articles.findIndex((x) => x.slug === a.slug);
  const imagePath = `/images/articles/article-${(index % 4) + 1}.webp`;

  return (
    <>
      <SEO title={a.title} description={a.excerpt} path={`/articles/${a.slug}`} />
      
      {/* Hero Section */}
      <section className="w-full p-2 sm:p-3 lg:p-4 xl:p-4 flex flex-col">
        <div
          className="relative w-full rounded-[24px] lg:rounded-[30px] overflow-hidden h-[calc(100vh-1rem)] sm:h-[calc(100vh-1rem)] lg:h-[calc(100vh-2rem)] min-h-[400px]"
        >
          <Img src={imagePath} alt={a.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-4 pb-24">
        {/* Combined Gray Container for both cards */}
        <div className="relative z-10 -mt-[100px] sm:-mt-[140px] md:-mt-[180px] lg:-mt-[220px] bg-[#EFF0EB] rounded-[24px] p-3 lg:p-4 max-w-[1000px] mx-auto flex flex-col gap-4">
          
          {/* Title & Excerpt Card */}
          <div className="bg-[#FEFFFA] rounded-[20px] p-4 lg:p-8 border border-black/[0.04]">
            <Link to="/articles" className="inline-flex items-center gap-2 text-base font-medium text-[#111514] transition-opacity">
              <ArrowLeft className="size-4"/> Back to Blog
            </Link>
            <h1 className="mt-6 text-[26px] leading-[34px] md:text-[36px] md:leading-[44px] lg:text-[44px] lg:leading-[52px] font-medium text-[#111514] font-sans tracking-tight">
              {a.title}
            </h1>
            <p className="mt-4 text-base md:text-lg font-normal text-[#4C4D4D] leading-[26px] md:leading-[28px]">
              {a.excerpt}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-[#FEFFFA] rounded-[18px] p-4 lg:p-8 border border-black/[0.04]">
            <div className="flex items-center justify-between text-base font-normal text-[#666666] mb-6 font-sans">
              <span>{a.readTime}</span>
              <span>{a.date}</span>
            </div>
            
            <div className="space-y-8">
              {a.content.map((sec) => (
                <section key={sec.heading}>
                  <h2 className="text-[20px] md:text-[32px] leading-[28px] md:leading-[40px] font-medium text-[#111514] font-sans mb-4">{sec.heading}</h2>
                  {sec.body && <p className="text-base md:text-lg leading-[24px] md:leading-[28px] text-[#4C4D4D] font-normal mb-4">{sec.body}</p>}
                  {sec.bullets && (
                    <ul className="list-disc pl-5 text-base md:text-lg leading-[24px] md:leading-[24px] text-[#4C4D4D] space-y-2">
                      {sec.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Related Articles Section */}
      <section className="container-px xl:max-w-[1300px] mx-auto pb-24 md:pb-32">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          <h2 className="text-[28px] md:text-[48px] leading-[36px] md:leading-[56px] font-medium font-sans text-[#111514]">Related Articles</h2>
          <Link to="/articles" className="group inline-flex items-center justify-center rounded-full bg-[#1F9B6A] text-white px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 overflow-hidden shrink-0">
            <span className="relative block overflow-hidden h-[24px]">
              <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                <span className="h-[24px] flex items-center justify-center text-[16px] font-medium font-sans">View All Articles</span>
                <span className="h-[24px] flex items-center justify-center text-[16px] font-medium font-sans">View All Articles</span>
              </span>
            </span>
          </Link>
        </div>
        
        <div className="bg-[#EFF0EB] rounded-[20px] p-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {related.map((r) => {
              const rIndex = articles.findIndex((x) => x.slug === r.slug);
              return <ArticleCard key={r.slug} article={r} index={rIndex} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
