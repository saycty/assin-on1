import { uiStyles } from "@/styles/tailwind-utilities";

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a href={href} className={uiStyles.skipLink}>
      {children}
    </a>
  );
}
