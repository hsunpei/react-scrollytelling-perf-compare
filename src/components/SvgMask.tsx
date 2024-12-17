interface SvgMaskProps {
  outerWidth: number;
  outerHeight: number;
  focusArea: {
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    ry?: number;
  };
}

export const SvgMask = ({ outerWidth, outerHeight, focusArea }: SvgMaskProps) => {
  return (
    <svg
      width={outerWidth}
      height={outerHeight}
      id="innerbox"
      className="absolute left-0 top-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <mask id="focus-hole">
          <rect width="100%" height="100%" fill="white" fillOpacity="0.5" />
          {/* The hole  */}
          <rect
            x={focusArea.x}
            y={focusArea.y}
            width={focusArea.width}
            height={focusArea.height}
            rx={10}
            ry={10}
            fill="black"
          />
        </mask>
      </defs>
      {/* Masked background */}
      <rect fill="blue" width="100%" height="100%" mask="url(#focus-hole)" />
    </svg>
  );
};
