import PageBanner from "@/components/layout/PageBanner";

export default function ContentPage({ title, crumb, intro, children }) {
  return (
    <div className="bg-[#f5f5f5] pb-16 font-ui">
      <PageBanner title={title} crumb={crumb || title} />
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {intro ? <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-gray-700">{intro}</p> : null}
        {children}
      </div>
    </div>
  );
}

export function InfoCard({ title, children }) {
  return (
    <article className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
      {title ? <h2 className="mb-3 text-2xl font-bold text-[#633633]">{title}</h2> : null}
      <div className="text-sm leading-7 text-[#444]">{children}</div>
    </article>
  );
}

export const goldButton =
  "inline-block rounded-lg bg-gradient-to-br from-[#e0a24a] to-[#c8892e] px-7 py-2.5 text-sm font-bold tracking-wide text-white shadow-[0_4px_12px_rgba(224,162,74,0.35)] transition hover:scale-[1.03]";

export const greenButton =
  "inline-block rounded-md bg-[#633633] px-6 py-3 text-sm tracking-wider text-white shadow-lg transition hover:bg-[#35170f]";
