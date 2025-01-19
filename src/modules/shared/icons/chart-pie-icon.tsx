import type { SVGProps } from "react";

export function ChartPieIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M12 3v9h9"></path>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
      </g>
    </svg>
  );
}
