import type { SVGProps } from 'react';
import * as React from 'react';

const J1raTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={32}
    aria-hidden="true"
    viewBox="0 0 69 32"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="98.031%" x2="58.888%" y1=".161%" y2="40.766%">
        <stop offset="18%" stopColor="#0052CC" />
        <stop offset="100%" stopColor="#2684FF" />
      </linearGradient>
    </defs>
    <path
      fill="#2684FF"
      d="M22.937 4H11.41a5.203 5.203 0 0 0 5.203 5.203h2.124v2.05a5.203 5.203 0 0 0 5.2 5.2V5a1 1 0 0 0-1-1Z"
    />
    <path
      fill="url(#a)"
      d="M17.233 9.743H5.707a5.203 5.203 0 0 0 5.2 5.2h2.123V17a5.203 5.203 0 0 0 5.203 5.197V10.743a1 1 0 0 0-1-1Z"
    />
    <path
      fill="url(#a)"
      d="M11.527 15.483H0a5.203 5.203 0 0 0 5.203 5.204h2.13v2.05a5.203 5.203 0 0 0 5.194 5.2V16.483a1 1 0 0 0-1-1Z"
    />
    <path
      fill="var(--ds-text, #253858)"
      fillRule="evenodd"
      d="M37.07 18.956c0 1.69-.676 2.886-2.652 2.886-.858 0-1.716-.156-2.418-.442v2.262c.65.234 1.586.442 2.808.442 3.224 0 4.602-2.158 4.602-5.304V6.918h-2.34v12.038Zm5.824-11.388c0 .988.65 1.56 1.56 1.56s1.56-.572 1.56-1.56c0-.988-.65-1.56-1.56-1.56s-1.56.572-1.56 1.56ZM43.31 24h2.236V11H43.31v13Zm5.616 0h2.184v-7.67c0-2.756 1.742-3.614 4.602-3.328v-2.184c-2.548-.156-3.848.936-4.602 2.47V11h-2.184v13Zm17.524 0v-2.34c-.832 1.716-2.392 2.6-4.394 2.6-3.458 0-5.2-2.938-5.2-6.76 0-3.666 1.82-6.76 5.46-6.76 1.898 0 3.354.858 4.134 2.548V11h2.236v13H66.45Zm-7.358-6.5c0 3.12 1.248 4.68 3.562 4.68 2.002 0 3.796-1.274 3.796-4.16v-1.04c0-2.886-1.638-4.16-3.536-4.16-2.522 0-3.822 1.664-3.822 4.68Z"
    />
  </svg>
);
export default J1raTextIcon;