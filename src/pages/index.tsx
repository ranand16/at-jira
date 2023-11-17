import { Button } from 'free-bee';

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
    <Button label="This is a button" />
    {/* <Radio /> */}
    {/* <Breadcrumbs>Hi</Breadcrumbs> */}
    This is desktop
  </Main>
);

export default Index;
