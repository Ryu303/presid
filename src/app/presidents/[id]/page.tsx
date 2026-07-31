import { presidentsData } from "@/data/presidents";
import PresidentDetailClient from "./PresidentDetailClient";

export function generateStaticParams() {
  return presidentsData.map((p) => ({
    id: p.id,
  }));
}

export default function PresidentDetailPage() {
  return <PresidentDetailClient />;
}
