import Link from 'next/link';
import React from 'react';

import J1raIcon from './Icons/J1raIcon';
import J1raTextIcon from './Icons/J1raTextIcon';

const JiraHomeIcon: React.FC = () => {
  return (
    <Link
      href="/j1ra"
      passHref
      className="flex p-1 items-center bg-none border-0 rounded-[3px] cursor-pointer mr-2 decoration-0 xl:mr-4 hover:bg-default-bold-hovered hover:text-subtle hover:border-0"
    >
      <div className="xl:flex max-h-7 max-w-[260px] hidden p-0 m-0">
        <span
          aria-label="Jira"
          role="img"
          className="text-primary-dark fill-logo relative inline-block leading-none select-none whitespace-normal h-8 max-h-6"
        >
          <J1raTextIcon className="m-w-[260px] h-full fill-inherit overflow-hidden select-none leading-none whitespace-normal" />
        </span>
      </div>
      <div className="xl:hidden flex max-h-7 p-0 m-0">
        <span
          aria-label="Jira"
          role="img"
          className="text-primary-dark fill-logo relative inline-block leading-none select-none whitespace-normal h-8 max-h-6"
        >
          <J1raIcon />
        </span>
      </div>
    </Link>
  );
};

export default JiraHomeIcon;
