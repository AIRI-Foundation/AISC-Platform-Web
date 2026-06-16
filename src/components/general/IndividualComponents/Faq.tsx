import { useState } from "react";

export interface FAQItem {
  id: number;
  title: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
 
        <section className="mt-14 border-t border-dashed border-white/20 pt-14">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mx-auto mt-10 max-w-2xl space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm transition"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
                  }
                  className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition hover:bg-slate-50"
                >
                  <span className="font-semibold text-slate-900">
                    {item.title}
                  </span>
                  <svg
                    className={`h-5 w-5 text-slate-600 transition-transform ${
                      expandedFAQ === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {expandedFAQ === item.id && (
                  <div className="border-t border-slate-200 bg-slate-50/50 px-6 py-4 text-sm text-slate-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
  );
}