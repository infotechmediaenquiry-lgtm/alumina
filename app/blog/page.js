import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Alumina Chemicals & Castables",
  description: "Industry news, product insights, and technical updates from Alumina Chemicals & Castables.",
};

const posts = [
  {
    title: "Understanding Alumina Grades for Industrial Applications",
    date: "May 10, 2026",
    summary: "A practical guide to choosing the right alumina grade for flame retardant, ceramic, filtration, and refractory applications.",
    category: "Technical Insight",
  },
  {
    title: "How Activated Alumina Improves Filtration Performance",
    date: "April 22, 2026",
    summary: "Learn how activated alumina traps moisture, VOCs, and impurities in demanding industrial processes.",
    category: "Product Spotlight",
  },
  {
    title: "Building Reliability with ISO-Certified Processes",
    date: "March 15, 2026",
    summary: "Discover how certified quality systems help us deliver consistent, high-performance alumina products.",
    category: "Quality & Compliance",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 text-slate-950">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-red-600 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Blog
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              News and insights for alumina materials, manufacturing, and industrial chemistry.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Stay updated with the latest developments from Alumina Chemicals & Castables, including product updates, quality practices, and technical perspectives on our core materials.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
                  {post.category}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.summary}</p>
                <div className="mt-6 flex items-center justify-between text-sm font-medium text-slate-500">
                  <span>{post.date}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Read more</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
