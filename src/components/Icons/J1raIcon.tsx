import type { SVGProps } from 'react';
import * as React from 'react';

const J1raIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={32}
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="94.092%" x2="56.535%" y1="6.033%" y2="43.087%">
        <stop offset="18%" stopColor="#0052CC" />
        <stop offset="100%" stopColor="#2684FF" />
      </linearGradient>
    </defs>
    <path
      fill="#2684FF"
      d="M26.04 5H14.999a4.983 4.983 0 0 0 4.984 4.983h2.033v1.964a4.983 4.983 0 0 0 4.983 4.98V5.957A.958.958 0 0 0 26.041 5Z"
    />
    <path
      fill="url(#a)"
      d="M20.042 11H9a4.985 4.985 0 0 0 4.981 4.981h2.034v1.964A4.985 4.985 0 0 0 21 22.93V11.958a.958.958 0 0 0-.958-.958Z"
    />
    <path
      fill="url(#a)"
      d="M14.042 17H3a4.985 4.985 0 0 0 4.985 4.981h2.04v1.964c0 2.75 2.226 4.98 4.975 4.985V17.958a.958.958 0 0 0-.958-.958Z"
    />
  </svg>
);
export default J1raIcon;
