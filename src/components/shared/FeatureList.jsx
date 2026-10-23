import { Check } from "lucide-react";

export default function FeatureList({ title, items }) {
  return (
    <div className="rounded-lg border border-brand-green/10 bg-surface p-6 shadow-sm dark:border-white/10">
      <h2 className="mb-5 font-serif text-2xl text-brand-green dark:text-brand-cream">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
