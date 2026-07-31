"use client";

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

export function ContextTooltip({
  term,
  description,
  children
}: {
  term: string;
  description: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState(false);

  React.useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', handleTouch, { once: true });
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <span 
          className="cursor-pointer border-b border-dashed border-slate-500 font-semibold text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          onMouseEnter={() => { if (!isTouch) setOpen(true) }}
          onMouseLeave={() => { if (!isTouch) setOpen(false) }}
          onClick={(e) => {
            // on mobile, this will toggle open/close naturally via PopoverPrimitive
            if (!isTouch) e.preventDefault();
          }}
        >
          {children}
        </span>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className="z-50 w-72 rounded-sm border border-slate-400 dark:border-slate-600 bg-[#FDFCF8] dark:bg-slate-900 p-4 text-slate-800 dark:text-slate-300 shadow-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          sideOffset={8}
          align="center"
          onMouseEnter={() => { if (!isTouch) setOpen(true) }}
          onMouseLeave={() => { if (!isTouch) setOpen(false) }}
        >
          <div className="text-sm leading-relaxed font-sans">
            <strong className="block mb-2 text-slate-900 dark:text-white font-serif font-bold">{term}</strong>
            {description}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
