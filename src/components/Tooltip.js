import { useRef, useEffect, useState } from "react";

export default function ToolTip({ children, tooltip }) {
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  useEffect(() => {
    if (tooltipRef.current) {
      setTooltipWidth(tooltipRef.current.offsetWidth);
    }
  }, [tooltip]);

  const handleMouseEnter = () => {
    if (!tooltipRef.current || !containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;

    // Center the tooltip
    const leftOffset = (containerWidth - tooltipWidth) / 2;
    tooltipRef.current.style.left = `${leftOffset}px`;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blurple font-semibold text-sm text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};