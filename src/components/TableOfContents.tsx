"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" } // trigger when near top
    );

    // Initial pass: wait a short tick for rendering
    setTimeout(() => {
      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // scroll with some offset for header
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-24 font-sans border-l border-slate-300 dark:border-slate-700 pl-4 py-2">
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">목차 (Contents)</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "text-sm transition-colors block py-1 cursor-pointer",
                activeId === item.id 
                  ? "font-bold text-slate-900 dark:text-white" 
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
