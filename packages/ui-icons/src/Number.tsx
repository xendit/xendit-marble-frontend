import type { SVGProps } from 'react';
const Number = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="prefix__mask0_7278_5225"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <rect width={24} height={24} fill="currentColor" />
    </mask>
    <g mask="url(#prefix__mask0_7278_5225)">
      <path
        d="M6 20L7 16H3L3.5 14H7.5L8.5 10H4.5L5 8H9L10 4H12L11 8H15L16 4H18L17 8H21L20.5 10H16.5L15.5 14H19.5L19 16H15L14 20H12L13 16H9L8 20H6ZM9.5 14H13.5L14.5 10H10.5L9.5 14Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
export default Number;
