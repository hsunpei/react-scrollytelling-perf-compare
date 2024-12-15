interface SvgMaskProps {
  width: number;
  height: number;
}

export const SvgMask = ({ width, height }: SvgMaskProps) => {
  return (
    <svg
      width={width}
      height={height}
      id="innerbox"
      className="absolute left-0 top-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white" fillOpacity="0.5" />
          {/* The hole  */}
          <polygon points="20,20 20,180 180,100 " fill="black" />
        </mask>
      </defs>
      {/* Masked background */}
      <rect fill="blue" width="100%" height="100%" mask="url(#hole)" />
    </svg>
  );
};
