import { ReactNode, forwardRef } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className = "" }, ref) => {
    return (
      <main
        ref={ref}
        className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 ${className}`}
      >
        {children}
      </main>
    );
  }
);

Container.displayName = "Container";

export default Container;
