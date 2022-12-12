import * as React from 'react';
import { SVGProps } from 'react';
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.207 6.293a1 1 0 0 0-1.414 1.414l1.414-1.414ZM14.5 12l.707.707a1 1 0 0 0 0-1.414L14.5 12Zm-5.707 4.293a1 1 0 1 0 1.414 1.414l-1.414-1.414Zm0-8.586 5 5 1.414-1.414-5-5-1.414 1.414Zm5 3.586-5 5 1.414 1.414 5-5-1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowRight;