import { useSpring, animated } from '@react-spring/web';

interface SvgSpotlight {
  outerWidth: number;
  outerHeight: number;
  bgColor: string;
  focusArea: {
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    ry?: number;
  };
}

export const SvgSpotlight = ({ outerWidth, outerHeight, focusArea, bgColor }: SvgSpotlight) => {
  const springProps = useSpring({
    x: focusArea.x,
    y: focusArea.y,
    width: focusArea.width,
    height: focusArea.height,
  });

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
          {/* The hole - spotlight area */}
          <animated.rect
            x={springProps.x}
            y={springProps.y}
            width={springProps.width}
            height={springProps.height}
            rx={10}
            ry={10}
            fill="black"
          />
        </mask>
      </defs>
      {/* Masked background */}
      <rect fill={bgColor} width="100%" height="100%" mask="url(#focus-hole)" />
    </svg>
  );
};
