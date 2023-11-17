import type { ReactNode } from 'react';

import AppSwitcher from '@/components/AppSwitcher';
import JiraHomeIcon from '@/components/JiraHomeIcon';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}
    <div className="mx-auto">
      <header className="text-subtlest bg-white flex box-border h-14 px-3 relative items-center justify-between border-input-hovered border-b-[1px] border-solid">
        <nav className="flex h-full flex-grow items-center ">
          <AppSwitcher />
          <JiraHomeIcon />
        </nav>
        <div>right</div>
      </header>
      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made by{' '}
        <a href="https://rishabh-anand.dev">Rishabh Anand</a>.
      </footer>
    </div>
  </div>
);

export { Main };
