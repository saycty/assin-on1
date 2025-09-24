import { ReactNode } from "react";
import { uiStyles, gridStyles } from "@/styles/tailwind-utilities";

interface WorkersGridProps {
  children: ReactNode;
}

export default function WorkersGrid({ children }: WorkersGridProps) {
  return (
    <section id="workers-grid" className={uiStyles.workersGridSection}>
      <div className={gridStyles.grid}>{children}</div>
    </section>
  );
}
