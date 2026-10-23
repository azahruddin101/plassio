import ContentPage from "@/components/layout/ContentPage";
import { posts } from "@/lib/content";

export const metadata = {
  title: "Lucknow Guide & Journal",
  description: "Travel notes published by Hotel Palassio International about Gomti Nagar Extension and Lucknow weddings.",
};

export default function BlogPage() {
  return (
    <ContentPage
      title="LUCKNOW GUIDE"
      intro="Travel guides around Gomti Nagar Extension, wedding planning advice, and Lucknow culinary insights. The hotel site publishes these summaries."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#DE9C33] uppercase">{post.category}</p>
            <p className="mt-3 text-xs text-gray-500">{post.date} · {post.read}</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#633633]">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
            <p className="mt-4 text-sm">By {post.author}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
