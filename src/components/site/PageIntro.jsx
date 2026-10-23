export default function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="border-b border-espresso/10 bg-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-2 text-4xl sm:text-5xl">{title}</h1>
        {children ? <div className="mt-4 max-w-3xl text-muted">{children}</div> : null}
      </div>
    </header>
  );
}
