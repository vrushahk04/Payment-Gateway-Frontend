import type { ReactNode } from "react";

type Props = {
  open: boolean;
  children: ReactNode;
  className?: string;
};

const CommonDropdown = ({ open, children, className }: Props) => {
  if (!open) return null;

  return (
    <div
      className={`
        absolute right-0 mt-2
        bg-white dark:bg-surface
        border border-border
        rounded-xl shadow-theme-lg
        z-50
        ${className || ""}
      `}
    >
      {children}
    </div>
  );
};

export default CommonDropdown;