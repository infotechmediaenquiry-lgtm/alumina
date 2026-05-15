import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Alumina",
  description: "Get in touch with Alumina for product inquiries, technical support, and ordering information.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-red-600 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Contact
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                We’re here to help with your alumina and specialty materials needs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Reach out for pricing, technical guidance, order support, or custom product solutions. Our team is ready to respond quickly and provide the information you need.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <MapPin size={20} />
                  </div>
                  <h2 className="mt-6 text-lg font-semibold text-slate-950">Office</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Plot No.R-32/43,<br/>
                    TTC Industrial Estate, <br/>
                    Rabale MIDC, Navi Mumbai - 400701, <br/>
                    Maharashtra, India
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Mail size={20} />
                  </div>
                  <h2 className="mt-6 text-lg font-semibold text-slate-950">Email</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    sales@alumina.co.in<br />
                    nitin@alumina.co.in
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Phone size={20} />
                  </div>
                  <h2 className="mt-6 text-lg font-semibold text-slate-950">Phone</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    +91 7400093412<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Send a message</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Tell us about your project</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Share your requirements and one of our specialists will get back to you shortly.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Name</span>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Email</span>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Subject</span>
                  <input
                    type="text"
                    placeholder="Project, product, or question"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Send Message
                  </button>
                  <p className="text-sm text-slate-500">We typically reply within one business day.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
