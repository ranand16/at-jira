import Taskbar from '@/components/Taskbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main
    meta={
      <Meta
        title="J1RA Software"
        description="J1RA Software for project management."
      />
    }
  >
    <Taskbar />
  </Main>
);

export default Index;
