import * as React from 'react';
import { SVGProps } from 'react';
const Collapse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={3.793} y={5} width={2} height={13} rx={1} fill="#080525" />
    <rect
      x={13.157}
      y={5.136}
      width={2}
      height={9}
      rx={1}
      transform="rotate(45 13.157 5.136)"
      fill="#080525"
    />
    <rect
      x={14.571}
      y={16.45}
      width={2}
      height={9}
      rx={1}
      transform="rotate(135 14.571 16.45)"
      fill="#080525"
    />
    <rect
      x={7.207}
      y={12.5}
      width={2}
      height={13}
      rx={1}
      transform="rotate(-90 7.207 12.5)"
      fill="#080525"
    />
  </svg>
);
export default Collapse;
