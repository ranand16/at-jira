import React from 'react';

import AppSwitcherIcon from './Icons/Appswitcher';

interface AppSwitcherProps {}

const AppSwitcher: React.FC<AppSwitcherProps> = () => {
  return (
    <div className="text-subtlest shrink-0">
      <button
        type="button"
        className="flex items-baseline font-medium relative text-center nowrap text-subtle cursor-pointer justify-center p-1 m-[2px] hover:bg-default-bold-hovered rounded-full"
      >
        <span className="m-0 opacity-100 transition-opacity duration-300 ease-in flex flex-grow-0 flex-shrink-0 self-center select-none">
          <span
            role="img"
            aria-label="Appswitcher Icon"
            className="inline-block flex-shrink-0 leading-none"
          >
            {/* Assuming AppSwitcherIcon is another component */}
            <AppSwitcherIcon />
          </span>
        </span>
      </button>
    </div>
  );
};

export default AppSwitcher;
