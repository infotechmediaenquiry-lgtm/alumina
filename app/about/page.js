import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Alumina Chemicals & Castables",
  description: "Alumina Chemicals & Castables is a leading manufacturer, supplier and exporter of alumina and refractory products since 1988.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 text-slate-950">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-red-600 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                About Us
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                23 years of delivering superior chemicals & refractory castables.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                For the last 23 years, we, ALUMINA CHEMICALS & CASTABLES, have been offering superior quality chemicals and refractory castables to customers. We are reckoned among the leading manufacturers, suppliers and exporters of Alumina Trihydrate, Sodium Aluminate, Calcined Alumina, and Activated Alumina.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <h2 className="text-xl font-semibold text-slate-950">Business Type</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Manufacturer, Supplier and Exporter</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <h2 className="text-xl font-semibold text-slate-950">Established</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">1988</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_right,_rgba(218,37,42,0.18),_transparent_45%)] p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
              <div className="rounded-[1.75rem] bg-white p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)] sm:p-10">
                <div className="rounded-3xl bg-slate-900/95 p-8 text-white">
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Commitment</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-100 sm:text-base">
                    Each product is formulated by our well-trained team following industrial quality standards. Our products are acclaimed for optimum quality, accurate composition, long shelf life, pocket-friendly pricing, and flexible packaging sizes.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/90 p-5">
                      <p className="text-3xl font-semibold">85</p>
                      <p className="mt-2 text-sm text-slate-300">Employees</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/90 p-5">
                      <p className="text-3xl font-semibold">1000 MT</p>
                      <p className="mt-2 text-sm text-slate-300">Monthly production capacity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
                  Company Overview
                </p>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  A trusted partner for alumina chemicals, castables and refractory solutions.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                  Our products are formulated with stringent quality control, and we serve customers with reliable supply, timely deliveries, and strong market goodwill. We also support OEMs with consistent manufacturing and technical assistance.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">Bankers</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">ICICI Bank</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">OEM Status</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Yes</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">Production Units</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">1</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">Engineers</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">2</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">Warehousing</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Yes</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">Annual Turnover</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Rs 25 Crores</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">Production Type</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Automatic</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-950">Certification</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">ISO 9001:2008</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
                <div className="space-y-4">
                  <p className="inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
                    Our Products
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Comprehensive alumina and specialty materials portfolio.
                  </h2>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    We offer a wide range of products to meet industrial, refractory, flame-retardant, and ceramic applications.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-6">
                    <ul className="space-y-3 text-sm leading-6 text-slate-700">
                      <li>Alumina Trihydrate</li>
                      <li>Calcined Alumina</li>
                      <li>Sodium Aluminate</li>
                      <li>Activated Alumina</li>
                      <li>Alumina Hydrate</li>
                      <li>Aluminium Hydroxide</li>
                      <li>Aluminium Oxide</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-6">
                    <ul className="space-y-3 text-sm leading-6 text-slate-700">
                      <li>Zirconium Silicate</li>
                      <li>Alumina Catalyst</li>
                      <li>Fire Retardant Fillers</li>
                      <li>Zero Halogen</li>
                      <li>Zirconium Oxide</li>
                      <li>Ceramic Alumina</li>
                      <li>High Temperature Alumina</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
