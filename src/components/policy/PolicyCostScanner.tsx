import React from 'react';
import { Receipt } from 'lucide-react';

interface PolicyCostScannerProps {
  fundingSource?: string;
}

export default function PolicyCostScanner({ fundingSource }: PolicyCostScannerProps) {
  if (!fundingSource) return null;

  return (
    <div className="mt-6 bg-slate-100 border border-slate-300 dark:border-slate-700 dark:bg-slate-800/80 rounded-sm p-4 border-dashed relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200 dark:border-slate-700">
        <Receipt className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
          💰 재원 조달 방식 (Funding Source)
        </span>
      </div>
      <div className="font-mono text-sm md:text-base text-slate-800 dark:text-slate-200 font-medium">
        {fundingSource}
      </div>
      
      {/* Receipt zig-zag bottom edge decoration */}
      <div className="absolute -bottom-1 left-0 w-full h-2 bg-transparent" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 50% 100%, transparent 2px, #f1f5f9 2px)',
             backgroundSize: '8px 4px',
             backgroundRepeat: 'repeat-x',
             backgroundPosition: 'bottom'
           }} 
      />
    </div>
  );
}
