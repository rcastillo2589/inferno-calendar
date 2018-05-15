export function LeftArrow ({ width, height }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 320"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="#9b9b9b" stroke-width="8" stroke="#9b9b9b">
        <path d="M320 0 L0 160 L100 160 Z"/>
        <path d="M320 320 L0 160 L100 160 Z"/>
      </g>
    </svg>
  );
};

export function RightArrow ({ width, height }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 320"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="#9b9b9b" stroke-width="8" stroke="#9b9b9b">
        <path d="M0 0 L320 160 L220 160 Z"/>
        <path d="M0 320 L320 160 L220 160 Z"/>
      </g>
    </svg>
  );
};
