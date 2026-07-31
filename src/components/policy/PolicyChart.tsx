"use client";

import React from "react";
import { ChartConfig } from "@/types/policy";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function PolicyChart({ config }: { config: ChartConfig }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 mt-6 shadow-inner">
      <h5 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">{config.title}</h5>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={config.data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#64748b" vertical={false} opacity={0.3} />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis stroke="#94a3b8" tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--tooltip-bg, #ffffff)", borderColor: "var(--tooltip-border, #e2e8f0)", color: "var(--tooltip-color, #0f172a)", borderRadius: '0.5rem' }}
              itemStyle={{ fontWeight: "bold" }}
            />
            <Legend wrapperStyle={{ paddingTop: "15px", fontSize: "13px" }} />
            <Line
              type="monotone"
              dataKey="domestic"
              name={config.domesticLabel}
              stroke="#6366f1"
              strokeWidth={3}
              activeDot={{ r: 6 }}
            />
            {config.internationalLabel && (
              <Line
                type="monotone"
                dataKey="international"
                name={config.internationalLabel}
                stroke="#10b981"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50 text-right">
        <span className="text-xs text-slate-500 font-mono">출처: {config.source}</span>
      </div>
    </div>
  );
}
