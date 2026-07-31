import React from 'react';
import { Newspaper } from 'lucide-react';

interface MediaSnapshotData {
  date: string;
  conservative: { headline: string; source: string };
  progressive: { headline: string; source: string };
}

interface MediaFrameSnapshotProps {
  snapshot?: MediaSnapshotData;
}

export default function MediaFrameSnapshot({ snapshot }: MediaFrameSnapshotProps) {
  if (!snapshot) return null;
  if (snapshot.date === "YYYY.MM.DD" || snapshot.conservative.headline.includes("수집 중")) return null;

  return (
    <div className="mt-6 mb-4 p-4 border border-slate-300 dark:border-slate-700 bg-[#FDFCF8] dark:bg-[#1C1C1C] font-sans relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#CBD5E1_2px,#CBD5E1_4px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#475569_2px,#475569_4px)]"></div>
      
      <div className="flex items-center gap-2 mb-4 mt-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <Newspaper className="w-4 h-4 text-slate-500" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          당일 언론 프레임 대조경 (D+1 Snapshot)
        </span>
        <span className="ml-auto text-xs font-mono text-slate-400">{snapshot.date}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-300 dark:divide-slate-700">
        <div className="md:pr-4 pt-2 md:pt-0">
          <div className="text-[10px] font-bold text-slate-400 mb-1 tracking-wider">보수 매체 프레임</div>
          <p className="font-serif font-bold text-slate-900 dark:text-slate-100 text-lg leading-snug mb-2">
            "{snapshot.conservative.headline}"
          </p>
          <p className="text-xs text-slate-500 font-mono text-right">- {snapshot.conservative.source}</p>
        </div>
        
        <div className="md:pl-4 pt-4 md:pt-0">
          <div className="text-[10px] font-bold text-slate-400 mb-1 tracking-wider">진보 매체 프레임</div>
          <p className="font-serif font-bold text-slate-900 dark:text-slate-100 text-lg leading-snug mb-2">
            "{snapshot.progressive.headline}"
          </p>
          <p className="text-xs text-slate-500 font-mono text-right">- {snapshot.progressive.source}</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#CBD5E1_2px,#CBD5E1_4px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#475569_2px,#475569_4px)]"></div>
    </div>
  );
}
