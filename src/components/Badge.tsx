import React from "react";

interface Badgeprops {
  children: React.ReactNode;
}

const Badge = ({ children }: Badgeprops) => {
  return (
    <span className="border rounded px-2 py-0.5 bg-muted text-muted-foreground text-sm font-medium">
      {children}
    </span>
  );
};

export default Badge;
