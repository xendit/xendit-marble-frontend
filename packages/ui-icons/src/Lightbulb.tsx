import type { SVGProps } from 'react';
const Lightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="prefix__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="currentColor" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        fill="currentColor"
        d="M12 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 10 20h4a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 12 22zm-4-3v-2h8v2H8zm.25-3a7.658 7.658 0 0 1-2.737-2.75A7.275 7.275 0 0 1 4.5 9.5c0-2.083.73-3.854 2.188-5.312C8.146 2.729 9.917 2 12 2s3.854.73 5.312 2.188C18.771 5.646 19.5 7.417 19.5 9.5c0 1.35-.337 2.6-1.012 3.75A7.666 7.666 0 0 1 15.75 16h-7.5zm.6-2h6.3a5.554 5.554 0 0 0 1.738-1.975A5.386 5.386 0 0 0 17.5 9.5c0-1.533-.533-2.833-1.6-3.9C14.833 4.533 13.533 4 12 4s-2.833.533-3.9 1.6C7.033 6.667 6.5 7.967 6.5 9.5c0 .9.204 1.742.613 2.525A5.544 5.544 0 0 0 8.85 14z"
      />
    </g>
  </svg>
);
export default Lightbulb;