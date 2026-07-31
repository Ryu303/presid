"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TocItem {
  id: string;
  label: string;
  subItems?: TocItem[];
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

    // Collect all ids including subItems
    const allIds: string[] = [];
    items.forEach(item => {
      allIds.push(item.id);
      if (item.subItems) {
        item.subItems.forEach(sub => allIds.push(sub.id));
      }
    });

    // Initial pass: wait a short tick for rendering
    setTimeout(() => {
      allIds.forEach((id) => {
        const el = document.getElementById(id);
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

  const renderItem = (item: TocItem, isSubItem = false) => {
    const isActive = activeId === item.id;
    return (
      <li key={item.id} className={isSubItem ? "mt-1.5" : "mt-3"}>
        <a
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          className={cn(
            "transition-colors block py-0.5 cursor-pointer",
            isSubItem ? "text-xs pl-3 border-l-2" : "text-sm",
            isActive 
              ? (isSubItem ? "font-bold text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400" : "font-bold text-slate-900 dark:text-white") 
              : (isSubItem ? "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 border-transparent hover:border-slate-300 dark:hover:border-slate-600" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200")
          )}
        >
          {item.label}
        </a>
        {item.subItems && item.subItems.length > 0 && (
          <ul className="mt-1.5 space-y-1">
            {item.subItems.map(subItem => renderItem(subItem, true))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="sticky top-24 font-sans border-l border-slate-300 dark:border-slate-700 pl-4 py-2">
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">목차 (Contents)</h4>
      <ul className="space-y-0">
        {items.map(item => renderItem(item, false))}
      </ul>
    </nav>
  );
}
