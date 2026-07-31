import React from 'react';

interface KeyPersonnel {
  name: string;
  role: string;
  description?: string;
}

interface PolicyArchitectProps {
  personnel?: KeyPersonnel[];
}

export default function PolicyArchitect({ personnel }: PolicyArchitectProps) {
  if (!personnel || personnel.length === 0) return null;

  return (
    <div className="mt-4 pt-4 border-t border-dashed border-slate-300 dark:border-slate-700 flex flex-col gap-2">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">
        👔 핵심 실무 설계자 (Policy Architect)
      </div>
      <div className="flex flex-wrap gap-2">
        {personnel.map((person, idx) => (
          <div 
            key={idx} 
            className="group relative inline-flex items-center gap-1.5 px-2.5 py-1 text-sm bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-none text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 cursor-default"
          >
            <span className="font-bold">{person.name}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">({person.role})</span>
            
            {person.description && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 text-xs bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 rounded-none shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 font-sans pointer-events-none">
                {person.description}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800 dark:border-t-slate-200"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
