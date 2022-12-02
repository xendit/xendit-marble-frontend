import * as React from 'react';
import { SVGProps } from 'react';
const Rules = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 7a2 2 0 012-2h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7zm4 0H3v10h18V7h-2v5h-2V7h-2v5h-2V7h-2v5H9V7H7v5H5V7z"
      fill="#080525"
    />
  </svg>
);
export default Rules;
