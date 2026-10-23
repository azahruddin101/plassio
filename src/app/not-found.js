import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f3f4f6] px-4 pt-24">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link href="/" className="text-[#633633] underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
