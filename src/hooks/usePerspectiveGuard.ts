import { useState, useEffect } from "react";
import { Policy } from "@/types/policy";

export function usePerspectiveGuard(policy: Policy) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAligned, setIsAligned] = useState<boolean | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined" || !policy.valueTag) return;

    // Check if user dismissed it for this session
    const dismissed = sessionStorage.getItem(`guardDismissed_${policy.id}`);
    if (dismissed === "true") return;

    // Read test answers from local storage
    const storedAnswers = localStorage.getItem("presiTrack_testAnswers");
    if (!storedAnswers) return;

    try {
      const answers: { policyId: string; value: number }[] = JSON.parse(storedAnswers);
      
      let welfareScore = 0;
      let marketScore = 0;

      answers.forEach(a => {
        if (a.policyId === "q1" || a.policyId === "q4") {
          welfareScore += a.value;
        } else if (a.policyId === "q3" || a.policyId === "q5" || a.policyId === "q6") {
          marketScore += a.value;
        }
      });

      const totalLeaning = marketScore - welfareScore;
      let userLeaning: "pro-market" | "pro-welfare" | "neutral" = "neutral";
      
      if (totalLeaning > 1) {
        userLeaning = "pro-market";
      } else if (totalLeaning < -1) {
        userLeaning = "pro-welfare";
      }

      if (userLeaning !== "neutral" && policy.valueTag) {
        if (userLeaning === policy.valueTag) {
          setIsAligned(true);
          setIsVisible(true);
        } else {
          setIsAligned(false);
          setIsVisible(true);
        }
      }
    } catch (e) {
      console.error("Failed to parse test answers", e);
    }
  }, [policy.id, policy.valueTag]);

  const dismiss = () => {
    sessionStorage.setItem(`guardDismissed_${policy.id}`, "true");
    setIsVisible(false);
  };

  return { isVisible, isAligned, dismiss };
}
