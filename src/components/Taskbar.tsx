import AutoModeRoundedIcon from '@mui/icons-material/AutoModeRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { Avatar, BreadcrumbItem, Breadcrumbs, InputField } from 'free-bee';
import React from 'react';

interface IAppSwitcher {}

const avatarSrc =
  'https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg';

const Taskbar: React.FC<IAppSwitcher> = () => {
  return (
    <div className="mt-6 mb-4 px-10">
      <div className="">
        <Breadcrumbs>
          <BreadcrumbItem href="./" text="Projects" />
          <BreadcrumbItem href="./" text="Jira" />
        </Breadcrumbs>
      </div>
      <div className="flex items-center flex-nowrap">
        <div className="flex-auto mb-2 mt-2 max-w-max rounded transition-background duration-200 ease-in-out hover:bg-default-bold p-1">
          <div className="text-2xl my-2 font-medium text-default">JC Board</div>
        </div>
        <div className="max-w-full flex whitespace-nowrap ps-8 mb-2 ms-auto">
          <div className="hover:bg-default-bold me-4 px-1 rounded cursor-pointer">
            <AutoModeRoundedIcon fontSize="medium" />
          </div>
          <div className="hover:bg-default-bold me-4 rounded cursor-pointer">
            <StarOutlineRoundedIcon fontSize="large" />
          </div>
          <div className="hover:bg-default-bold me-4 px-1 rounded cursor-pointer">
            <OpenInFullRoundedIcon fontSize="medium" />
          </div>
          <div className="bg-default-bold px-1 rounded cursor-pointer">
            <span className="text-[2.5rem]">...</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="me-4">
          <InputField
            variant="standard"
            iconPosition="end"
            icon={<SearchRoundedIcon fontSize="small" color="disabled" />}
          />
        </div>
        <div className="flex items-center relative cursor-pointer">
          <div className="z-40">
            <Avatar size="lg" rounded="full" src={avatarSrc} />
          </div>
          <div className="ms-[-12px] z-30 hover:z-50 cursor-pointer">
            <Avatar
              size="lg"
              rounded="full"
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            />
          </div>
          <div className="ms-[-12px] z-20 hover:z-50 cursor-pointer">
            <Avatar size="lg" rounded="full" src={avatarSrc} />
          </div>
          <div className="ms-[-12px] z-10 hover:z-50 cursor-pointer">
            <Avatar
              size="lg"
              rounded="full"
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
