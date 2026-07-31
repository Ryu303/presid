"use client";

import React from "react";
import { ContextTooltip } from "./ContextTooltip";
import { GlossaryTerm } from "@/types/policy";

export function GlossaryText({ text, glossary }: { text: string; glossary?: GlossaryTerm[] }) {
  if (!glossary || glossary.length === 0 || !text) {
    return <>{text}</>;
  }

  // Find the first match in the text
  let earliestMatch = -1;
  let matchedTerm: GlossaryTerm | null = null;

  for (const termObj of glossary) {
    const idx = text.indexOf(termObj.term);
    if (idx !== -1 && (earliestMatch === -1 || idx < earliestMatch)) {
      earliestMatch = idx;
      matchedTerm = termObj;
    }
  }

  if (earliestMatch === -1 || !matchedTerm) {
    return <>{text}</>;
  }

  const before = text.substring(0, earliestMatch);
  const matchStr = text.substring(earliestMatch, earliestMatch + matchedTerm.term.length);
  const after = text.substring(earliestMatch + matchedTerm.term.length);

  return (
    <>
      {before}
      <ContextTooltip term={matchedTerm.term} description={matchedTerm.description}>
        {matchStr}
      </ContextTooltip>
      <GlossaryText text={after} glossary={glossary} />
    </>
  );
}
