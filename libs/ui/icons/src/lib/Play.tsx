import * as React from 'react';
import { SVGProps } from 'react';
const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.236 11.175L7.382 4.179C6.738 3.833 6 3.87 6 5.114v13.774c0 1.138.791 1.318 1.382.934l10.854-6.995a1.186 1.186 0 000-1.652z"
      fill="#080525"
    />
  </svg>
);
export default Play;
