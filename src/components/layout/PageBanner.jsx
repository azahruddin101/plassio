import Link from "next/link";

export default function PageBanner({ title, crumb }) {
  return (
    <div className="flex flex-col items-start justify-between gap-2 bg-[#633633] px-4 py-5 text-white sm:flex-row sm:items-center sm:px-10 md:px-[90px] md:py-[22px]">
      <h1 className="m-0 text-2xl font-extrabold md:text-4xl">{title}</h1>
      <p className="m-0 text-sm text-[#e0a24a] md:text-lg">
        <Link href="/" className="font-semibold text-[#e0a24a] no-underline hover:underline">
          HOME
        </Link>
        <span className="mx-1.5">/</span>
        {crumb || title}
      </p>
    </div>
  );
}
